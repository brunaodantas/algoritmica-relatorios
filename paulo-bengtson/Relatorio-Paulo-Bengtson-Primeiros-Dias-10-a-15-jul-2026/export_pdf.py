#!/usr/bin/env python3
"""
Gera o PDF do relatorio "Paulo Bengtson - Primeiros Dias" a partir de slides.html.

Padrao da agencia para relatorios HTML (nunca window.print()):
- Cada secao do relatorio vira um <div class="slide"> de 1280x720 CSS px em slides.html.
- Screenshot de CADA .slide individualmente (elemento -> el.screenshot()), nunca
  page.screenshot(clip=...).
- Contexto do browser roda com device_scale_factor=2, entao cada PNG sai com
  2560x1440 px reais (1280x720 * 2).
- Pillow monta o PDF com resolution=192 -> 960x540 pt por pagina
  (2560 px / 192 dpi * 72 = 960 pt; 1440 / 192 * 72 = 540 pt).

Uso (uma vez por maquina):
    pip install playwright pillow
    playwright install chromium

Rodar:
    python export_pdf.py
"""
import pathlib
from playwright.sync_api import sync_playwright
from PIL import Image

HERE = pathlib.Path(__file__).parent.resolve()
SLIDES_HTML = HERE / "slides.html"
OUTPUT_PDF = HERE / "Relatorio-Paulo-Bengtson-Primeiros-Dias-10-a-15-jul-2026.pdf"
TMP_DIR = HERE / "_pdf_tmp"

# ids dos slides, na mesma ordem em que aparecem no slides.html
SLIDE_IDS = [f"s{i}" for i in range(1, 11)]


def main():
    TMP_DIR.mkdir(exist_ok=True)
    png_paths = []

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(
            viewport={"width": 1280, "height": 720},
            device_scale_factor=2,
        )
        page.goto(SLIDES_HTML.as_uri())

        # espera fontes carregarem e os graficos (Chart.js) assentarem antes de capturar
        page.wait_for_load_state("networkidle")
        page.evaluate("document.fonts.ready")
        page.wait_for_timeout(600)

        for slide_id in SLIDE_IDS:
            el = page.locator(f"#{slide_id}")
            el.scroll_into_view_if_needed()
            page.wait_for_timeout(150)  # settle apos o scroll, garante redraw do canvas
            out_path = TMP_DIR / f"{slide_id}.png"
            # screenshot do ELEMENTO — nunca page.screenshot(clip=...)
            el.screenshot(path=str(out_path))
            png_paths.append(out_path)
            print(f"  {slide_id}: {out_path.name}")

        browser.close()

    # monta o PDF com Pillow, resolution=192 -> 960x540pt por pagina
    images = [Image.open(p).convert("RGB") for p in png_paths]
    first, rest = images[0], images[1:]
    first.save(
        OUTPUT_PDF,
        "PDF",
        resolution=192.0,
        save_all=True,
        append_images=rest,
    )

    print(f"\nPDF gerado: {OUTPUT_PDF} ({len(images)} paginas)")


if __name__ == "__main__":
    main()
