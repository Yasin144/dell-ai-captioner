import io
import json
import os
import shutil
import subprocess
import threading
import traceback
import warnings
import wave
from collections import OrderedDict
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

warnings.filterwarnings(
    "ignore",
    message=r".*pkg_resources is deprecated as an API.*",
    category=UserWarning,
)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", UserWarning)

PROJECT_ROOT = Path(__file__).resolve().parent
PORT = 8426
REFERENCE_MP3 = PROJECT_ROOT / "voice-preview-anjali.mp3"
REFERENCE_WAV = PROJECT_ROOT / "voice-preview-anjali.wav"
REFERENCE_SOURCE_VIDEO = PROJECT_ROOT / "voice-reference-anjali-source.mp4"
BUNDLED_MP3 = PROJECT_ROOT / "voice-preview-anjali.mp3"
DESKTOP_MP3 = Path.home() / "Desktop" / "voice_preview_anjali - warm, cheerful and clear.mp3"
DESKTOP_GOOD_VOICE_VIDEO = Path.home() / "Desktop" / "good voice.mp4"
NARRATION_CACHE_LIMIT = 24

for proxy_key in ("HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY", "http_proxy", "https_proxy", "all_proxy"):
    os.environ.pop(proxy_key, None)

import numpy as np
import torch
try:
    from chatterbox.tts_turbo import ChatterboxTurboTTS
except ImportError:
    ChatterboxTurboTTS = None
import base64
from PIL import Image

VISION_MODEL = None
VISION_TOKENIZER = None
VISION_LOADING = False

def get_vision_engine():
    global VISION_MODEL, VISION_TOKENIZER, VISION_LOADING
    if VISION_MODEL is None:
        if VISION_LOADING:
            raise Exception("The ultra-smart Vision AI is currently downloading/loading its brain (1.5GB) into memory. Please wait a few moments and try again!")
        VISION_LOADING = True
        try:
            print("\n[VISION] Booting Moondream2 Local Vision-Language Brain to D: Drive... (May take a moment to download).", flush=True)
            import os
            import torchvision  # REQUIRED to register C++ operators like torchvision::nms!
            cache_path = "D:\\AI_Models\\HuggingFace"
            os.makedirs(cache_path, exist_ok=True)
            from transformers import AutoModelForCausalLM, AutoTokenizer
            model_id = "vikhyatk/moondream2"
            revision = "2024-08-26"
            VISION_MODEL = AutoModelForCausalLM.from_pretrained(model_id, trust_remote_code=True, revision=revision, cache_dir=cache_path)
            VISION_TOKENIZER = AutoTokenizer.from_pretrained(model_id, revision=revision, cache_dir=cache_path)
            print("[VISION] Vision Brain fully initialized on D: Drive and ready to auto-teach!", flush=True)
        finally:
            VISION_LOADING = False
    return VISION_MODEL, VISION_TOKENIZER

def ensure_reference_mp3():
    if REFERENCE_SOURCE_VIDEO.exists() or DESKTOP_GOOD_VOICE_VIDEO.exists():
        return None

    if REFERENCE_MP3.exists():
        return REFERENCE_MP3

    if DESKTOP_MP3.exists():
        shutil.copy2(DESKTOP_MP3, REFERENCE_MP3)
        return REFERENCE_MP3

    if BUNDLED_MP3.exists():
        shutil.copy2(BUNDLED_MP3, REFERENCE_MP3)
        return REFERENCE_MP3

    raise FileNotFoundError("Anjali reference MP3 was not found.")


