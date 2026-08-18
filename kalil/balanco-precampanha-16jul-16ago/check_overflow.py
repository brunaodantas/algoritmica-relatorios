#!/usr/bin/env python3
"""Mede transbordo nos dois eixos em cada slide, antes de gerar o PDF.
Rodar:  python3 check_overflow.py slides.html 1280 720
"""
import asyncio, sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = Path(__file__).parent
ARQ = sys.argv[1] if len(sys.argv) > 1 else "slides.html"
W = int(sys.argv[2]) if len(sys.argv) > 2 else 1280
H = int(sys.argv[3]) if len(sys.argv) > 3 else 720


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        page = await b.new_page(viewport={"width": W, "height": H})
        await page.goto((BASE / ARQ).as_uri(), wait_until="networkidle")
        await page.evaluate("document.fonts.ready")
        await page.wait_for_timeout(800)
        res = await page.evaluate("""(box) => {
          return Array.from(document.querySelectorAll('.slide')).map((s, i) => {
            const inner = s.querySelector('.slide-in');
            const pad = getComputedStyle(inner);
            const padY = parseFloat(pad.paddingTop) + parseFloat(pad.paddingBottom);
            const padX = parseFloat(pad.paddingLeft) + parseFloat(pad.paddingRight);
            // altura/largura real do conteudo dentro do .slide-in
            let maxB = 0, maxR = 0;
            const base = inner.getBoundingClientRect();
            inner.querySelectorAll('*').forEach(el => {
              const r = el.getBoundingClientRect();
              maxB = Math.max(maxB, r.bottom - base.top);
              maxR = Math.max(maxR, r.right - base.left);
            });
            const titulo = (s.querySelector('.h2, .h1') || {}).textContent || '(capa)';
            return {i: i+1, titulo: titulo.trim().slice(0, 42),
                    sobraY: Math.round(box.h - parseFloat(pad.paddingBottom) - maxB),
                    sobraX: Math.round(box.w - parseFloat(pad.paddingRight) - maxR)};
          });
        }""", {"w": W, "h": H})
        await b.close()
    print(f"\n{ARQ}  ({W}x{H})   sobra em px, negativo = cortado")
    print("-" * 66)
    ruim = 0
    for r in res:
        flag = ""
        if r["sobraY"] < 0 or r["sobraX"] < 0:
            flag = "  <<< CORTADO"
            ruim += 1
        elif r["sobraY"] < 12:
            flag = "  (no limite)"
        print(f'{r["i"]:>3}  {r["titulo"]:<44} Y {r["sobraY"]:>5}  X {r["sobraX"]:>5}{flag}')
    print("-" * 66)
    print("OK, nenhum slide cortado." if not ruim else f"{ruim} slide(s) cortado(s).")

asyncio.run(main())
