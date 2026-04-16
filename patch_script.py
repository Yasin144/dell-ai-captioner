import sys
import re

with open("script.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace 1: Add ollamaHealthStatus
content = content.replace(
    'const videoExportHealthStatus = document.getElementById("videoExportHealthStatus");',
    'const videoExportHealthStatus = document.getElementById("videoExportHealthStatus");\nconst ollamaHealthStatus = document.getElementById("ollamaHealthStatus");'
)

# Replace 2: Add ollama to checkServerHealth / Promise.all
content = content.replace(
    'await Promise.all([ensureNarrationServer(), ensureAnjaliCloneServer(), ensureTranscribeServer(), ensureVideoExportServer()]);',
    'await Promise.all([ensureNarrationServer(), ensureAnjaliCloneServer(), ensureTranscribeServer(), ensureVideoExportServer(), ensureOllamaServer()]);'
)

# Replace 3: updateServerHealthUi implementation
update_health_ui_target = """  videoExportHealthStatus.textContent = state.videoExportServerReady
    ? "Video export server: running on port 8430"
    : "Video export server: not running";
}"""
update_health_ui_replacement = """  videoExportHealthStatus.textContent = state.videoExportServerReady
    ? "Video export server: running on port 8430"
    : "Video export server: not running";
    
  if (ollamaHealthStatus) {
    ollamaHealthStatus.textContent = state.ollamaServerReady
      ? "Local AI (Ollama): running on port 11434"
      : "Local AI (Ollama): not running";
  }
}"""
content = content.replace(update_health_ui_target, update_health_ui_replacement)

# Replace 4: Add ensureOllamaServer block
ensure_ollama_func = """async function ensureOllamaServer() {
  try {
    const localUrlEl = document.getElementById("localLlmUrlInput");
    const baseUrl = (localUrlEl && localUrlEl.value) ? localUrlEl.value.trim().replace(/\\/$/, "") : "http://127.0.0.1:11434";
    const response = await fetch(`${baseUrl}/`, { method: "GET" });
    state.ollamaServerReady = response.ok;
  } catch (error) {
    state.ollamaServerReady = false;
  }
}

async function ensureNarrationServer()"""

content = content.replace("async function ensureNarrationServer()", ensure_ollama_func)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Patch complete.")
