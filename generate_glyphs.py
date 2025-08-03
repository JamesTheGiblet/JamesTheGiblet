import os

glyphs_dir = "assets/glyphs"
os.makedirs(glyphs_dir, exist_ok=True)

glyphs = {
    "sigil_spiral.svg": '''
<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M60,60 m0,-45 a45,45 0 1,0 45,45" stroke="#00FFF7" stroke-width="2" fill="none"/>
  <!-- Placeholder spiral path -->
</svg>
''',

    "glyph_qr_trigger.svg": '''
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0A0A0A"/>
  <rect x="10" y="10" width="20" height="20" fill="#FFD700"/>
  <rect x="70" y="70" width="20" height="20" fill="#FFD700"/>
  <circle cx="50" cy="50" r="10" stroke="#00FFF7" stroke-width="2" fill="none"/>
</svg>
''',

    "glyph_initiate.svg": '''
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" stroke="#8A2BE2" stroke-width="3" fill="none"/>
  <line x1="60" y1="10" x2="60" y2="110" stroke="#FFD700" stroke-width="2"/>
  <line x1="10" y1="60" x2="110" y2="60" stroke="#FFD700" stroke-width="2"/>
  <path d="M50 65 L70 65 L70 75 L50 75 Z" fill="#FFD700"/>
</svg>
''',

    "glyph_codex.svg": '''
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="80" height="80" stroke="#FFD700" fill="none" stroke-width="3"/>
  <path d="M40 40 L80 80 M80 40 L40 80" stroke="#00FFF7" stroke-width="2"/>
</svg>
''',

    "glyph_vault.svg": '''
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="60" height="60" stroke="#FFD700" stroke-width="3" fill="none"/>
  <circle cx="50" cy="50" r="15" stroke="#00FFF7" stroke-width="2" fill="none"/>
</svg>
''',

    "glyph_toolbelt.svg": '''
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="30" width="80" height="40" stroke="#8A2BE2" stroke-width="3" fill="none"/>
  <path d="M30 30 L30 70 M50 30 L50 70 M70 30 L70 70" stroke="#FFD700" stroke-width="2"/>
</svg>
''',

    "glyph_hackpanel.svg": '''
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0A0A0A"/>
  <path d="M20 50 H80 M50 20 V80" stroke="#FFD700" stroke-width="2"/>
  <circle cx="50" cy="50" r="10" stroke="#8A2BE2" stroke-width="2" fill="none"/>
</svg>
'''
}

for name, svg in glyphs.items():
    path = os.path.join(glyphs_dir, name)
    with open(path, "w") as f:
        f.write(svg.strip())
    print(f"Created {path}")