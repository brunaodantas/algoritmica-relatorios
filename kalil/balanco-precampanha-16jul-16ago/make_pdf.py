#!/usr/bin/env python3
"""
Gera os PDFs de slides por screenshot (Playwright + Pillow), nunca por impressao
do navegador. Horizontal 1280x720px -> 960x540pt · Vertical 720x1280px -> 540x960pt.

Rodar:  python3 make_pdf.py            (gera os dois)
        python3 make_pdf.py horizontal (gera só um)

Dependencias (uma vez): pip install playwright pillow && python -m playwright install chromium
"""
import asyncio
import shutil
import sys
from pathlib import Path
from PIL import Image
from playwright.async_api import async_playwright

BASE = Path(__file__).parent
SCALE, RES = 2, 192

FORMATOS = {
    "horizontal": ("slides.html", 1280, 720, "balanco-precampanha-kalil-horizontal.pdf"),
    "vertical": ("slides-vertical.html", 720, 1280, "balanco-precampanha-kalil-vertical.pdf"),
}


async def gerar(nome, arquivo, w, h, saida):
    src = BASE / arquivo
    if not src.exists():
        raise SystemExit(f"Nao encontrei {src}. Rode antes: python3 build_slides.py")
    png_dir = BASE / f"slides_png_{nome}"
    if png_dir.exists():
        shutil.rmtree(png_dir)
    png_dir.mkdir()
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": w, "height": h}, device_scale_factor=SCALE)
        await page.goto(src.as_uri(), wait_until="networkidle")
        await page.evaluate("document.fonts.ready")
        await page.wait_for_timeout(1200)
        n = await page.locator(".slide").count()
        if n == 0:
            raise SystemExit(f"Nenhum .slide em {arquivo}.")
        print(f"{nome}: {n} slides ({w}x{h})")
        paths = []
        for i in range(n):
            out = png_dir / f"slide_{i+1:02d}.png"
            slide = page.locator(".slide").nth(i)
            await slide.scroll_into_view_if_needed()
            await slide.screenshot(path=str(out), scale="device")
            paths.append(out)
        await browser.close()
    imgs = [Image.open(p).convert("RGB") for p in paths]
    dest = BASE / saida
    imgs[0].save(str(dest), save_all=True, append_images=imgs[1:], resolution=RES)
    for im in imgs:
        im.close()
    shutil.rmtree(png_dir)
    print(f"  -> {saida}  ({dest.stat().st_size/1_048_576:.1f} MB)\n")


async def main():
    pedidos = sys.argv[1:] or list(FORMATOS)
    for nome in pedidos:
        if nome not in FORMATOS:
            raise SystemExit(f"Formato desconhecido: {nome}. Use horizontal e/ou vertical.")
        await gerar(nome, *FORMATOS[nome])

asyncio.run(main())
