import { useState, useEffect } from 'react';

/**
 * 响应式媒体查询 Hook
 * @param query - CSS 媒体查询字符串
 * @returns 是否匹配该媒体查询
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatch = (event: MediaQueryListEvent | MediaQueryList) => {
      setMatches('matches' in event ? event.matches : (event as MediaQueryList).matches);
    };

    updateMatch(media);

    if (media.addEventListener) {
      media.addEventListener('change', updateMatch);
    } else {
      // 兼容旧版浏览器
      media.addListener(updateMatch);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', updateMatch);
      } else {
        media.removeListener(updateMatch);
      }
    };
  }, [query]);

  return matches;
}

/** 预设断点 */
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;
