import { useState, useEffect, useCallback } from 'react';

interface ScrollProgress {
  /** 滚动进度 (0-1) */
  progress: number;
  /** 当前滚动位置 (px) */
  scrollY: number;
  /** 文档总高度 */
  scrollHeight: number;
  /** 视口高度 */
  clientHeight: number;
}

/**
 * 监听页面滚动进度的 Hook
 * @returns 滚动进度信息
 *
 * @example
 * const { progress, scrollY } = useScrollProgress();
 * return <div style={{ width: `${progress * 100}%` }} />;
 */
export function useScrollProgress(): ScrollProgress {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0,
    scrollHeight: 0,
    clientHeight: 0,
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const clientHeight = document.documentElement.clientHeight;

    setScrollProgress({
      progress: scrollHeight > 0 ? scrollY / scrollHeight : 0,
      scrollY,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight,
    });
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return scrollProgress;
}
