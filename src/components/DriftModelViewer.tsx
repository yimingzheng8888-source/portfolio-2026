import { createElement, useEffect, useRef, useState } from 'react';
import { Box, Expand, RotateCcw, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';
import type { ModelViewerElement } from '@google/model-viewer';
import modelInfo from '@data/drift-model.json';
import '../styles/model-viewer.css';

const base = import.meta.env.BASE_URL;
const initialOrbit = '-45deg 76deg 85%';
const views = [
  { label: '整体视角', orbit: initialOrbit },
  { label: '舷侧', orbit: '0deg 87deg 85%' },
  { label: '艏部', orbit: '-90deg 82deg 85%' },
  { label: '艉部', orbit: '90deg 82deg 85%' },
  { label: '俯视', orbit: '0deg 0deg 85%' },
];

export function DriftModelViewer() {
  const viewer = useRef<ModelViewerElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [rotating, setRotating] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedView, setSelectedView] = useState('整体视角');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!activated) return;
    let disposed = false;
    const element = viewer.current;
    if (!element) return;
    const loaded = () => { if (!disposed) { setStatus('ready'); setProgress(1); } };
    const failed = () => { if (!disposed) setStatus('error'); };
    const progressing = (event: Event) => setProgress((event as CustomEvent<{totalProgress:number}>).detail.totalProgress);
    const cameraChanged = (event: Event) => {
      if ((event as CustomEvent<{source:string}>).detail.source === 'user-interaction') setSelectedView('');
    };
    element.addEventListener('load', loaded);
    element.addEventListener('error', failed);
    element.addEventListener('progress', progressing);
    element.addEventListener('camera-change', cameraChanged);
    setStatus('loading');
    setProgress(0);
    import('@google/model-viewer').then(({ModelViewerElement}) => {
      if (disposed) return;
      ModelViewerElement.dracoDecoderLocation = `${base}models/draco/`;
      element.src = `${base}${modelInfo.file}${attempt ? `?retry=${attempt}` : ''}`;
    }).catch(failed);
    return () => {
      disposed = true;
      element.removeEventListener('load', loaded);
      element.removeEventListener('error', failed);
      element.removeEventListener('progress', progressing);
      element.removeEventListener('camera-change', cameraChanged);
    };
  }, [activated, attempt]);

  useEffect(() => {
    const onFullscreen = () => setExpanded(document.fullscreenElement === panel.current);
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => document.removeEventListener('fullscreenchange', onFullscreen);
  }, []);

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => { if (media.matches) setRotating(false); };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const setView = (label: string, orbit: string) => {
    if (!viewer.current) return;
    setRotating(false);
    setSelectedView(label);
    viewer.current.resetTurntableRotation();
    viewer.current.cameraTarget = 'auto auto auto';
    viewer.current.cameraOrbit = orbit;
    viewer.current.fieldOfView = '30deg';
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) viewer.current.jumpCameraToGoal();
  };

  const fullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (panel.current?.requestFullscreen) await panel.current.requestFullscreen();
      else setNotice('此浏览器暂不支持全屏，可旋转手机或使用缩放按钮查看。');
    } catch { setNotice('暂时无法进入全屏，请使用缩放按钮查看。'); }
  };

  return <section className="case-section model-section" id="interactive-model" aria-labelledby="model-heading">
    <div className="model-section-heading"><div><p>从模型理解设计</p><h2 id="model-heading">DRIFT，自由转动的视角</h2></div><span>交互式 3D</span></div>
    <p className="case-hint">旋转观察船体比例、甲板层次与外观细节，也可以直接切换预设视角。</p>
    <div className="model-panel" ref={panel}>
      <div className="model-stage" aria-busy={status === 'loading'}>
        {activated && createElement('model-viewer', {
          key: attempt,
          ref: viewer,
          alt: 'DRIFT 60 超级游艇三维模型，可使用鼠标、触屏或键盘方向键旋转，使用加减键缩放。',
          'camera-controls': '',
          'camera-orbit': initialOrbit,
          'camera-target': 'auto auto auto',
          'field-of-view': '30deg',
          'min-camera-orbit': 'auto 0deg 25%',
          'max-camera-orbit': 'auto 180deg 220%',
          'touch-action': 'pan-y',
          'interaction-prompt': 'none',
          'environment-image': 'neutral',
          'shadow-intensity': '0.6',
          'shadow-softness': '1',
          'exposure': '1.1',
          'tone-mapping': 'neutral',
          ...(rotating ? {'auto-rotate': '', 'rotation-per-second': '12deg'} : {}),
        })}
        {status !== 'ready' && <div className="model-poster">
          <img src={`${base}images/design/asset-10.webp`} alt="DRIFT 超级游艇侧前方预览" width={1400} height={900} loading="lazy" />
          <div className="model-start-panel">
            {status === 'idle' && <><button className="design-button model-start" onClick={() => setActivated(true)}><Box size={18} aria-hidden="true" />加载三维模型</button><p>约 {modelInfo.downloadMB} MB · 点击后加载</p></>}
            {status === 'loading' && <div role="status" aria-live="polite"><span>正在加载模型… {Math.round(progress*100)}%</span><progress max="1" value={progress} aria-label="三维模型加载进度" /></div>}
            {status === 'error' && <div role="alert"><p>模型未能加载，请检查网络后重试，或继续浏览下方图片和视频。</p><button className="design-button" onClick={() => setAttempt(value => value+1)}>重新加载</button></div>}
          </div>
        </div>}
      </div>
      <div className="model-controls">
        <div className="model-view-buttons" aria-label="模型预设视角">{views.map(view => <button key={view.label} disabled={status !== 'ready'} aria-pressed={selectedView === view.label} onClick={() => setView(view.label,view.orbit)}>{view.label}</button>)}</div>
        <div className="model-tool-buttons" aria-label="模型控制">
          <button disabled={status !== 'ready'} aria-label="放大模型" title="放大" onClick={() => viewer.current?.zoom(1)}><ZoomIn size={18} /></button>
          <button disabled={status !== 'ready'} aria-label="缩小模型" title="缩小" onClick={() => viewer.current?.zoom(-1)}><ZoomOut size={18} /></button>
          <button disabled={status !== 'ready'} aria-label="复位视角" title="复位" onClick={() => setView('整体视角',initialOrbit)}><RotateCcw size={18} /></button>
          <button disabled={status !== 'ready'} aria-pressed={rotating} aria-label={rotating ? '暂停自动旋转' : '开始自动旋转'} title={rotating ? '暂停旋转' : '自动旋转'} onClick={() => setRotating(value => !value)}><RotateCw size={18} /></button>
          <button disabled={status !== 'ready'} aria-label={expanded ? '退出模型全屏' : '全屏查看模型'} title="全屏" onClick={fullscreen}><Expand size={18} /></button>
        </div>
      </div>
      <div className="model-instructions"><span>拖动旋转 · 滚轮 / 双指缩放</span><span>方向键旋转 · + / − 缩放</span></div>
      {!!notice && <p role="status" className="model-notice">{notice}</p>}
    </div>
    <p className="model-disclosure">由原始 Rhino 模型转换。保留船体与甲板几何、可转换材质；网页灯光和部分材质表现与最终渲染图略有差异。</p>
  </section>;
}

