import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';

export interface CountUpProps {
  /** 目标数字 */
  end: number;
  /** 动画时长 (秒) */
  duration?: number;
  /** 后缀 (如 "+", "%") */
  suffix?: string;
  /** 前缀 */
  prefix?: string;
  /** 自定义类名 */
  className?: string;
  /** 小数位数 */
  decimals?: number;
  /** 是否只触发一次 */
  once?: boolean;
}

/**
 * 数字递增动画组件
 * 进入视口时从 0 递增到目标值
 *
 * @example
 * <CountUp end={150} duration={2} suffix="+" prefix="" />
 * <CountUp end={99.9} duration={1.5} suffix="%" decimals={1} />
 */
export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0,
  once = true,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const animationRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    const startTime = Date.now();
    const durationMs = duration * 1000;

    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // 使用 easeOutQuart 缓动函数
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentValue = eased * end;

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (isInView && (!once || !hasAnimated)) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, animate, once, hasAnimated]);

  const formattedCount = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};
