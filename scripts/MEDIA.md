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
