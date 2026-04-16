import sys

with open("script.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace 1: get references
content = content.replace(
    'const agentStatus = document.getElementById("agentStatus");',
    'const agentStatus = document.getElementById("agentStatus");\nconst agentLoadingIndicator = document.getElementById("agentLoadingIndicator");'
)

# Replace 2: show loader
old_status = """    agentStatus.textContent = "Agent is thinking locally... this may take a moment depending on your GPU.";
    agentStatus.style.color = "#60a5fa";
    agentRunBtn.disabled = true;"""

new_status = """    agentStatus.textContent = "Agent is thinking locally... this may take a moment depending on your GPU.";
    agentStatus.style.color = "#60a5fa";
    agentRunBtn.disabled = true;
    if (agentLoadingIndicator) agentLoadingIndicator.classList.remove("hidden");"""

content = content.replace(old_status, new_status)

# Replace 3: hide loader in finally block
old_finally = """    } finally {
      agentRunBtn.disabled = false;
    }"""
new_finally = """    } finally {
      agentRunBtn.disabled = false;
      if (agentLoadingIndicator) agentLoadingIndicator.classList.add("hidden");
    }"""
content = content.replace(old_finally, new_finally)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Script patched with loader status!")
