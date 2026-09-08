import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DriftModelViewer } from '@components/DriftModelViewer';
import { getSpecialProjectById, getAdjacentProjects } from '@data/special-projects';
const url = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
function Gallery({ images, title, labels = [] }: { images: string[]; title: string; labels?: string[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const close = () => { dialog.current?.close(); setIndex(null); trigger.current?.focus(); };
  useEffect(() => {
    if (index === null) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [index]);
  if (!images.length) return null;
  return <section className="case-section"><h2>{title}</h2><p className="case-hint">点击图片查看大图；支持方向键切换与 Esc 关闭。</p>
    <div className={`case-gallery ${title === '完整竞赛展板' ? 'poster-gallery' : ''}`}>
      {images.map((src, i) => <figure key={src}><button className="gallery-trigger" onClick={e => { trigger.current = e.currentTarget; setIndex(i); }} aria-label={`放大${labels[i] || `${title} ${i + 1}`}`}><img src={url(src)} alt={labels[i] || `${title} ${i + 1}`} loading="lazy" /><span aria-hidden="true">放大查看</span></button>{labels[i] && <figcaption>{labels[i]}</figcaption>}</figure>)}
    </div>
    <dialog ref={dialog} className="design-lightbox" aria-label={`${title}大图`} onCancel={close} onClose={() => setIndex(null)} onClick={e => { if (e.target === e.currentTarget) close(); }} onKeyDown={e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); setIndex(i => ((i ?? 0) + 1) % images.length); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); setIndex(i => ((i ?? 0) - 1 + images.length) % images.length); }
    }}>
      {index !== null && <><div className="lightbox-toolbar"><span>{index + 1} / {images.length}</span><a href={url(images[index])} target="_blank" rel="noreferrer">打开原尺寸</a><button onClick={close} aria-label="关闭大图">关闭 ×</button></div><img className="lightbox-image" src={url(images[index])} alt={labels[index] || `${title} ${index + 1}`} />{images.length > 1 && <div className="lightbox-controls"><button onClick={() => setIndex((index - 1 + images.length) % images.length)}>上一张</button><button onClick={() => setIndex((index + 1) % images.length)}>下一张</button></div>}</>}
    </dialog>
  </section>;
}
export const SpecialProjectDetailPage: React.FC = () => {
  const { id = '' } = useParams();
  const project = getSpecialProjectById(id);
  const [deck, setDeck] = useState(0);
  useEffect(() => { setDeck(0); }, [id]);
  if (!project) return <div className="case-container case-section"><h1>项目未找到</h1><Link to="/portfolio">返回作品集</Link></div>;
  const adjacent = getAdjacentProjects(id);
  const isDrift = id === 'drift-yacht';
  const deckIndex = Math.min(deck, (project.decks?.length || 1) - 1);
  return <article className={`design-case ${isDrift ? 'drift-case' : ''}`} key={id}>
    <header className="case-container case-header"><Link className="case-back" to="/portfolio">返回作品集</Link><p className="case-category">{project.category}{isDrift ? ' / 重点项目' : ''}</p><h1>{project.title}</h1><p className="case-lead">{project.description}</p><div className="case-meta"><span>{project.date}</span><span>{project.role}</span></div><div className="case-tags">{project.tools.map(t => <span key={t}>{t}</span>)}</div>
      {isDrift && <nav className="case-jumps" aria-label="项目章节">{[['三维浏览','interactive-model'],['展示视频','project-video'],['四层甲板','deck-plans'],['设计过程','design-process']].map(([label,target]) => <button key={target} onClick={() => document.getElementById(target)?.scrollIntoView()}>{label}</button>)}</nav>}
    </header>
    <div className="case-container"><img className="case-cover" src={url(project.cover)} alt={project.title} /></div>
    <div className="case-container">
      {project.specs && <section className="case-specs" aria-label="概念设计参数">{project.specs.map(([label,value]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}<p>以上为设计说明中的概念方案参数。</p></section>}
      {isDrift && <DriftModelViewer />}
      <section className="case-section case-story"><h2>{isDrift ? '一座可以航行的文化驿站' : '项目说明'}</h2><div>{Object.entries(project.sections).map(([key,value]) => value && <div key={key} className="case-paragraph"><h3>{({background:'设计背景',challenge:'设计挑战',solution:'设计策略',result:'项目成果'} as Record<string,string>)[key]}</h3><p>{value}</p></div>)}</div></section>
      {project.video && <section className="case-section" id="project-video"><h2>项目展示视频</h2><p className="case-hint">保留原视频内容与署名，点击播放。</p><video key={project.video} className="case-video" controls playsInline preload="none" poster={url(`/videos/${project.video}-poster.jpg`)} aria-label={`${project.title}展示视频`}><source src={url(`/videos/${project.video}.mp4`)} type="video/mp4" />当前浏览器不支持视频播放。</video></section>}
      {project.decks && <section className="case-section" id="deck-plans"><h2>四层甲板，一条完整的生活动线</h2><p className="case-hint">从飞桥到下层甲板，查看空间组织与功能分区。点击图纸可打开大图。</p><div className="deck-tabs" role="tablist" aria-label="甲板图">{project.decks.map((d,i) => <button id={`deck-tab-${i}`} role="tab" aria-controls="deck-panel" aria-selected={deckIndex===i} tabIndex={deckIndex===i?0:-1} onKeyDown={e => { if (['ArrowRight','ArrowLeft','Home','End'].includes(e.key)) { e.preventDefault(); const next=e.key==='Home'?0:e.key==='End'?project.decks!.length-1:(i+(e.key==='ArrowRight'?1:-1)+project.decks!.length)%project.decks!.length;setDeck(next);document.getElementById(`deck-tab-${next}`)?.focus(); } }} onClick={() => setDeck(i)} key={d.label}>{d.label}</button>)}</div><div id="deck-panel" role="tabpanel" aria-labelledby={`deck-tab-${deckIndex}`} className="deck-panel"><a href={url(project.decks[deckIndex].image)} target="_blank" rel="noreferrer" aria-label={`打开${project.decks[deckIndex].label}原图`}><img src={url(project.decks[deckIndex].image)} alt={`${project.decks[deckIndex].label}总体布置图`} loading="lazy" /></a></div></section>}
      {project.featureImages && <><Gallery images={project.featureImages} title="空间复用：光伏与停机坪" labels={['收纳状态：光伏阵列','展开状态：停机坪']} /><p className="case-hint">概念方案通过旋转与横向伸展实现空间切换，并提出光伏供能与船上农业模块联动。</p></>}
      <Gallery key={`${id}-gallery`} images={project.gallery} title={isDrift?'室内与甲板空间':'作品展示'} labels={isDrift?['主甲板会客厅','就餐空间','创新工坊','文化展示墙','上层甲板户外沙发区','户外视听场景']:[]} />
      <div id="design-process"><Gallery key={`${id}-process`} images={project.processImages} title="设计过程" labels={isDrift?['概念手绘','外观方案推演','Rhino 船体建模','3ds Max 家具建模','Unreal Engine 场景制作','STAR-CCM+ 初步水动力分析']:[]} /></div>
      {project.posters && <Gallery images={project.posters} title="完整竞赛展板" />}
      <nav className="case-adjacent" aria-label="其他项目">{adjacent.prev?<Link to={`/special-projects/${adjacent.prev.id}`}>上一个项目<br /><strong>{adjacent.prev.title}</strong></Link>:<Link to="/portfolio">浏览全部作品</Link>}{adjacent.next && <Link to={`/special-projects/${adjacent.next.id}`}>下一个项目<br /><strong>{adjacent.next.title}</strong></Link>}</nav>
    </div>
  </article>;
};
export default SpecialProjectDetailPage;
