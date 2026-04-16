import sys

with open("script.js", "r", encoding="utf-8") as f:
    content = f.read()

old_string = """        const baseLineStyle = (headingMatch || autoHeading)
          ? {
            ...getBaseTextStyle(),
            color: "#facc15",
            bold: true,
            underline: true
          }"""

new_string = """        const baseLineStyle = (headingMatch || autoHeading)
          ? {
            ...getBaseTextStyle(),
            color: normalizePresentationTemplate(state.presentationTemplate) === PRESENTATION_TEMPLATE_OUTCOMES ? "#1e3a8a" : "#facc15",
            bold: true,
            underline: true
          }"""

content = content.replace(old_string, new_string)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Patch applied for template yellow color!")
