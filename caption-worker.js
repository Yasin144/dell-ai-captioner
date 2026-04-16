import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.16.1';

env.allowLocalModels = false;
env.useBrowserCache = true;

let transcriber = null;

function safeClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        if (typeof obj === 'bigint') return Number(obj);
        return obj;
    }
    if (Array.isArray(obj)) return obj.map(safeClone);
    const out = {};
    for (const k in obj) {
        if (typeof obj[k] === 'function') continue;
        out[k] = safeClone(obj[k]);
    }
    return out;
}

self.onmessage = async (e) => {
    if (e.data.type === 'init') {
        try {
            if (!transcriber) {
                transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-base.en', {
                    progress_callback: data => {
                        self.postMessage({ type: 'progress', data: safeClone(data) });
                    }
                });
            }
            self.postMessage({ type: 'init_done' });
        } catch (err) {
            self.postMessage({ type: 'error', error: err.message });
        }
    } else if (e.data.type === 'transcribe') {
        try {
            const { audioDataArray, options, duration } = e.data;
            const result = await transcriber(audioDataArray, {
                ...options,
                chunk_callback: (chunk) => {
                    self.postMessage({ type: 'chunk_progress', chunk: safeClone(chunk), duration });
                }
            });
            self.postMessage({ type: 'result', result: safeClone(result) });
        } catch (err) {
            self.postMessage({ type: 'error', error: err.message });
        }
    }
};
