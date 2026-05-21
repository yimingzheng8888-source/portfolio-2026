import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInViewOptions {
  /** 触发阈值 (0-1) */
  threshold?: number;
  /** 根边距 */
  rootMargin?: string;
  /** 是否只触发一次 */
  once?: boolean;
}

/**
 * 检测元素是否进入视口的 Hook
 * @param options - 配置选项
 * @returns [ref, isInView] - 元素引用和是否在视口内
 *
 * @example
 * const [ref, isInView] = useInView({ threshold: 0.5, once: true });
 * return <div ref={ref}>{isInView ? '可见' : '不可见'}</div>;
 */
export function useInView(options: UseInViewOptions = {}): [React.RefObject<HTMLDivElement>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
        }
      });
    },
    [once]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, handleIntersection]);

  return [ref, isInView];
}
