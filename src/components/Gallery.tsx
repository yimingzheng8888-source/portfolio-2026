import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { MediaImage, fullImage } from './MediaImage';
export function Gallery({images,title,labels=[],poster=false}:{images:string[];title:string;labels?:string[];poster?:boolean}){
 const [index,setIndex]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null),trigger=useRef<HTMLElement|null>(null);
 const close=()=>{dialog.current?.close();setIndex(null);trigger.current?.focus();};
 const open=index!==null;
 useEffect(()=>{if(!open)return;dialog.current?.showModal();const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=prev;};},[open]);
 if(!images.length)return null;
 return <section className={`case-section gallery-section ${poster?'poster-section':''}`}><div className="section-heading"><h2>{title}</h2><span className="section-note">{poster?'原始展示版面':'点击放大'} / {String(images.length).padStart(2,'0')}</span></div>
  <div className={`case-gallery ${poster?'poster-gallery':''}`}>{images.map((src,i)=><figure key={src}><button className="gallery-trigger" onClick={e=>{trigger.current=e.currentTarget;setIndex(i);}} aria-label={`放大${labels[i]||`${title} ${i+1}`}`}><MediaImage src={src} alt={labels[i]||`${title} ${i+1}`} sizes={poster?'(max-width:767px) 80vw, 30vw':'(max-width:767px) 92vw, 50vw'} loading="lazy"/><span className="image-open"><Maximize2 size={18}/></span></button>{labels[i]&&<figcaption>{labels[i]}</figcaption>}</figure>)}</div>
  <dialog ref={dialog} className="design-lightbox" aria-label={`${title}大图`} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===e.currentTarget)close();}} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();setIndex(i=>((i??0)+1)%images.length);}if(e.key==='ArrowLeft'){e.preventDefault();setIndex(i=>((i??0)-1+images.length)%images.length);}}}>
   {index!==null&&<><div className="lightbox-toolbar"><span>{labels[index]||title} · {index+1} / {images.length}</span><a href={fullImage(images[index])} target="_blank" rel="noreferrer">打开大图</a><button onClick={close} aria-label="关闭大图"><X/></button></div><img className="lightbox-image" src={fullImage(images[index])} alt={labels[index]||title}/>{images.length>1&&<div className="lightbox-controls"><button onClick={()=>setIndex((index-1+images.length)%images.length)} aria-label="上一张"><ArrowLeft/></button><button onClick={()=>setIndex((index+1)%images.length)} aria-label="下一张"><ArrowRight/></button></div>}</>}
  </dialog>
 </section>;
}
