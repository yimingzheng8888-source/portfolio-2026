import { useState } from 'react';
import { Link } from 'react-router-dom';
import skills from '@data/skills.json';
const links=['/special-projects/drift-yacht','/special-projects/drift-yacht','/special-projects/haiwei-tour','/special-projects/dolphin-ip'];
export function SkillsTree(){
  const [active,setActive]=useState(0);const skill=skills[active];
  function select(index:number){setActive(index);document.getElementById(`skill-tab-${index}`)?.focus();}
  return <section className="practice-section"><div className="section-shell"><div className="section-heading"><div><h2>从造型到表达</h2><p className="section-description">让不同工具服务于同一个设计问题。</p></div><Link to="/about">了解我的背景</Link></div><div className="practice-layout"><div className="practice-tabs" role="tablist" aria-label="设计能力" aria-orientation="vertical">{skills.map((item,index)=><button key={item.id} id={`skill-tab-${index}`} role="tab" aria-controls="skill-panel" aria-selected={active===index} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={e=>{if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();select(e.key==='Home'?0:e.key==='End'?skills.length-1:(index+(e.key==='ArrowDown'?1:-1)+skills.length)%skills.length);}}}><strong>{item.label}</strong><span>{item.shortDesc}</span></button>)}</div><div id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${active}`} tabIndex={0} className="practice-panel"><img key={skill.image} src={`${import.meta.env.BASE_URL}${skill.image.slice(1)}`} alt={skill.label+'作品示例'} width="1000" height="625" loading="lazy"/><div><div className="practice-tools">{skill.tools.map(tool=><span key={tool}>{tool}</span>)}</div><Link to={links[active]}>查看相关作品</Link></div></div></div></div></section>;
}
