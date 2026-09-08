import { Link, NavLink } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
export const navItems = [
  {label:'首页',path:'/'}, {label:'作品集',path:'/portfolio'},
  {label:'DRIFT 专题',path:'/special-projects/drift-yacht'},
  {label:'关于我',path:'/about'}, {label:'联系我',path:'/contact'},
];
export function Navbar() {
  const [open,setOpen] = useState(false);
  const close = useCallback(() => setOpen(false),[]);
  return <><header className="site-header"><nav className="section-shell site-nav" aria-label="主导航">
    <Link className="site-brand" to="/" aria-label="郑一鸣作品集首页"><strong>郑一鸣</strong><span>船舶与海洋设计</span></Link>
    <div className="desktop-nav">{navItems.map(item=><NavLink end={item.path==='/'} key={item.path} to={item.path}>{item.label}</NavLink>)}</div>
    <button className="menu-toggle" onClick={()=>setOpen(true)} aria-label="打开菜单" aria-controls="mobile-navigation" aria-expanded={open}><Menu size={23}/></button>
  </nav></header><MobileMenu isOpen={open} onClose={close} navItems={navItems}/></>;
}