def ensure_reference_wav():
    preferred_video = REFERENCE_SOURCE_VIDEO if REFERENCE_SOURCE_VIDEO.exists() else DESKTOP_GOOD_VOICE_VIDEO
    if preferred_video.exists():
        source_path = preferred_video
        if REFERENCE_WAV.exists() and REFERENCE_WAV.stat().st_mtime >= source_path.stat().st_mtime:
            return REFERENCE_WAV

        command = [
            "ffmpeg",
            "-y",
            "-i",
            str(source_path),
            "-vn",
            "-ss",
            "2",
            "-t",
            "12",
            "-af",
            "silenceremove=start_periods=1:start_threshold=-42dB:start_silence=0.25,loudnorm=I=-18:TP=-1.5:LRA=11",
            "-ac",
            "1",
            "-ar",
            "24000",
            str(REFERENCE_WAV),
        ]
        completed = subprocess.run(command, capture_output=True, text=True, check=False)
        if completed.returncode != 0:
            raise RuntimeError(completed.stderr.strip() or "ffmpeg failed while preparing the Anjali reference clip from good voice.mp4.")
        return REFERENCE_WAV

    source_mp3 = ensure_reference_mp3()
    if REFERENCE_WAV.exists() and source_mp3 and REFERENCE_WAV.stat().st_mtime >= source_mp3.stat().st_mtime:
        return REFERENCE_WAV

    command = [
        "ffmpeg",
        "-y",
        "-i",
        str(source_mp3),
        "-ac",
        "1",
        "-ar",
        "24000",
        str(REFERENCE_WAV),
    ]
    completed = subprocess.run(command, capture_output=True, text=True, check=False)
    if completed.returncode != 0:
        raise RuntimeError(completed.stderr.strip() or "ffmpeg failed while preparing the Anjali reference clip.")
    return REFERENCE_WAV


