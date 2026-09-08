const stats = [['2/121','专业排名'],['7','设计作品'],['4','竞赛奖项'],['2','实用新型专利']];
export const StatsBar = () => <section id="stats-section" className="portfolio-stats" aria-label="个人概况"><div>{stats.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>;
