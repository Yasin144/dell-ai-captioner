let captionWorker = null;

document.addEventListener('DOMContentLoaded', () => {
    const videoInput = document.getElementById('captionVideoInput');
    const videoContainer = document.getElementById('captionVideoContainer');
    const sourceVideo = document.getElementById('captionSourceVideo');
    const renderCanvas = document.getElementById('captionRenderCanvas');
    if (sourceVideo) {
        sourceVideo.removeAttribute('hidden');
        sourceVideo.style.cssText = "position:absolute; width:1px; height:1px; opacity:0.01; pointer-events:none; z-index:-10;";
    }
    const statusText = document.getElementById('captionStatusText');
    const actionBtn = document.getElementById('captionActionBtn');
    const exportBtn = document.getElementById('captionExportBtn');
    const progressBlock = document.getElementById('captionProgress');
    
    // Controls
    const playPauseBtn = document.getElementById('captionPlayPauseBtn');
    const seekSlider = document.getElementById('captionSeekSlider');
    const timeDisplay = document.getElementById('captionTimeDisplay');
    const videoControls = document.getElementById('captionVideoControls');
    
    // Editor UI
    const editorPanel = document.getElementById('captionEditorPanel');
    const captionList = document.getElementById('captionList');
    const resetBtn = document.getElementById('captionResetBtn');
    
    // Style Selector & Layout & Advanced Control
    const styleSelect = document.getElementById('captionStyleSelect');
    const sizeSlider = document.getElementById('captionSizeSlider');
    const gapSlider = document.getElementById('captionGapSlider');
    const widthSlider = document.getElementById('captionWidthSlider');
    const translateCheck = document.getElementById('captionTranslateCheck');
    const fontSelect = document.getElementById('captionFontSelect');
    const strokeSlider = document.getElementById('captionStrokeSlider');
    const colorPicker = document.getElementById('captionColorPicker');
    const syncSlider = document.getElementById('captionSyncSlider');
    
    // Elite Powers DOM
    const emojiCheck = document.getElementById('captionEmojiCheck');
    const karaokeCheck = document.getElementById('captionKaraokeCheck');
    const filterSelect = document.getElementById('captionFilterSelect');

    const brollCheck = document.getElementById('captionBrollCheck');
    const sfxCheck = document.getElementById('captionSfxCheck');
    const bgMusicInput = document.getElementById('bgMusicInput');
    const bgMusicAudio = document.getElementById('bgMusicAudio');
    const viralShortBtn = document.getElementById('captionViralShortBtn');

    const progressCheck = document.getElementById('captionProgressBarCheck');
    const watermarkInput = document.getElementById('captionWatermarkInput');
    const watermarkCheck = document.getElementById('captionWatermarkCheck');
    const bgMusicCheck = document.getElementById('captionBgMusicCheck');
    let sharedWatermarkImage = null;

    if (watermarkInput) {
        watermarkInput.addEventListener('change', (e) => {
            if(e.target.files[0]) {
                sharedWatermarkImage = new Image();
                sharedWatermarkImage.src = URL.createObjectURL(e.target.files[0]);
            }
        });
    }

    if (bgMusicInput) {
        bgMusicInput.addEventListener('change', (e) => {
            if(e.target.files[0]) {
                bgMusicAudio.src = URL.createObjectURL(e.target.files[0]);
                bgMusicAudio.volume = 0.5;
                bgMusicAudio.play().catch(e => console.log("Audio play deferred", e));
            }
        });
    }

    const sfxCtx = new (window.AudioContext || window.webkitAudioContext)();
    const sfxDest = sfxCtx.createMediaStreamDestination();
    let lastSfxWordIndex = -1;

    function playSfx(type) {
        if (!sfxCheck || !sfxCheck.checked) return;
        const osc = sfxCtx.createOscillator();
        const gain = sfxCtx.createGain();
        osc.connect(gain);
        gain.connect(sfxCtx.destination);
        gain.connect(sfxDest);
        if (type === 'pop') {
            osc.type = 'sine'; osc.frequency.setValueAtTime(800, sfxCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, sfxCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.5, sfxCtx.currentTime); 
            gain.gain.exponentialRampToValueAtTime(0.01, sfxCtx.currentTime + 0.1);
            osc.start(); osc.stop(sfxCtx.currentTime + 0.1);
        } else if (type === 'whoosh') {
            osc.type = 'triangle'; osc.frequency.setValueAtTime(100, sfxCtx.currentTime);
            gain.gain.setValueAtTime(0.3, sfxCtx.currentTime); 
            gain.gain.linearRampToValueAtTime(0.01, sfxCtx.currentTime + 0.4);
            osc.start(); osc.stop(sfxCtx.currentTime + 0.4);
        }
    }

    const brollUrls = {
        'space': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80',
        'money': 'https://images.unsplash.com/photo-1580519542036-ed474161b51a?w=1280&q=80',
        'nature': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&q=80',
        'tech': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=80',
        'car': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1280&q=80'
    };
    const loadedBroll = {};
    for (const [k, url] of Object.entries(brollUrls)) {
        const img = new Image(); img.crossOrigin = "anonymous"; img.src = url; loadedBroll[k] = img;
    }
    const brollKeywords = {
        'space': 'space', 'moon': 'space', 'stars': 'space', 'galaxy': 'space', 'earth': 'space',
        'money': 'money', 'cash': 'money', 'dollar': 'money', 'buy': 'money', 'rich': 'money', 'wealth': 'money',
        'nature': 'nature', 'tree': 'nature', 'forest': 'nature', 'sun': 'nature', 'world': 'nature',
        'tech': 'tech', 'computer': 'tech', 'code': 'tech', 'app': 'tech', 'robot': 'tech', 'ai': 'tech',
        'car': 'car', 'drive': 'car', 'fast': 'car', 'ride': 'car', 'speed': 'car'
    };
    function getBrollForText(text) {
        if (!brollCheck || !brollCheck.checked || !text) return null;
        const cleanWords = text.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ');
        for (let w of cleanWords) { if (brollKeywords[w]) return loadedBroll[brollKeywords[w]]; }
        return null;
    }

    const emojiDict = {
        'money': '💰', 'dollar': '💵', 'cash': '💲', 'buy': '🛍️',
        'happy': '😊', 'smile': '😃', 'love': '❤️', 'heart': '💖', 'good': '👍',
        'fire': '🔥', 'hot': '🥵', 'burn': '🔥', 'lit': '🔥',
        'rocket': '🚀', 'moon': '🌕', 'space': '🌌', 'sky': '☁️',
        'star': '⭐', 'magic': '✨', 'sparkle': '✨',
        'sad': '😢', 'cry': '😭', 'tear': '💧', 'bad': '👎',
        'boom': '💥', 'explosion': '💣', 'crash': '💥',
        'time': '⏳', 'clock': '🕰️', 'wait': '⌛', 'fast': '⚡', 'slow': '🐢',
        'idea': '💡', 'brain': '🧠', 'mind': '🧠', 'think': '🤔',
        'computer': '💻', 'tech': '🤖', 'robot': '🤖', 'app': '📱', 'phone': '📱',
        'music': '🎵', 'song': '🎵', 'dance': '💃', 'play': '▶️',
        'sun': '☀️', 'day': '🌞', 'light': '☀️', 'morning': '🌅',
        'laugh': '😂', 'funny': '🤣', 'lol': '😆', 'joke': '🤡',
        'world': '🌍', 'earth': '🌍', 'global': '🌐',
        'food': '🍔', 'eat': '🍽️', 'hungry': '🤤'
    };

    function getEmojiForText(text) {
        const cleanWords = text.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ');
        for (let w of cleanWords) {
            if (emojiDict[w]) return emojiDict[w];
        }
        return null;
    }

    let captionPosX = 0.5;
    let captionPosY = 0.85;
    let isDraggingCaption = false;

    renderCanvas.addEventListener('pointerdown', () => { isDraggingCaption = true; });
    renderCanvas.addEventListener('pointermove', (e) => {
        if (!isDraggingCaption) return;
        const rect = renderCanvas.getBoundingClientRect();
        captionPosX = (e.clientX - rect.left) / rect.width;
        captionPosY = (e.clientY - rect.top) / rect.height;
        // Force a redraw just in case paused
        if (sourceVideo.paused && hasDrawnFirstFrame) {
            const ctx = renderCanvas.getContext('2d');
            ctx.drawImage(sourceVideo, 0, 0, renderCanvas.width, renderCanvas.height);
            const time = sourceVideo.currentTime;
            const currentChunk = generatedCaptions.find(c => time >= c.timestamp[0] && time <= c.timestamp[1]);
            if (currentChunk && currentChunk.text) {
                const baseFontSize = renderCanvas.height * 0.08;
                const sizeMult = (sizeSlider ? parseInt(sizeSlider.value) : 80) / 100;
                const fontSize = Math.floor(baseFontSize * sizeMult);
                const gapMult = (gapSlider ? parseInt(gapSlider.value) : 120) / 100;
                const lineHeight = fontSize * gapMult;
                const maxWBase = renderCanvas.width;
                const widthMult = (widthSlider ? parseInt(widthSlider.value) : 85) / 100;
                const maxWidth = maxWBase * widthMult;
                ctx.font = `900 ${fontSize}px Nunito, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                drawWrappedText(ctx, currentChunk.text.trim(), renderCanvas.width * captionPosX, renderCanvas.height * captionPosY, maxWidth, lineHeight, time - currentChunk.timestamp[0], styleSelect.value);
            }
        }
    });
    renderCanvas.addEventListener('pointerup', () => isDraggingCaption = false);
    renderCanvas.addEventListener('pointerleave', () => isDraggingCaption = false);

    let videoUrl = null;
    let audioDataArray = null;
    let generatedCaptions = [];
    let isExtractingText = false;
    let isRecording = false;
    let transcriber = null;
    let hasDrawnFirstFrame = false;

    function formatTime(seconds) {
        if(isNaN(seconds)) return "00:00";
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    sourceVideo.addEventListener('timeupdate', () => {
        if (!seekSlider.isDragging) seekSlider.value = sourceVideo.currentTime;
        seekSlider.max = sourceVideo.duration || 100;
        timeDisplay.textContent = `${formatTime(sourceVideo.currentTime)} / ${formatTime(sourceVideo.duration)}`;
    });

    seekSlider.addEventListener('mousedown', () => seekSlider.isDragging = true);
    seekSlider.addEventListener('mouseup', () => seekSlider.isDragging = false);
    seekSlider.addEventListener('input', () => sourceVideo.currentTime = seekSlider.value);

    playPauseBtn.addEventListener('click', () => {
        if (sourceVideo.paused) { sourceVideo.play(); playPauseBtn.textContent = '⏸️ Pause'; } 
        else { sourceVideo.pause(); playPauseBtn.textContent = '▶️ Play'; }
    });
    
    resetBtn.addEventListener('click', () => {
        sourceVideo.pause(); sourceVideo.src = ''; generatedCaptions = []; hasDrawnFirstFrame = false;
        videoContainer.classList.add('hidden');
        actionBtn.disabled = true; actionBtn.classList.remove('hidden');
        exportBtn.classList.add('hidden'); editorPanel.classList.add('hidden');
        resetBtn.classList.add('hidden'); progressBlock.classList.add('hidden');
        videoInput.value = '';
    });

    videoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        videoUrl = URL.createObjectURL(file);
        
        videoContainer.classList.remove('hidden');
        actionBtn.disabled = false;
        resetBtn.classList.remove('hidden');
        actionBtn.textContent = 'Generate Captions';

        sourceVideo.addEventListener('loadedmetadata', () => {
            let vw = sourceVideo.videoWidth;
            let vh = sourceVideo.videoHeight;
            
            // Fallback for audio-only uploads or parsed metadata failures
            if (!vw || !vh || vw === 0 || vh === 0) {
                vw = 1920;
                vh = 1080;
            }

            const MIN_MAX_DIM = 1920; // Force 1080p to avoid CPU meltdown
            let maxDim = Math.max(vw, vh);
            if (maxDim < MIN_MAX_DIM && vh > 0) {
                const scale = MIN_MAX_DIM / maxDim;
                vw = vw * scale;
                vh = vh * scale;
            }
            renderCanvas.width = Math.floor(vw); 
            renderCanvas.height = Math.floor(vh);
        }, { once: true });
        
        sourceVideo.addEventListener('loadeddata', () => {
            if(!hasDrawnFirstFrame) {
                const ctx = renderCanvas.getContext('2d');
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                
                const filter = filterSelect ? filterSelect.value : 'none';
                if (filter === 'darken') ctx.filter = 'brightness(50%)';
                else if (filter === 'blur') ctx.filter = 'blur(10px)';
                else if (filter === 'grayscale') ctx.filter = 'grayscale(100%)';
                else if (filter === 'sepia') ctx.filter = 'sepia(100%)';
                else if (filter === 'invert') ctx.filter = 'invert(100%) hue-rotate(180deg)';
                else ctx.filter = 'none';

                if (sourceVideo.readyState >= 2) {
                    try {
                        ctx.drawImage(sourceVideo, 0, 0, renderCanvas.width, renderCanvas.height);
                    } catch(e) {}
                }
                ctx.filter = 'none';
                hasDrawnFirstFrame = true;
            }
        });
        
        sourceVideo.src = videoUrl;

        progressBlock.classList.remove('hidden');
        statusText.innerHTML = "Video loaded. Ready.";
    });

    async function extractAudio(url) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
        statusText.innerHTML = "Fetching audio tracks...";
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        statusText.innerHTML = "Decoding audio data...";
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        return audioBuffer.getChannelData(0);
    }
    
    function populateEditor() {
        captionList.innerHTML = '';
        generatedCaptions.forEach((chunk, i) => {
            const div = document.createElement('div');
            div.style.cssText = "display: flex; gap: 8px; margin-bottom: 8px; align-items: stretch;";
            div.innerHTML = `
                <div style="font-family: monospace; background: rgba(0,0,0,0.1); padding: 8px; border-radius: 4px; font-size: 0.85rem; display: flex; align-items: center; white-space: nowrap;">${formatTime(chunk.timestamp[0])}</div>
                <input type="text" class="chunk-editor" style="flex-grow: 1; background: rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.2); padding: 8px; border-radius: 4px; font-family: inherit; font-size: 0.95rem; color: inherit;" value="${chunk.text.replace(/"/g, '&quot;')}" data-index="${i}">
                <input type="color" class="chunk-color-picker" data-index="${i}" title="Speaker Color Override" style="height:40px; cursor:pointer;" value="#fde047">
            `;
            captionList.appendChild(div);
        });
        document.querySelectorAll('#captionList .chunk-editor').forEach(input => {
            input.addEventListener('input', (e) => generatedCaptions[parseInt(e.target.dataset.index)].text = e.target.value);
        });
        document.querySelectorAll('#captionList .chunk-color-picker').forEach(input => {
            input.addEventListener('input', (e) => generatedCaptions[parseInt(e.target.dataset.index)].colorOverride = e.target.value);
        });
    }

    actionBtn.addEventListener('click', async () => {
        if (isExtractingText) return;
        isExtractingText = true; actionBtn.disabled = true;
        
        try {
            audioDataArray = await extractAudio(videoUrl);
            if (!captionWorker) {
                captionWorker = new Worker('caption-worker.js', { type: 'module' });
                captionWorker.onmessage = (e) => {
                    const msg = e.data;
                    if (msg.type === 'progress' && msg.data) {
                        if (msg.data.status === 'progress' && msg.data.progress !== undefined) {
                            statusText.innerHTML = `Downloading Engine: ${Math.round(msg.data.progress)}%`;
                        } else if (msg.data.status === 'init') {
                            statusText.innerHTML = `Initializing AI Engine...`;
                        }
                    } else if (msg.type === 'chunk_progress') {
                        if (msg.chunk && msg.chunk.timestamp && msg.duration) {
                            let end = msg.chunk.timestamp[1] || msg.duration;
                            let pct = Math.min(Math.round((end / msg.duration) * 100), 99);
                            statusText.innerHTML = `Transcribing Audio to Text... ${pct}%`;
                        }
                    }
                };
            }

            statusText.innerHTML = "Loading Whisper AI English Engine (~145MB)...";
            
            // Promise wrapper for the entire worker flow
            const result = await new Promise((resolve, reject) => {
                const messageHandler = (e) => {
                    const msg = e.data;
                    if (msg.type === 'error') {
                        captionWorker.removeEventListener('message', messageHandler);
                        reject(new Error(msg.error));
                    } else if (msg.type === 'init_done') {
                        let transcribeOptions = { chunk_length_s: 30, stride_length_s: 5, return_timestamps: true };
                        if (translateCheck && translateCheck.checked) {
                            transcribeOptions.task = 'translate';
                            statusText.innerHTML = "Auto-Translating any detected language directly to English...";
                        }
                        captionWorker.postMessage({ type: 'transcribe', audioDataArray, options: transcribeOptions, duration: sourceVideo.duration });
                    } else if (msg.type === 'result') {
                        captionWorker.removeEventListener('message', messageHandler);
                        resolve(msg.result);
                    }
                };
                captionWorker.addEventListener('message', messageHandler);
                // Trigger worker initialization
                captionWorker.postMessage({ type: 'init' });
            });

            let rawChunks = result.chunks || [];
            let cleanCaptions = [];
            rawChunks.forEach(c => {
                // Remove environmental noise tags generated by Whisper like [Music], (upbeat music), or ♪
                let strippedText = c.text.replace(/\[.*?\]|\(.*?\)|♪|♫/g, '').trim();
                if (strippedText.length > 0) {
                    c.text = strippedText;
                    cleanCaptions.push(c);
                }
            });

            generatedCaptions = cleanCaptions;
            generatedCaptions.forEach(c => { if (c.timestamp[1] === null) c.timestamp[1] = sourceVideo.duration; });
            
            if(generatedCaptions.length === 0 && result.text) {
                let strippedText = result.text.replace(/\[.*?\]|\(.*?\)|♪|♫/g, '').trim();
                if (strippedText.length > 0) generatedCaptions = [{text: strippedText, timestamp: [0, sourceVideo.duration]}];
            }
            
            editorPanel.classList.remove('hidden'); populateEditor();
            statusText.innerHTML = "✅ Captions Generated successfully!";
            actionBtn.classList.add('hidden'); exportBtn.classList.remove('hidden');
            
            sourceVideo.currentTime = 0; sourceVideo.play(); playPauseBtn.textContent = '⏸️ Pause';
            if (!window.isRenderLoopRunning) {
                window.isRenderLoopRunning = true;
                requestAnimationFrame(renderLoop);
            }

        } catch (error) { statusText.innerHTML = "❌ Error: " + error.message;
        } finally { isExtractingText = false; actionBtn.disabled = false; }
    });
    
    function drawWrappedText(ctx, fullText, x, y, maxWidth, lineHeight, elapsedTime, styleType, activeWordIndex = -1, targetEmoji = null, fontSize = 50, colorOverride = null) {
        let text = fullText;
        if (styleType === 'typewriter') {
            const revealLen = Math.floor(elapsedTime * 25);
            if (revealLen < text.length) text = text.slice(0, revealLen);
        }

        const words = text.split(' '); let line = ''; const lines = [];
        for(let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            if (ctx.measureText(testLine).width > maxWidth && n > 0) { lines.push(line); line = words[n] + ' '; } 
            else line = testLine;
        }
        lines.push(line);

        ctx.save();
        ctx.translate(x, y);

        const globalColor = colorOverride || (colorPicker ? colorPicker.value : '#fde047');
        const strokeScale = strokeSlider ? parseInt(strokeSlider.value) / 100 : 0.8;
        const baseStrokeWidth = Math.max(0, Math.floor(lineHeight * 0.15 * strokeScale));

        let currentY = -(lines.length * lineHeight) / 2 + lineHeight / 2;
        
        // Draw floating Emoji Reaction on top of caption block if requested
        if (targetEmoji) {
            ctx.save();
            // Pop bounce animation based on time
            const emojiScale = elapsedTime < 0.2 ? 0.5 + (Math.sin(elapsedTime / 0.2 * Math.PI / 2) * 0.7) : 1.2;
            ctx.scale(emojiScale, emojiScale);
            ctx.font = `900 ${fontSize * 1.5}px sans-serif`;
            ctx.fillText(targetEmoji, 0, - (lines.length * lineHeight)/2 - Math.max(30, fontSize));
            ctx.restore();
        }

        const renderLine = (txt, yPos, wordCursorStart, drawShadowFx) => {
            if (activeWordIndex === -1 || styleType === 'typewriter' || styleType === 'glitch') {
                if (drawShadowFx) drawShadowFx();
                if (baseStrokeWidth > 0 && styleType !== 'glitch' && styleType !== 'retro') ctx.strokeText(txt, 0, yPos);
                ctx.fillText(txt, 0, yPos);
                return txt.split(' ').length;
            } else {
                const wds = txt.split(' ');
                let cx = -ctx.measureText(txt).width / 2;
                for(let w = 0; w < wds.length; w++) {
                    const bw = ctx.measureText(wds[w]).width;
                    const isFocus = (wordCursorStart + w === activeWordIndex);
                    const ogAlpha = ctx.globalAlpha;
                    const ogFill = ctx.fillStyle;
                    
                    if (!isFocus) { ctx.globalAlpha = ogAlpha * 0.3; ctx.fillStyle = '#ffffff'; }
                    
                    if (drawShadowFx) drawShadowFx();
                    if (baseStrokeWidth > 0 && styleType !== 'glitch' && styleType !== 'retro') ctx.strokeText(wds[w], cx + bw/2, yPos);
                    ctx.fillText(wds[w], cx + bw/2, yPos);
                    
                    if (!isFocus) { ctx.globalAlpha = ogAlpha; ctx.fillStyle = ogFill; }
                    cx += bw + ctx.measureText(' ').width;
                }
                return wds.length;
            }
        };

        let wordCursor = 0;

        if (styleType === 'tiktok') {
            let scale = 1.0;
            if (elapsedTime < 0.15) scale = 0.5 + (Math.sin((elapsedTime / 0.15) * Math.PI / 2) * 0.6); 
            else if (elapsedTime < 0.25) scale = 1.1 - ((elapsedTime - 0.15) / 0.1) * 0.1;
            ctx.scale(scale, scale);
            
            ctx.lineWidth = baseStrokeWidth; ctx.lineJoin = 'round';
            ctx.strokeStyle = '#000000'; ctx.fillStyle = globalColor; 
            
            for(let i = 0; i < lines.length; i++) {
                wordCursor += renderLine(lines[i].trim(), currentY, wordCursor, () => {
                    ctx.shadowColor = 'rgba(0,0,0,0.8)'; ctx.shadowBlur = 10; ctx.shadowOffsetX = 4; ctx.shadowOffsetY = 4;
                });
                currentY += lineHeight;
            }
        } 
        else if (styleType === 'classic') {
            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            let maxLineWidth = 0;
            lines.forEach(l => { const w = ctx.measureText(l).width; if(w > maxLineWidth) maxLineWidth = w; });
            ctx.fillRect( -maxLineWidth/2 - 20, -(lines.length * lineHeight)/2 - 10, maxLineWidth + 40, lines.length * lineHeight + 20);
            
            ctx.fillStyle = globalColor;
            for(let i = 0; i < lines.length; i++) {
                wordCursor += renderLine(lines[i].trim(), currentY, wordCursor, () => { ctx.shadowColor='transparent'; });
                currentY += lineHeight;
            }
        }
        else if (styleType === 'cinematic') {
            if (elapsedTime < 0.4) ctx.globalAlpha = elapsedTime / 0.4;
            else ctx.globalAlpha = 1.0;
            
            ctx.fillStyle = globalColor;
            for(let i = 0; i < lines.length; i++) {
                wordCursor += renderLine(lines[i].trim(), currentY, wordCursor, () => {
                     ctx.shadowColor = 'rgba(0,0,0,0.9)'; ctx.shadowBlur = 15; ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 2;
                });
                currentY += lineHeight;
            }
        }
        else if (styleType === 'neon') {
            if (elapsedTime < 0.1) ctx.globalAlpha = elapsedTime / 0.1;
            ctx.fillStyle = '#ffffff';
            for(let i = 0; i < lines.length; i++) {
                if (activeWordIndex === -1) {
                    ctx.shadowColor = globalColor; ctx.shadowBlur = 25;
                    ctx.fillText(lines[i].trim(), 0, currentY); ctx.fillText(lines[i].trim(), 0, currentY);
                } else {
                    wordCursor += renderLine(lines[i].trim(), currentY, wordCursor, () => {
                        ctx.shadowColor = globalColor; ctx.shadowBlur = 25;
                    });
                }
                currentY += lineHeight;
            }
        }
        else if (styleType === 'glitch') {
            ctx.lineWidth = baseStrokeWidth; ctx.lineJoin = 'round'; ctx.strokeStyle = '#000000';
            
            let xr = 0, yr = 0, xb = 0, yb = 0;
            if (elapsedTime < 0.3 || Math.random() > 0.95) {
                xr = (Math.random() - 0.5) * 15; yr = (Math.random() - 0.5) * 15;
                xb = (Math.random() - 0.5) * 15; yb = (Math.random() - 0.5) * 15;
            }
            
            for(let i = 0; i < lines.length; i++) {
                const txt = lines[i].trim();
                ctx.fillStyle = '#ff003c'; ctx.fillText(txt, xr, currentY + yr);
                ctx.fillStyle = '#00f0ff'; ctx.fillText(txt, xb, currentY + yb);
                
                ctx.fillStyle = globalColor;
                if(baseStrokeWidth > 0) ctx.strokeText(txt, 0, currentY);
                ctx.fillText(txt, 0, currentY);
                currentY += lineHeight;
            }
        }
        else if (styleType === 'vaporwave') {
            ctx.lineWidth = baseStrokeWidth; ctx.lineJoin = 'round'; ctx.strokeStyle = '#2b00ff';
            ctx.fillStyle = globalColor;
            
            const tilt = Math.sin(elapsedTime * 2) * 0.05;
            ctx.rotate(tilt);
            
            for(let i = 0; i < lines.length; i++) {
                wordCursor += renderLine(lines[i].trim(), currentY, wordCursor, () => {
                   ctx.shadowColor = '#ff00c8'; ctx.shadowBlur = 15; ctx.shadowOffsetX = 4; ctx.shadowOffsetY = 4; 
                });
                currentY += lineHeight;
            }
        }
        else if (styleType === 'retro') {
            const floatY = Math.floor(Math.sin(elapsedTime * 6)) * 8;
            ctx.translate(0, floatY);
            ctx.lineWidth = baseStrokeWidth; ctx.lineJoin = 'miter'; ctx.miterLimit = 2;
            ctx.strokeStyle = '#000'; ctx.fillStyle = globalColor;
            
            for(let i = 0; i < lines.length; i++) {
                if(baseStrokeWidth > 0) {
                    ctx.shadowColor = 'rgba(0,0,0,1)'; ctx.shadowBlur = 0; ctx.shadowOffsetX = 6; ctx.shadowOffsetY = 6;
                    ctx.strokeText(lines[i].trim(), 0, currentY);
                    ctx.shadowColor = 'transparent';
                }
                wordCursor += renderLine(lines[i].trim(), currentY, wordCursor, () => {
                    ctx.shadowColor = 'rgba(0,0,0,1)'; ctx.shadowBlur = 0; ctx.shadowOffsetX = 5; ctx.shadowOffsetY = 5;
                });
                currentY += lineHeight;
            }
        }
        else if (styleType === 'typewriter') {
            ctx.fillStyle = 'rgba(0,0,0,0.85)';
            let maxLineWidth = ctx.measureText(fullText).width; 
            maxLineWidth = Math.min(maxLineWidth, maxWidth);
            ctx.fillRect( -maxLineWidth/2 - 20, -(lines.length * lineHeight)/2 - 10, maxLineWidth + 40, lines.length * lineHeight + 20);
            
            ctx.fillStyle = globalColor;
            for(let i = 0; i < lines.length; i++) {
                ctx.fillText(lines[i].trim(), 0, currentY);
                currentY += lineHeight;
            }
        }

        ctx.restore();
    }

    function renderLoop() {
      try {
        const ctx = renderCanvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        
        const filter = filterSelect ? filterSelect.value : 'none';
        if (filter === 'darken') ctx.filter = 'brightness(50%)';
        else if (filter === 'blur') ctx.filter = 'blur(10px)';
        else if (filter === 'grayscale') ctx.filter = 'grayscale(100%)';
        else if (filter === 'sepia') ctx.filter = 'sepia(100%)';
        else if (filter === 'invert') ctx.filter = 'invert(100%) hue-rotate(180deg)';
        else ctx.filter = 'none';

        if (sourceVideo.readyState >= 2) { // HAVE_CURRENT_DATA
            try {
                ctx.drawImage(sourceVideo, 0, 0, renderCanvas.width, renderCanvas.height);
            } catch(ev) {}
        }
        ctx.filter = 'none';
        
        const offset = syncSlider ? parseInt(syncSlider.value) / 1000 : 0;
        const time = sourceVideo.currentTime - offset;
        const currentChunk = generatedCaptions.find(c => time >= c.timestamp[0] && time <= c.timestamp[1]);
        
        if (currentChunk && currentChunk.text) {
             let useMusic = bgMusicAudio && !bgMusicAudio.paused;
             if (bgMusicCheck && !bgMusicCheck.checked) useMusic = false;
             if (useMusic) bgMusicAudio.volume = 0.1; // Ducking active
             
             const brollImage = getBrollForText(currentChunk.text);
             if (brollImage && brollImage.complete && brollImage.width > 0 && brollImage.height > 0) {
                 ctx.save();
                 ctx.globalAlpha = 0.8;
                 const wr = renderCanvas.width / brollImage.width; const hr = renderCanvas.height / brollImage.height;
                 const scale = Math.max(wr, hr);
                 const ix = (renderCanvas.width / 2) - (brollImage.width / 2) * scale;
                 const iy = (renderCanvas.height / 2) - (brollImage.height / 2) * scale;
                 ctx.drawImage(brollImage, ix, iy, brollImage.width * scale, brollImage.height * scale);
                 ctx.restore();
             }

            const baseFontSize = renderCanvas.height * 0.08;
            const sizeMult = (sizeSlider ? parseInt(sizeSlider.value) : 80) / 100;
            const fontSize = Math.floor(baseFontSize * sizeMult);
            
            const gapMult = (gapSlider ? parseInt(gapSlider.value) : 120) / 100;
            const lineHeight = fontSize * gapMult;

            const maxWBase = renderCanvas.width;
            const widthMult = (widthSlider ? parseInt(widthSlider.value) : 85) / 100;
            const maxWidth = maxWBase * widthMult;
            
             let activeWordIndex = -1;
             const isKaraoke = karaokeCheck && karaokeCheck.checked;
             if (isKaraoke) {
                  const totalWords = currentChunk.text.trim().split(' ').length;
                  
                  if (currentChunk.words && currentChunk.words.length > 0) {
                       let foundIdx = currentChunk.words.findIndex(w => time < (w.timestamp[1] || w.timestamp[0]));
                       activeWordIndex = foundIdx !== -1 ? foundIdx : currentChunk.words.length - 1;
                  } else {
                       const chunkDuration = currentChunk.timestamp[1] - currentChunk.timestamp[0];
                       const elapsedTime = time - currentChunk.timestamp[0];
                       const timePerWord = chunkDuration / totalWords;
                       if (timePerWord <= 0 || isNaN(timePerWord)) activeWordIndex = 0;
                       else activeWordIndex = Math.floor(elapsedTime / timePerWord);
                  }
                  
                  if (activeWordIndex >= totalWords) activeWordIndex = totalWords - 1;
                  if (activeWordIndex < 0 || isNaN(activeWordIndex)) activeWordIndex = 0;
                  
                  if (activeWordIndex !== -1 && activeWordIndex !== lastSfxWordIndex) {
                       const wordObj = currentChunk.text.trim().split(' ')[activeWordIndex];
                       if (wordObj) {
                           const word = wordObj.toLowerCase().replace(/[^a-z0-9]/g, '');
                           if (['boom','bang','pow','crash','smash'].includes(word)) playSfx('pop');
                           else if (['fast','whoosh','zoom','fly','run','speed'].includes(word)) playSfx('whoosh');
                           else if (['money','cash','buy','dollar','rich','wealth'].includes(word)) playSfx('pop');
                           else if (Math.random() > 0.85) playSfx('pop');
                       }
                       lastSfxWordIndex = activeWordIndex;
                  }
             } else {
                  lastSfxWordIndex = -1;
             }

            let targetEmoji = null;
            const useEmoji = emojiCheck && emojiCheck.checked;
            if (useEmoji) targetEmoji = getEmojiForText(currentChunk.text);

            const fontFamily = fontSelect ? fontSelect.value : 'Nunito, sans-serif';
            ctx.font = `900 ${fontSize}px ${fontFamily}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            
            drawWrappedText(ctx, currentChunk.text.trim(), renderCanvas.width * 0.5, renderCanvas.height * 0.8, maxWidth, lineHeight, time - currentChunk.timestamp[0], styleSelect.value, activeWordIndex, targetEmoji, fontSize, currentChunk.colorOverride);
          } else {
            let useMusic = bgMusicAudio && !bgMusicAudio.paused;
            if (bgMusicCheck && !bgMusicCheck.checked) useMusic = false;
            if (useMusic) bgMusicAudio.volume = 0.5; // Ducking inactive
            lastSfxWordIndex = -1;
        }

        if (sharedWatermarkImage && sharedWatermarkImage.complete && (!watermarkCheck || watermarkCheck.checked)) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            const wmWidth = renderCanvas.width * 0.15;
            const wmHeight = (wmWidth / sharedWatermarkImage.width) * sharedWatermarkImage.height;
            ctx.drawImage(sharedWatermarkImage, renderCanvas.width - wmWidth - 40, 40, wmWidth, wmHeight);
            ctx.restore();
        }

        if (progressCheck && progressCheck.checked) {
            const duration = sourceVideo.duration || 1;
            const progress = time / duration;
            const globalColor = colorPicker ? colorPicker.value : '#fde047';
            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.8)'; ctx.shadowBlur = 8;
            ctx.fillStyle = globalColor;
            const barHeight = 15;
            ctx.fillRect(0, renderCanvas.height - barHeight, renderCanvas.width * progress, barHeight);
            ctx.restore();
        }
      } catch (err) {
         // Silently catch exceptions so the loop survives rendering failures
      }
      requestAnimationFrame(renderLoop);
    }
    
    sourceVideo.addEventListener('loadedmetadata', () => {
        const ctx = renderCanvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
    });

    sourceVideo.addEventListener('ended', () => { if(!isRecording) playPauseBtn.textContent = '▶️ Play'; });

    exportBtn.addEventListener('click', () => {
        if(isRecording) return;
        isRecording = true; exportBtn.textContent = 'Rendering High-Quality Video...'; exportBtn.disabled = true;
        statusText.innerHTML = "Processing Upscaled Local Video (please do not switch tabs)...";
        sourceVideo.pause(); sourceVideo.currentTime = 0;
        sourceVideo.playbackRate = 1.0; 
        
        const stream = renderCanvas.captureStream(30); // Reverted back to 30 to prevent native drift!
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const destination = audioCtx.createMediaStreamDestination();
        if (!window.__aiAudioSourceMerged) window.__aiAudioSourceMerged = audioCtx.createMediaElementSource(sourceVideo);
        window.__aiAudioSourceMerged.connect(destination); window.__aiAudioSourceMerged.connect(audioCtx.destination);
        if (destination.stream.getAudioTracks().length > 0) stream.addTrack(destination.stream.getAudioTracks()[0]);
        if (sfxDest.stream.getAudioTracks().length > 0) stream.addTrack(sfxDest.stream.getAudioTracks()[0]);
        if (bgMusicAudio && !bgMusicAudio.paused) {
            if (!window.__aiBgMusicMerged) window.__aiBgMusicMerged = audioCtx.createMediaElementSource(bgMusicAudio);
            window.__aiBgMusicMerged.connect(destination);
        }

        // Maximize absolute bitrate for crispy text rendering!
        let options = { mimeType: 'video/webm; codecs=h264' };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) options = { mimeType: 'video/webm; codecs=vp8' };
        options.videoBitsPerSecond = 12000000; // 12 Mbps export baseline for stability

        const recorder = new MediaRecorder(stream, options);
        const recordedChunks = [];
        recorder.ondataavailable = e => { if (e.data.size > 0) recordedChunks.push(e.data); };
        recorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = 'captioned_video.webm'; a.click(); URL.revokeObjectURL(url);
            isRecording = false; exportBtn.textContent = 'Export Result'; exportBtn.disabled = false;
            statusText.innerHTML = "✅ Export completed!";
            sourceVideo.currentTime = 0; sourceVideo.play(); playPauseBtn.textContent = '⏸️ Pause';
        };
        recorder.start(250); sourceVideo.play(); playPauseBtn.textContent = '⏸️ Pause';
        const onEnd = () => { if (isRecording) { recorder.stop(); sourceVideo.removeEventListener('ended', onEnd); } };
        sourceVideo.addEventListener('ended', onEnd);
    });

    const stageCaptionBtn = document.getElementById('stageCaptionExportBtn');
    if (stageCaptionBtn) {
        stageCaptionBtn.addEventListener('click', () => {
            alert("To auto-caption your presentation, use the 'Export Video' button directly above this to save your lesson to an MP4 video first.\n\nThen, I will redirect you to the 'AI Video Captioning' studio. Drop your exported MP4 video in there to perfectly burn the offline TikTok-style styles into it!");
            const stagePanel = document.getElementById('stagePanel');
            const inputPanel = document.getElementById('inputPanel');
            if (stagePanel) stagePanel.classList.add('hidden');
            if (inputPanel) inputPanel.classList.remove('hidden');

            const captionSection = document.getElementById('aiCaptionSection');
            if (captionSection) {
                captionSection.open = true;
                captionSection.scrollIntoView({behavior: "smooth", block: "start"});
            }
        });
    }

    if (viralShortBtn) {
        viralShortBtn.addEventListener('click', () => {
            if(isRecording || generatedCaptions.length === 0) return;
            // Find most dense 15s window
            let bestStart = 0; let bestEnd = 15; let maxWords = 0;
            for(let i=0; i<Math.max(1, sourceVideo.duration - 15); i+=5) {
                const w = i, e = i+15;
                const score = generatedCaptions.filter(c => c.timestamp[0] >= w && c.timestamp[1] <= e).reduce((acc, c) => acc + c.text.split(' ').length, 0);
                if (score > maxWords) { maxWords = score; bestStart = w; bestEnd = e; }
            }
            
            isRecording = true; viralShortBtn.textContent = 'Recording 15s...'; viralShortBtn.disabled = true;
            statusText.innerHTML = "Slicing Viral 15s Short Region...";
            sourceVideo.pause(); sourceVideo.currentTime = bestStart;
            sourceVideo.playbackRate = 1.0;
            
            const stream = renderCanvas.captureStream(30); // Using 30 to stay perfectly synced
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const destination = audioCtx.createMediaStreamDestination();
            if (!window.__aiAudioSourceMerged) window.__aiAudioSourceMerged = audioCtx.createMediaElementSource(sourceVideo);
            window.__aiAudioSourceMerged.connect(destination); window.__aiAudioSourceMerged.connect(audioCtx.destination);
            if (destination.stream.getAudioTracks().length > 0) stream.addTrack(destination.stream.getAudioTracks()[0]);
            if (sfxDest.stream.getAudioTracks().length > 0) stream.addTrack(sfxDest.stream.getAudioTracks()[0]);
            if (bgMusicAudio && !bgMusicAudio.paused) {
                 if (!window.__aiBgMusicMerged) window.__aiBgMusicMerged = audioCtx.createMediaElementSource(bgMusicAudio);
                 window.__aiBgMusicMerged.connect(destination);
            }

            let options = { mimeType: 'video/webm; codecs=h264' };
            if (!MediaRecorder.isTypeSupported(options.mimeType)) options = { mimeType: 'video/webm; codecs=vp8' };
            options.videoBitsPerSecond = 8000000;
            const recorder = new MediaRecorder(stream, options);
            const recordedChunks = [];
            recorder.ondataavailable = e => { if (e.data.size > 0) recordedChunks.push(e.data); };
            recorder.onstop = () => {
                const blob = new Blob(recordedChunks, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a'); a.href = url; a.download = 'viral_short_clip.webm'; a.click(); URL.revokeObjectURL(url);
                isRecording = false; viralShortBtn.textContent = '✂️ Export 15s Viral Short'; viralShortBtn.disabled = false;
                statusText.innerHTML = "✅ Viral Short Export completed!";
                sourceVideo.pause(); playPauseBtn.textContent = '▶️ Play';
            };
            recorder.start(250); sourceVideo.play(); viralShortBtn.textContent = 'Recording 15s...';
            
            const checkEnd = setInterval(() => {
                if (sourceVideo.currentTime >= bestEnd) {
                    clearInterval(checkEnd);
                    if (isRecording) recorder.stop();
                }
            }, 100);
        });
        
        // Show viral button if video is long enough
        sourceVideo.addEventListener('loadedmetadata', () => {
            if (sourceVideo.duration > 15 && viralShortBtn) viralShortBtn.classList.remove('hidden');
            else if (viralShortBtn) viralShortBtn.classList.add('hidden');
        });
    }

});