class AnjaliCloneEngine:
    def __init__(self):
        self.lock = threading.Lock()
        self.model = None
        self.model_error = ""
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.sample_rate = 24000
        self.cache = OrderedDict()
        self.reference_key = None
        self.conditioning_key = None
        self.target_profile = {
            "voiceId": "anjali",
            "gender": "female",
            "locale": "en-IN",
            "accent": "indian",
            "style": "indian-female-clear-classroom",
        }
        self.generate_options = {
            "repetition_penalty": 1.12,
            "top_p": 0.88,
            "temperature": 0.58,
            "top_k": 64,
            "exaggeration": 0.0,
            "cfg_weight": 0.0,
            "min_p": 0.0,
            "norm_loudness": True,
        }

    def get_health(self):
        reference_exists = (
            REFERENCE_WAV.exists()
            or REFERENCE_SOURCE_VIDEO.exists()
            or DESKTOP_GOOD_VOICE_VIDEO.exists()
            or REFERENCE_MP3.exists()
            or DESKTOP_MP3.exists()
            or BUNDLED_MP3.exists()
        )
        reference_file = (
            REFERENCE_WAV if REFERENCE_WAV.exists()
            else REFERENCE_SOURCE_VIDEO if REFERENCE_SOURCE_VIDEO.exists()
            else DESKTOP_GOOD_VOICE_VIDEO if DESKTOP_GOOD_VOICE_VIDEO.exists()
            else REFERENCE_MP3 if REFERENCE_MP3.exists()
            else DESKTOP_MP3 if DESKTOP_MP3.exists()
            else BUNDLED_MP3
        )
        return {
            "ok": True,
            "voice": "anjali",
            "engine": "chatterbox-turbo",
            "profile": self.target_profile,
            "generationOptions": self.generate_options,
            "device": self.device,
            "modelLoaded": self.model is not None,
            "cacheEntries": len(self.cache),
            "referenceReady": reference_exists,
            "referenceFile": str(reference_file),
            "sampleRate": self.sample_rate,
            "error": self.model_error,
        }

    def preload(self):
        try:
            self._ensure_model_loaded()
        except Exception as exc:
            self.model_error = str(exc)
            print("Anjali preload failed:", exc, flush=True)

    def _ensure_model_loaded(self):
        if self.model is not None:
            return self.model

        with self.lock:
            if self.model is not None:
                return self.model

            ensure_reference_wav()
            torch.set_num_threads(max(1, os.cpu_count() or 4))
            try:
                torch.set_num_interop_threads(max(1, min(4, os.cpu_count() or 4)))
            except RuntimeError:
                pass
            if ChatterboxTurboTTS is None:
                raise Exception("Chatterbox library not installed. Voice cloning features are disabled.")
            self.model = ChatterboxTurboTTS.from_pretrained(self.device)
            self.sample_rate = int(getattr(self.model, "sr", 24000) or 24000)
            self.reference_key = self._get_reference_key()
            self.model_error = ""
            print(f"Anjali Chatterbox model loaded on {self.device}.", flush=True)
            return self.model

    def _get_reference_key(self):
        reference_path = ensure_reference_wav()
        return (str(reference_path), reference_path.stat().st_mtime_ns)

    def _reference_path(self):
        reference_key = self._get_reference_key()
        self.reference_key = reference_key
        return reference_key[0]

    def _ensure_conditionals_ready(self):
        model = self._ensure_model_loaded()
        reference_path = self._reference_path()
        norm_loudness = bool(self.generate_options.get("norm_loudness", True))
        conditioning_key = (
            self.reference_key[1] if self.reference_key else None,
            norm_loudness,
        )
        if self.conditioning_key == conditioning_key and getattr(model, "conds", None) is not None:
            return model

        model.prepare_conditionals(
            reference_path,
            exaggeration=0.0,
            norm_loudness=norm_loudness,
        )
        self.conditioning_key = conditioning_key
        return model

    @staticmethod
    def _wav_array_to_bytes(wav_values, sample_rate):
        wav_np = np.asarray(wav_values, dtype=np.float32).reshape(-1)
        wav_np = np.clip(wav_np, -1.0, 1.0)
        pcm = (wav_np * 32767.0).round().astype(np.int16)

        output = io.BytesIO()
        with wave.open(output, "wb") as wav_file:
            wav_file.setnchannels(1)
            wav_file.setsampwidth(2)
            wav_file.setframerate(int(sample_rate))
            wav_file.writeframes(pcm.tobytes())
        return output.getvalue()

    def _make_cache_key(self, text):
        safe_text = str(text or "").strip()
        option_key = "|".join(f"{key}={self.generate_options.get(key)}" for key in sorted(self.generate_options))
        profile_key = "|".join(f"{key}={self.target_profile.get(key)}" for key in sorted(self.target_profile))
        reference_key = self._get_reference_key()
        return f"{safe_text}||{profile_key}||{option_key}||ref={reference_key[1]}"

    def _get_cached_audio(self, text):
        cache_key = self._make_cache_key(text)
        if not cache_key:
            return None

        with self.lock:
            cached = self.cache.get(cache_key)
            if cached is None:
                return None
            self.cache.move_to_end(cache_key)
            return cached

    def _store_cached_audio(self, text, wav_bytes):
        cache_key = self._make_cache_key(text)
        if not cache_key or not wav_bytes:
            return

        with self.lock:
            self.cache[cache_key] = wav_bytes
            self.cache.move_to_end(cache_key)
            while len(self.cache) > NARRATION_CACHE_LIMIT:
                self.cache.popitem(last=False)

    def synthesize(self, text):
        safe_text = str(text or "").strip()
        if not safe_text:
            raise ValueError("Text is required.")

        cached_bytes = self._get_cached_audio(safe_text)
        if cached_bytes is not None:
            return cached_bytes

        model = self._ensure_model_loaded()
        with self.lock:
            model = self._ensure_conditionals_ready()
            with torch.inference_mode():
                wav = model.generate(
                    safe_text,
                    audio_prompt_path=None,
                    repetition_penalty=float(self.generate_options.get("repetition_penalty", 1.12)),
                    top_p=float(self.generate_options.get("top_p", 0.88)),
                    temperature=float(self.generate_options.get("temperature", 0.58)),
                    top_k=int(self.generate_options.get("top_k", 64)),
                    cfg_weight=float(self.generate_options.get("cfg_weight", 0.0)),
                    exaggeration=float(self.generate_options.get("exaggeration", 0.0)),
                    min_p=float(self.generate_options.get("min_p", 0.0)),
                    norm_loudness=bool(self.generate_options.get("norm_loudness", True)),
                )

            wav_np = wav.squeeze(0).detach().cpu().numpy()
            wav_bytes = self._wav_array_to_bytes(wav_np, self.sample_rate)

        self._store_cached_audio(safe_text, wav_bytes)
        return wav_bytes


ENGINE = AnjaliCloneEngine()


