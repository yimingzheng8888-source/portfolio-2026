import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@components/common/Navbar';
import { getSpecialProjectById } from '@data/special-projects';
export function Layout() {
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'instant' as ScrollBehavior});
    const title=pathname.startsWith('/special-projects/')?getSpecialProjectById(pathname.split('/').pop()!)?.title:({'/':'船舶与海洋设计作品集','/portfolio':'全部作品','/special-projects':'设计案例','/about':'关于我','/contact':'联系我'} as Record<string,string>)[pathname];
    document.title=`${title || '页面未找到'} | 郑一鸣`;
  },[pathname]);
  return <div className={`site-layout ${pathname === '/' ? 'home-layout' : ''}`}><a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content')?.focus();}}>跳至主要内容</a><Navbar/>
    <main id="main-content" tabIndex={-1}><Outlet/></main>
    <footer className="site-footer"><div className="section-shell"><div className="footer-top"><div><h2>让设计成为下一次对话的起点。</h2><p>郑一鸣 · 广东海洋大学 · 2027 届船舶与海洋工程</p></div><Link className="footer-contact" to="/contact">联系我</Link></div>
      <div className="footer-bottom"><a href="mailto:yiming.zheng.work@outlook.com">yiming.zheng.work@outlook.com</a><div><Link to="/portfolio">全部作品</Link><Link to="/about">关于我</Link><span>© {new Date().getFullYear()} 郑一鸣</span></div></div>
    </div></footer>
  </div>;
}
