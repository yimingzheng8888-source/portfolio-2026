# Portfolio media

Web assets are generated from the supplied project directory. `media-provenance.json` records the original document/image or video timestamp for every new image. No raw Rhino model, resume or source document is published by these scripts.

Run `prepare-portfolio-media.py --source <folder> --ffmpeg <executable> --videos`, then `prepare-deck-media.py --source <folder> --ffmpeg <executable>`. The second step adds the unusually large deck drawings back into the responsive manifest. Python requires Pillow; ffmpeg is an external executable, not a website dependency.

- `src/data/media.json` describes image dimensions and responsive variants. `MediaImage` uses `srcset`; the gallery opens the largest available version.
- DRIFT stills come from the original 1920 × 1080 film. Caption areas of three interior stills are cropped; the complete film retains its content, audio and credits.
- Blue Ring renders come from the original PowerPoint media, up to 7680 pixels wide. Public variants stop at 3200 pixels.
- Whale's Dream original film is 1280 × 720. Extracted stills retain that resolution; they are not advertised as 4K or upscaled.
- Deck drawings are reduced once from the 34070-pixel originals to 6000 pixels. Browsers load smaller variants until the drawing is opened.
- Homepage films are separate desktop/mobile encodes. Full project videos use `preload="none"`; the interactive model and decoder load on request.

Validation for the September 2026 redesign: TypeScript and production build passed; browser checks covered desktop/mobile layouts, all seven project image sets, project filters, mobile navigation, image dialog keyboard navigation, deck tabs, clipboard copy, 1080p DRIFT playback and model loading/presets. The model's accepted exposure and material finish are unchanged.

The current source images and films set the limit on visible detail. Clean higher-resolution renders or uncompressed scene exports can replace individual assets later without changing the page structure.

## Homepage update — 2026-09-10

`prepare-home-showreel.py --source <开屏视频替换> --ffmpeg <executable>` creates a silent 12.15-second 1080p loop from `Panorama_1.mp4` (1.30–6.70s), `stern.mp4` (0.10–3.30s), `saloon_test 2.mp4` (0–4.75s), and a panorama loop bridge (0.70–1.30s). The saloon is the final featured shot. Each join uses a 0.60-second dissolve; the final source frame flows back into the first shot. A 960px mobile encode and matching responsive fallback stills are generated separately. Existing full project films remain unchanged.

Software icons are locally hosted, decorative 20px images beside visible software names. COMPASS, Maxsurf, 3ds Max, Unreal Engine, Illustrator and Excel icons were extracted from the installed application / Windows installer icon resources. Rhino: https://www.rhino3d.com/images/favicon.ico . KeyShot: https://manual.keyshot.com/assets/favicon/Black-logo.svg . AutoCAD: Simple Icons, https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/autocad.svg (CC0 icon; product trademark retained). STAR-CCM+: product symbol shown by CAEXPERTS at https://www.caexperts.com.br/star-ccm . Abaqus uses the official Dassault Systemes brand icon from https://www.3ds.com/asset/img/favicon/apple/apple-touch-icon-180x180.png . SPD uses a custom text badge, not a claimed official logo. All product marks belong to their respective owners and identify tools used by the portfolio author.
