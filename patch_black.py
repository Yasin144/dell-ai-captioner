import sys

with open("script.js", "r", encoding="utf-8") as f:
    content = f.read()

old_str = 'normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES ? "#1e3a8a" : "#facc15"'
new_str = 'normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES ? "#000000" : "#facc15"'

content = content.replace(old_str, new_str)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Changed blue to black for template two!")
