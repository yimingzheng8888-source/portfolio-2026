import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
interface Props { isOpen:boolean;onClose:()=>void;navItems:{label:string;path:string}[]; }
export function MobileMenu({isOpen,onClose,navItems}:Props) {
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{
    if(!isOpen)return;
    const origin=document.activeElement as HTMLElement;
    const dialog=ref.current!;dialog.showModal();
    const previous=document.body.style.overflow;document.body.style.overflow='hidden';
    const media=matchMedia('(min-width: 768px)');
    const change=()=>{if(media.matches)onClose();};media.addEventListener('change',change);
    return ()=>{dialog.close();document.body.style.overflow=previous;media.removeEventListener('change',change);origin?.focus();};
  },[isOpen,onClose]);
  return <dialog id="mobile-navigation" ref={ref} className="mobile-navigation" aria-label="网站导航" onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
    <div className="mobile-menu-top"><strong>郑一鸣 · 作品集</strong><button autoFocus onClick={onClose} aria-label="关闭菜单"><X/></button></div>
    <nav aria-label="移动导航">{navItems.map(item=><NavLink end={item.path==='/'} key={item.path} to={item.path} onClick={onClose}>{item.label}</NavLink>)}</nav>
    <p>2027 届 · 广东海洋大学</p>
  </dialog>;
}
