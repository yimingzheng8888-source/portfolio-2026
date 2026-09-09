import { useEffect, useState } from 'react';
const sections=[['概念','project-story'],['空间','project-spaces'],['影片','project-video'],['三维浏览','interactive-model'],['甲板','deck-plans'],['过程','design-process'],['展板','project-posters']];
export function CaseNavigation(){
 const [active,setActive]=useState('');
 useEffect(()=>{
  const update=()=>{const available=sections.map(([,id])=>document.getElementById(id)).filter((e):e is HTMLElement=>!!e);const passed=available.filter(e=>e.getBoundingClientRect().top<190);setActive(passed[passed.length-1]?.id||'');};
  window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update);
 },[]);
 return <nav className="case-toc" aria-label="DRIFT 项目章节"><div className="case-container"><strong>DRIFT 60</strong>{sections.map(([label,id])=><button key={id} aria-current={active===id?'true':undefined} onClick={()=>document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant' as ScrollBehavior:'smooth'})}>{label}</button>)}</div></nav>;
}
export function CaseShare(){const [notice,setNotice]=useState('');return <div className="case-share"><button onClick={async()=>{try{await navigator.clipboard.writeText(location.href);setNotice('项目链接已复制，可粘贴分享。');}catch{setNotice('请复制浏览器地址栏中的链接进行分享。');}}}>复制项目链接</button><span role="status">{notice}</span></div>;}
