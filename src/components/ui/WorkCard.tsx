import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Work } from '@/types';
import { MediaImage } from '../MediaImage';

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link className="work-card" to={`/special-projects/${work.id}`}>
      <div className="work-card-image">
        <MediaImage src={work.thumbnail} alt={work.title} sizes="(max-width: 767px) 92vw, 46vw" loading="lazy" />
        <span className="image-open" aria-hidden="true"><ArrowUpRight/></span>
      </div>
      <div className="work-card-copy">
        <div className="work-card-meta"><span>{work.category}</span>{!!work.year && <span>{work.year}</span>}</div>
        <div className="work-card-title"><h3>{work.title}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
      </div>
    </Link>
  );
}
