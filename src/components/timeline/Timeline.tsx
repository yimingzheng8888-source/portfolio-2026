import React from 'react';
import { FadeIn } from '@components/animation/FadeIn';

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
  icon?: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ items, title, icon }) => {
  return (
    <div className="w-full">
      <FadeIn direction="up" delay={0.1}>
        <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
          {icon && <span className="text-neutral-700">{icon}</span>}
          {title}
        </h3>
      </FadeIn>

      <div className="relative">
        {/* 竖线 */}
        <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-neutral-800 via-neutral-300 to-neutral-200" />

        <div className="space-y-8">
          {items.map((item, index) => (
            <FadeIn key={item.id} direction="left" delay={0.1 + index * 0.15} distance={30}>
              <div className="relative pl-10 md:pl-14">
                {/* 节点圆点 */}
                <div className="absolute left-0 md:left-0 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border-[3px] border-neutral-800 shadow-sm z-10" />

                {/* 内容卡片 */}
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-neutral-700 bg-neutral-100 rounded-full w-fit">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-neutral-600 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
