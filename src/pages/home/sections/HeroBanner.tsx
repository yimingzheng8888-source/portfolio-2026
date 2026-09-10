import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { MediaImage } from '@components/MediaImage';

const base = import.meta.env.BASE_URL;
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData = () => (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

export function HeroBanner() {
  const stage = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [posterReady, setPosterReady] = useState(false);
  const [enabled, setEnabled] = useState(() => !reducedMotion() && !saveData());
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '-100px 0px 0px 0px' });
    observer.observe(stage.current!);
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () => { if (motion.matches) setEnabled(false); };
    const onVisibility = () => setPageVisible(!document.hidden);
    motion.addEventListener('change', onMotionChange);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (enabled && posterReady && visible && pageVisible && !failed) {
      if (!element.getAttribute('src')) element.src = `${base}videos/${matchMedia('(max-width: 767px)').matches ? 'drift-showreel-mobile.mp4' : 'drift-showreel.mp4'}`;
      element.play().catch(error => { if (error.name !== 'AbortError') setEnabled(false); });
    } else {
      element.pause();
    }
  }, [enabled, posterReady, visible, pageVisible, failed]);

  return (
    <section ref={stage} id="cinematic-hero" className="cinema-hero" aria-label="DRIFT 超级游艇动态展示">
      <div className="cinema-media" aria-hidden="true">
        <MediaImage src="/media/drift-showreel-poster" alt="" sizes="100vw"
          {...{ fetchpriority: 'high' }} onLoad={() => setPosterReady(true)} onError={() => setPosterReady(true)} />
        <video ref={video} className={loaded ? 'is-loaded' : ''} muted loop playsInline preload="none"
          onPlaying={() => { setLoaded(true); setPlaying(true); }} onPause={() => setPlaying(false)}
          onError={() => { setFailed(true); setEnabled(false); }} />
      </div>
      <div className="cinema-shade" />
      <div className="cinema-copy">
        <p className="cinema-kicker">SELECTED PROJECT 01 / 2026</p>
        <h1><span>DRIFT</span><small>泛舟</small></h1>
        <Link className="cinema-project-link" to="/special-projects/drift-yacht">
          60 米超级游艇 · 查看项目 <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
      <div className="cinema-bottom">
        <button className="cinema-scroll" onClick={() => document.getElementById('home-introduction')?.scrollIntoView({ behavior: reducedMotion() ? 'instant' as ScrollBehavior : 'smooth' })}>
          <ArrowDown size={16} aria-hidden="true" /><span>向下探索</span>
        </button>
        <span className="cinema-credit">郑一鸣 · 船舶与海洋设计</span>
        <button className="cinema-play" disabled={failed} aria-label={playing ? '暂停首屏动态' : '播放首屏动态'}
          onClick={() => setEnabled(!enabled)}>
          {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
          <span>{failed ? '静态封面' : playing ? '暂停动态' : '播放动态'}</span>
        </button>
      </div>
    </section>
  );
}
