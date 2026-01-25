import re

def fix_line(match):
    content = match.group(1)
    classes = content.split()
    
    normal_classes = []
    dark_classes = []
    other_variants = []

    for cls in classes:
        if cls.startswith('dark:'):
            dark_classes.append(cls.replace('dark:', '', 1))
        elif ':' in cls and not cls.startswith('!'): # Check for other variants like hover:
            # This script is simple, tackling dark: specifically as it caused the error.
            # If hover: exists, we might need to handle it too, but let's focus on dark:
            # Actually, standard variants in @apply are generally invalid in v4 without plugins.
            # But let's assume dark: is the main offender.
            if cls.startswith('hover:') or cls.startswith('focus:'):
                 other_variants.append(cls)
            else:
                 normal_classes.append(cls)
        else:
            normal_classes.append(cls)
    
    # If no dark classes, return original (or cleaned)
    if not dark_classes and not other_variants:
        return f"@apply {content};"

    lines = []
    if normal_classes:
        lines.append(f"@apply {' '.join(normal_classes)};")
    
    if dark_classes:
        # Use Tailwind v4 @variant syntax or CSS nesting
        # .dark & {} might not work if 'dark' is a class on HTML.
        # :is(.dark &) is safer?
        # Tailwind v4 has @variant mechanism?
        # Let's use standard CSS nesting targeting the .dark class on body/html
        # But we are inside a selector.
        # `&:where(.dark, .dark *)` ?
        # Or just `@variant dark { @apply ... }` if supported.
        # Docs say: `@variant dark { ... }` works.
        lines.append(f"@variant dark {{ @apply {' '.join(dark_classes)}; }}")
        
    if other_variants:
        # Keep them for now, might error but we want to fix dark first
        lines.append(f"@apply {' '.join(other_variants)};")

    return "\n  ".join(lines)

with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern matching @apply ... ;
# Handles multiline? usually @apply is single line in this file.
new_content = re.sub(r'@apply\s+([^;]+);', fix_line, content)

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(new_content)
