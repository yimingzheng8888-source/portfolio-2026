import { Link } from 'react-router-dom';
import testimonials from '@data/testimonials.json';
export const Testimonials = () => <section className="awards-section"><div className="section-shell"><div className="section-heading"><div><p>竞赛与实践</p><h2>设计成果</h2></div></div><div className="awards-grid">{testimonials.map(item => <article key={item.id}><span className="award-name">{item.title}</span><h3>{item.name}</h3><p className="award-competition">{item.company}</p><p>{item.content}</p><Link to={`/special-projects/${item.project}`}>查看项目</Link></article>)}</div></div></section>;