class Handler(BaseHTTPRequestHandler):
    server_version = "AnjaliChatterboxServer/1.0"
    CLIENT_DISCONNECT_ERRORS = (BrokenPipeError, ConnectionAbortedError, ConnectionResetError)

    def log_message(self, format, *args):
        print("%s - - [%s] %s" % (self.address_string(), self.log_date_time_string(), format % args), flush=True)

    def _send_headers(self, status_code=200, content_type="application/json; charset=utf-8", content_length=0):
        self.send_response(status_code)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        if content_type:
            self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(content_length))
        try:
            self.end_headers()
        except self.CLIENT_DISCONNECT_ERRORS:
            return False
        return True

    def _safe_write(self, payload):
        try:
            self.wfile.write(payload)
        except self.CLIENT_DISCONNECT_ERRORS:
            return False
        return True

    def _send_json(self, payload, status_code=200):
        body = json.dumps(payload).encode("utf-8")
        if not self._send_headers(status_code=status_code, content_type="application/json; charset=utf-8", content_length=len(body)):
            return False
        return self._safe_write(body)

    def do_OPTIONS(self):
        self._send_headers(status_code=204, content_type="", content_length=0)

    def do_GET(self):
        if self.path.startswith("/health") or self.path == "/":
            self._send_json(ENGINE.get_health())
            return

        self._send_json({"error": "Route not found."}, status_code=404)

    def do_POST(self):
        if self.path.startswith("/api/vision/analyze"):
            try:
                content_length = int(self.headers.get("Content-Length", "0") or "0")
                raw_body = self.rfile.read(content_length) if content_length else b"{}"
                payload = json.loads(raw_body.decode("utf-8"))
                
                b64_img = payload.get("image", "").split("base64,")[-1]
                prompt = payload.get("prompt", "Analyze this image and explain exactly what it teaches in a short, easy-to-read educational paragraph that a teacher could read to students.")
                
                import base64
                from PIL import Image
                import io
                
                image_data = base64.b64decode(b64_img)
                img = Image.open(io.BytesIO(image_data))
                
                v_model, v_tokenizer = get_vision_engine()
                enc_image = v_model.encode_image(img)
                answer = v_model.answer_question(enc_image, prompt, v_tokenizer)
                
                self._send_json({"text": answer})
            except Exception as e:
                self._send_json({"error": str(e), "traceback": traceback.format_exc(limit=3)}, status_code=500)
            return

        if not self.path.startswith("/api/narrate"):
            self._send_json({"error": "Route not found."}, status_code=404)
            return

        try:
            content_length = int(self.headers.get("Content-Length", "0") or "0")
            raw_body = self.rfile.read(content_length) if content_length else b"{}"
            payload = json.loads(raw_body.decode("utf-8"))
            text = payload.get("text", "")
            generation_options = payload.get("generationOptions")
            if isinstance(generation_options, dict):
                ENGINE.generate_options = {
                    "repetition_penalty": float(generation_options.get("repetitionPenalty", generation_options.get("repetition_penalty", 1.12)) or 1.12),
                    "top_p": float(generation_options.get("topP", generation_options.get("top_p", 0.88)) or 0.88),
                    "temperature": float(generation_options.get("temperature", 0.58) or 0.58),
                    "top_k": int(generation_options.get("topK", generation_options.get("top_k", 64)) or 64),
                    "cfg_weight": float(generation_options.get("cfgWeight", generation_options.get("cfg_weight", 0.0)) or 0.0),
                    "exaggeration": float(generation_options.get("exaggeration", 0.0) or 0.0),
                    "min_p": float(generation_options.get("minP", generation_options.get("min_p", 0.0)) or 0.0),
                    "norm_loudness": bool(generation_options.get("normLoudness", generation_options.get("norm_loudness", True))),
                }
            wav_bytes = ENGINE.synthesize(text)
            if not self._send_headers(status_code=200, content_type="audio/wav", content_length=len(wav_bytes)):
                return
            self._safe_write(wav_bytes)
        except self.CLIENT_DISCONNECT_ERRORS:
            return
        except Exception as exc:
            ENGINE.model_error = str(exc)
            error_payload = {
                "error": str(exc),
                "traceback": traceback.format_exc(limit=3),
            }
            try:
                self._send_json(error_payload, status_code=500)
            except self.CLIENT_DISCONNECT_ERRORS:
                return


def main():
    print(f"Anjali clone server listening on http://127.0.0.1:{PORT}", flush=True)
    threading.Thread(target=ENGINE.preload, daemon=True).start()
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    server.serve_forever()


if __name__ == "__main__":
    main()
