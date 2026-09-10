from pathlib import Path
import subprocess,json
from PIL import Image
import argparse
p=argparse.ArgumentParser();p.add_argument('--source',required=True);p.add_argument('--ffmpeg',required=True);a=p.parse_args()
src=Path(a.source);repo=Path(__file__).resolve().parents[1];ff=a.ffmpeg
out=repo/'public/videos';inputs=['Panorama_1.mp4','stern.mp4','saloon_test 2.mp4','Panorama_1.mp4'];cmd=[ff,'-v','warning','-y']
for f in inputs:cmd+=['-i',str(src/f)]
filters=';'.join([f'[{i}:v]trim=start={start}:duration={dur},setpts=PTS-STARTPTS,fps=30,format=yuv420p,setsar=1[v{i}]' for i,(start,dur) in enumerate([(1.3,5.4),(.1,3.2),(0,4.75),(.7,.6)])])
filters+=';[v0][v1]xfade=transition=fade:duration=0.6:offset=4.8[x1];[x1][v2]xfade=transition=fade:duration=0.6:offset=7.4[x2];[x2][v3]xfade=transition=fade:duration=0.6:offset=11.55,format=yuv420p[out]'
video=out/'drift-showreel.mp4'
subprocess.run(cmd+['-filter_complex_threads','1','-filter_complex',filters,'-map','[out]','-an','-c:v','libx264','-crf','20','-preset','medium','-threads','4','-movflags','+faststart',str(video)],check=True)
mobile=out/'drift-showreel-mobile.mp4'
subprocess.run([ff,'-v','warning','-y','-i',str(video),'-vf','scale=960:-2','-an','-c:v','libx264','-crf','21','-preset','medium','-threads','4','-movflags','+faststart',str(mobile)],check=True)
# The fallback still matches the first frame, avoiding a jump when playback starts.
frame=repo.parent/'output/hero-review/showreel-first.png'
subprocess.run([ff,'-v','error','-y','-i',str(video),'-frames:v','1',str(frame)],check=True)
im=Image.open(frame).convert('RGB');variants=[]
for w in [480,960,1600,1920]:
 name=f'drift-showreel-poster-{w}.webp';im.resize((w,round(w*im.height/im.width)),Image.Resampling.LANCZOS).save(repo/'public/media'/name,quality=90,method=6);variants.append({'src':'/media/'+name+'?v=exterior-first','width':w})
manifest=repo/'src/data/media.json';data=json.loads(manifest.read_text(encoding='utf8'));data['/media/drift-showreel-poster']={'width':im.width,'height':im.height,'variants':variants};manifest.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf8')
print(json.dumps({'desktop_bytes':video.stat().st_size,'mobile_bytes':mobile.stat().st_size}),flush=True)
