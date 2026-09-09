import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CaseNavigation, CaseShare } from '@components/CaseNavigation';
import { DriftModelViewer } from '@components/DriftModelViewer';
import { Gallery } from '@components/Gallery';
import { MediaImage, assetUrl, fullImage } from '@components/MediaImage';
import { getSpecialProjectById, getAdjacentProjects } from '@data/special-projects';
import { useHomeMotion } from '@hooks/useHomeMotion';
const names:Record<string,string>={'drift-yacht':'DRIFT','blue-ring-yacht':'CERULEAN RING','whale-dream':"WHALE’S DREAM",'purify-manta':'PURIFY MANTA','haiwei-tour':'HAIWEI 02','dolphin-ip':'LITTLE DOLPHIN','port-berthing':'BERTHING'};
export function SpecialProjectDetailPage(){
 const {id=''}=useParams();const project=getSpecialProjectById(id);const [deck,setDeck]=useState(0);const root=useRef<HTMLDivElement>(null);useHomeMotion(root);
 useEffect(()=>{setDeck(0);},[id]);
 if(!project)return <div className="section-shell empty-page"><h1>项目未找到</h1><Link to="/portfolio">返回作品集</Link></div>;
 const adjacent=getAdjacentProjects(id),isDrift=id==='drift-yacht',deckIndex=Math.min(deck,(project.decks?.length||1)-1);
 return <article ref={root} className={`design-case ${isDrift?'drift-case':''}`} key={id}>
  <header className="case-container case-header"><div className="case-topline"><Link to="/portfolio">作品集 / {project.category}</Link><span>{project.date==='设计作品'?'':project.date}</span></div><h1>{names[id]||project.title}</h1><div className="case-subtitle"><p>{project.title}</p><CaseShare key={id}/></div></header>
  <div className="case-cover-wrap"><MediaImage className="case-cover" src={project.cover} alt={project.title} sizes="100vw" {...{fetchpriority:'high'}}/></div>
  {isDrift&&<CaseNavigation/>}
  <div className="case-container">
   <section className="case-section case-introduction" id="project-story" data-reveal><div><p className="eyebrow">THE IDEA</p><h2>{isDrift?'一座航行中的文化驿站。':project.title}</h2><p className="case-concept">{project.sections.background||project.description}</p><p className="case-concept">{project.sections.solution}</p></div><aside className="project-facts"><div><span>我的工作</span><p>{project.role}</p></div><div><span>工具与方法</span><p>{project.tools.join(' / ')}</p></div>{project.sections.result&&<div><span>项目成果</span><p>{project.sections.result}</p></div>}</aside></section>
   {project.specs&&<section className="case-specs" aria-label="概念设计参数">{project.specs.slice(0,3).map(([label,value])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}<p>概念设计参数</p></section>}
   {isDrift&&<Gallery images={['/media/drift-walkway','/media/drift-bow','/media/drift-night','/media/drift-stern']} title="外观与甲板" labels={['舷侧步道','艏部开放甲板','夜景与空间展开','艉部休闲空间']}/>}
   <div id="project-spaces"><Gallery key={`${id}-gallery`} images={project.gallery} title={isDrift?'舱内的生活':id==='blue-ring-yacht'?'通透、开放的游览空间':id==='whale-dream'?'从海面走入生活':id==='dolphin-ip'?'从角色到实物':'设计细节'} labels={isDrift?['会客与酒吧空间','文化创新工坊','主人套房']:[]}/></div>
   {project.video&&<section className="case-section film-section" id="project-video"><header className="section-heading"><div><p className="eyebrow">PROJECT FILM</p><h2>让空间流动起来。</h2></div><span className="section-note">完整影片 · 保留原片署名</span></header><video key={project.video} className="case-video" controls playsInline preload="none" poster={fullImage(project.cover)} aria-label={`${project.title}展示视频`}><source src={assetUrl(`/videos/${project.video}.mp4`)} type="video/mp4"/>当前浏览器不支持视频播放。</video></section>}
   {isDrift&&<DriftModelViewer/>}
   {project.decks&&<section className="case-section" id="deck-plans"><header className="section-heading"><div><p className="eyebrow">GENERAL ARRANGEMENT</p><h2>四层甲板的空间组织。</h2></div></header><div className="deck-tabs" role="tablist" aria-label="甲板图">{project.decks.map((d,i)=><button id={`deck-tab-${i}`} role="tab" aria-controls="deck-panel" aria-selected={deckIndex===i} tabIndex={deckIndex===i?0:-1} onKeyDown={e=>{if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?project.decks!.length-1:(i+(e.key==='ArrowRight'?1:-1)+project.decks!.length)%project.decks!.length;setDeck(next);document.getElementById(`deck-tab-${next}`)?.focus();}}} onClick={()=>setDeck(i)} key={d.label}>{d.label}</button>)}</div><div id="deck-panel" role="tabpanel" aria-labelledby={`deck-tab-${deckIndex}`} className="deck-panel"><a href={fullImage(project.decks[deckIndex].image)} target="_blank" rel="noreferrer" aria-label={`打开${project.decks[deckIndex].label}大图`}><MediaImage src={project.decks[deckIndex].image} alt={`${project.decks[deckIndex].label}总体布置图`} loading="lazy"/></a></div></section>}
   <div id="design-process"><Gallery key={`${id}-process`} images={project.processImages} title="设计的形成" labels={isDrift?['概念手绘','外观方案推演','Rhino 船体建模']:[]}/></div>
   {project.posters?.length? <details className="poster-appendix" id="project-posters"><summary>原始竞赛展板 <span>{project.posters.length} 张 · 展开查看 ＋</span></summary><Gallery images={project.posters} title="完整展板" poster/></details>:null}
   <nav className="case-adjacent" aria-label="其他项目"><Link to="/portfolio">返回全部作品</Link>{adjacent.next&&<Link to={`/special-projects/${adjacent.next.id}`}><span>下一个项目</span><strong>{adjacent.next.title} <ArrowUpRight/></strong></Link>}</nav>
  </div>
 </article>;
}
export default SpecialProjectDetailPage;
