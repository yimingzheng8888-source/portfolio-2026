"""Regenerate responsive media directly from supplied project originals.
Usage: python prepare-portfolio-media.py --source <portfolio folder> --ffmpeg <exe> [--videos]
Raw documents, models and videos stay outside the published directory.
"""
from pathlib import Path
from PIL import Image, ImageOps
import argparse, io, json, subprocess, tempfile, zipfile
p=argparse.ArgumentParser();p.add_argument('--source',required=True);p.add_argument('--ffmpeg',required=True);p.add_argument('--videos',action='store_true');a=p.parse_args()
root=Path(a.source);repo=Path(__file__).resolve().parents[1];out=repo/'public/media';out.mkdir(exist_ok=True)
Image.MAX_IMAGE_PIXELS=None
manifest={};provenance={}
def export(im,name,source):
    im=ImageOps.exif_transpose(im).convert('RGB');w,h=im.size;variants=[]
    for width in sorted(set([min(w,n) for n in [480,960,1600,2400,3200]])):
        path=out/f'{name}-{width}.webp';copy=im.copy();copy.thumbnail((width,round(h*width/w)),Image.Resampling.LANCZOS);copy.save(path,quality=90,method=6)
        variants.append({'src':f'/media/{path.name}','width':copy.width})
    key=f'/media/{name}';manifest[key]={'width':w,'height':h,'variants':variants};provenance[name]=str(source)
    print(name,flush=True)
def file(pattern,name):
    src=next(root.glob(pattern));export(Image.open(src),name,src.relative_to(root))
drift=next(root.glob('DRIFT*/**/*.mp4'));whale=next(root.glob('鲸*/**/*.mp4'))
def frame(src,time,name,trim=False):
    with tempfile.TemporaryDirectory() as temp:
        path=Path(temp)/'frame.png';subprocess.run([a.ffmpeg,'-v','error','-ss',str(time),'-i',str(src),'-frames:v','1','-y',str(path)],check=True)
        im=Image.open(path)
        if trim:im=im.crop((0,0,im.width,int(im.height*.82)))
        export(im,name,f'{src.relative_to(root)} @ {time}s'+(' / lower caption area cropped' if trim else ''))
for t,name,trim in [(13,'drift-cover',False),(11,'drift-hero',False),(81,'drift-walkway',False),(102,'drift-saloon',True),(117,'drift-workshop',True),(143,'drift-suite',True),(146,'drift-bow',False),(185,'drift-night',False),(224,'drift-stern',False),(242,'drift-aerial',False)]:frame(drift,t,name,trim)
for t,name in [(17,'whale-cover'),(29,'whale-garden'),(41,'whale-bath'),(77,'whale-stern'),(89,'whale-lounge')]:frame(whale,t,name)
with zipfile.ZipFile(next(root.glob('蔚蓝*/**/*PPT.pptx'))) as z:
    for i,name in [(27,'blue-cover'),(23,'blue-deck'),(24,'blue-lounge'),(25,'blue-interior'),(26,'blue-detail'),(17,'blue-sketch')]:
        ext='png' if i==17 else 'jpg';export(Image.open(io.BytesIO(z.read(f'ppt/media/image{i}.{ext}'))),name,f'蔚蓝之环答辩PPT / ppt/media/image{i}.{ext}')
for pattern,name in [('海航*/阴影底图.jpg','manta-cover'),('海航*/运动模式示意图（无标识）4.0.png','manta-motion'),('海航*/运动模式模型图.png','manta-model'),('海航*/水下清洗内循环3.0.png','manta-system'),('海威*/桁架式网箱漫游系统1.png','haiwei-cover'),('海威*/桁架式网箱漫游系统2.png','haiwei-2'),('海威*/桁架式网箱漫游系统3.png','haiwei-3'),('小海*/小海豚ip01.png','dolphin-1'),('小海*/小海豚ip02.png','dolphin-2'),('小海*/小海豚ip钥匙扣实物.jpg','dolphin-real')]:file(pattern,name)
for src in sorted(root.glob('鲸*/*展示版面*.jpg')):export(Image.open(src),'whale-poster-'+src.stem[-2:],src.relative_to(root))
for src in sorted(root.glob('DRIFT*/*海报*.png')):export(Image.open(src),'drift-poster-'+src.stem[-2:],src.relative_to(root))
file('蔚蓝*/郑一鸣作品类别A展示版面.jpg','blue-poster')
(repo/'src/data/media.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
(repo/'scripts/media-provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2),encoding='utf-8')
if a.videos:
    dest=repo/'public/videos'
    def encode(src,name,args):
        subprocess.run([a.ffmpeg,'-v','warning','-y','-i',str(src),*args,'-c:v','libx264','-preset','medium','-pix_fmt','yuv420p','-movflags','+faststart',str(dest/name)],check=True)
        print(name,(dest/name).stat().st_size,flush=True)
    encode(drift,'drift-panorama.mp4',['-ss','10.5','-t','5.7','-an','-crf','21','-vf','fps=30'])
    encode(drift,'drift-panorama-mobile.mp4',['-ss','10.5','-t','5.7','-an','-crf','21','-vf','scale=960:-2,fps=30'])
    encode(drift,'drift.mp4',['-crf','20','-maxrate','2800k','-bufsize','5600k','-c:a','aac','-b:a','128k'])
    encode(whale,'whale.mp4',['-crf','19','-vf','fps=30','-c:a','aac','-b:a','128k'])
    encode(next(root.glob('海威*/*.mp4')),'haiwei.mp4',['-crf','20','-maxrate','2800k','-bufsize','5600k','-vf','scale=1920:-2:force_original_aspect_ratio=decrease,fps=30','-c:a','aac','-b:a','128k'])
