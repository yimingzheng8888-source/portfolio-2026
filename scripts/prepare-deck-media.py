"""Downsample the exceptionally large original deck drawings without publishing originals."""
import argparse,json,subprocess,tempfile
from pathlib import Path
from PIL import Image
p=argparse.ArgumentParser();p.add_argument('--source',required=True);p.add_argument('--ffmpeg',required=True);a=p.parse_args()
r=Path(__file__).resolve().parents[1];root=Path(a.source)
manifest=json.loads((r/'src/data/media.json').read_text(encoding='utf-8'))
provenance=json.loads((r/'scripts/media-provenance.json').read_text(encoding='utf-8'))
projects=json.loads((r/'src/data/design-projects.json').read_text(encoding='utf-8'))
for i,deck in enumerate(projects[0]['decks']):
    source=next(root.glob(f'DRIFT*/白甲板图_{deck["label"]}.png'));name=f'drift-deck-{i+1}';key='/media/'+name
    with tempfile.TemporaryDirectory() as temp:
        path=Path(temp)/'deck.png'
        subprocess.run([a.ffmpeg,'-v','error','-i',str(source),'-vf','scale=6000:-1','-frames:v','1','-threads','1','-y',str(path)],check=True)
        im=Image.open(path).convert('RGB');variants=[]
        for width in [960,1600,2400,6000]:
            small=im.resize((width,round(width*im.height/im.width)),Image.Resampling.LANCZOS);dest=r/f'public/media/{name}-{width}.webp';small.save(dest,quality=94,method=6)
            variants.append({'src':f'/media/{dest.name}','width':width})
        manifest[key]={'width':im.width,'height':im.height,'variants':variants};deck['image']=key
        provenance[name]=str(source.relative_to(root));print(name,flush=True)
(r/'src/data/media.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
(r/'scripts/media-provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2),encoding='utf-8')
(r/'src/data/design-projects.json').write_text(json.dumps(projects,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
