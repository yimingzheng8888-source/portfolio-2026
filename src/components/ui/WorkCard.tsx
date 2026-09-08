import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Work } from '@/types';

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link className="work-card" to={`/special-projects/${work.id}`}>
      <div className="work-card-image">
        <img src={`${import.meta.env.BASE_URL}${work.thumbnail.replace(/^\//, '')}`} alt={work.title} width={1200} height={800} loading="lazy" />
        {work.id === 'drift-yacht' && <span className="work-card-featured">重点项目 · 交互式 3D</span>}
      </div>
      <div className="work-card-copy">
        <div className="work-card-meta"><span>{work.category}</span>{!!work.year && <span>{work.year}</span>}</div>
        <div className="work-card-title"><h3>{work.title}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
        <p>{work.description}</p>
      </div>
    </Link>
  );
}
