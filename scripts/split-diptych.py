#!/usr/bin/env python3
"""Taglia in due un'immagine "dittico" (due prodotti affiancati separati da
una linea verticale bianca) generata con Gemini per il catalogo prodotti.

Uso:
    python3 scripts/split-diptych.py <input.png> <left-name.jpg> <right-name.jpg>

I due ritagli vengono salvati in public/images/<left-name.jpg> e
public/images/<right-name.jpg>.
"""
import sys
from pathlib import Path

from PIL import Image, ImageOps

REPO_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = REPO_ROOT / "public" / "images"
MAX_DIMENSION = 1600
JPEG_QUALITY = 88


def find_divider_column(gray, width, height):
    """Trova la colonna verticale più chiara e uniforme nella fascia centrale
    dell'immagine (la linea bianca che separa i due soggetti)."""
    lo, hi = int(width * 0.3), int(width * 0.7)
    pixels = gray.load()
    best_col, best_score = None, None
    for x in range(lo, hi):
        col = [pixels[x, y] for y in range(0, height, max(1, height // 200))]
        mean = sum(col) / len(col)
        variance = sum((v - mean) ** 2 for v in col) / len(col)
        # Preferiamo colonne molto chiare (vicine al bianco) e molto uniformi.
        score = mean - variance ** 0.5
        if best_score is None or score > best_score:
            best_score, best_col = score, x
    # Soglia minima di "biancore": se non troviamo nulla di convincente,
    # rinunciamo al rilevamento e usiamo il fallback a metà larghezza.
    if best_col is not None:
        col = [pixels[best_col, y] for y in range(0, height, max(1, height // 200))]
        mean = sum(col) / len(col)
        if mean < 200:
            return None
    return best_col


def trim_white_border(img):
    """Rifila i bordi bianchi/quasi-bianchi residui attorno al soggetto."""
    gray = ImageOps.grayscale(img)
    bg = Image.new("L", gray.size, 255)
    diff = Image.eval(gray, lambda p: 255 if p < 245 else 0)
    bbox = diff.getbbox()
    if bbox:
        # Un piccolo margine per non tagliare a filo del soggetto.
        pad = 12
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(img.width, bbox[2] + pad)
        bottom = min(img.height, bbox[3] + pad)
        return img.crop((left, top, right, bottom))
    return img


def resize_if_needed(img):
    longest = max(img.size)
    if longest <= MAX_DIMENSION:
        return img
    scale = MAX_DIMENSION / longest
    new_size = (round(img.width * scale), round(img.height * scale))
    return img.resize(new_size, Image.LANCZOS)


def main():
    if len(sys.argv) != 4:
        print(__doc__)
        sys.exit(1)

    input_path = Path(sys.argv[1])
    left_name, right_name = sys.argv[2], sys.argv[3]

    img = Image.open(input_path).convert("RGB")
    gray = ImageOps.grayscale(img)
    width, height = img.size

    divider = find_divider_column(gray, width, height)
    if divider is None:
        divider = width // 2
        print(f"Attenzione: linea divisoria non rilevata con certezza, taglio a metà ({divider}px).")
    else:
        print(f"Linea divisoria rilevata alla colonna {divider}px (larghezza totale {width}px).")

    left_img = img.crop((0, 0, divider, height))
    right_img = img.crop((divider, 0, width, height))

    left_img = resize_if_needed(trim_white_border(left_img))
    right_img = resize_if_needed(trim_white_border(right_img))

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    left_path = OUTPUT_DIR / left_name
    right_path = OUTPUT_DIR / right_name

    left_img.save(left_path, "JPEG", quality=JPEG_QUALITY)
    right_img.save(right_path, "JPEG", quality=JPEG_QUALITY)

    print(f"Salvato: {left_path} ({left_img.size[0]}x{left_img.size[1]})")
    print(f"Salvato: {right_path} ({right_img.size[0]}x{right_img.size[1]})")


if __name__ == "__main__":
    main()
