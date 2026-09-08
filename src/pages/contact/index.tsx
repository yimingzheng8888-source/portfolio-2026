import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Copy, Mail, Phone } from 'lucide-react';
const email='yiming.zheng.work@outlook.com';
export function ContactPage(){
  const [notice,setNotice]=useState('');
  const emailRef=useRef<HTMLAnchorElement>(null);
  async function copyEmail(){try{await navigator.clipboard.writeText(email);setNotice('邮箱地址已复制。');}catch{emailRef.current?.focus();const r=document.createRange();r.selectNodeContents(emailRef.current!);const selection=window.getSelection();selection?.removeAllRanges();selection?.addRange(r);setNotice('请长按或手动复制上方邮箱地址。');}}
  return <div className="section-shell contact-page"><header className="editorial-heading"><p>联系我</p><h1>期待一次关于设计的交流。</h1><p>欢迎交流船舶设计、技术与质量、验船及船东技术相关机会。</p></header>
    <section className="contact-focus" aria-labelledby="email-title"><div><Mail size={25} aria-hidden="true"/><h2 id="email-title">电子邮箱</h2><a ref={emailRef} className="contact-email" href={`mailto:${email}`}>{email}</a><p>可以在邮件中附上公司、岗位信息和方便联系的时间。</p><div className="contact-actions"><a className="design-button" href={`mailto:${email}?subject=${encodeURIComponent('工作机会 / 作品集交流')}`}>打开邮件应用</a><button className="quiet-button" onClick={copyEmail}><Copy size={17}/>复制邮箱</button></div><p className="contact-feedback" role="status" aria-live="polite">{notice || '若微信或浏览器无法打开邮件应用，请复制邮箱后发送邮件。'}</p></div>
    <aside><Phone size={23} aria-hidden="true"/><h2>电话联系</h2><a className="contact-phone" href="tel:+8619390037479">193 9003 7479</a><dl><div><dt>院校</dt><dd>广东海洋大学</dd></div><div><dt>专业</dt><dd>船舶与海洋工程</dd></div><div><dt>预计毕业</dt><dd>2027 年 6 月</dd></div></dl></aside></section>
    <div className="contact-return"><p>也可以先从一艘游艇，了解我的设计思路。</p><Link to="/special-projects/drift-yacht">阅读 DRIFT 设计专题</Link></div>
  </div>;
}
export default ContactPage;
