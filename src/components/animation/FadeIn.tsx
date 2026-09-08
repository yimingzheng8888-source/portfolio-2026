import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';

export interface FadeInProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 延迟时间 (秒) */
  delay?: number;
  /** 动画时长 (秒) */
  duration?: number;
  /** 移动方向 */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** 移动距离 (px) */
  distance?: number;
  /** 是否只触发一次 */
  once?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 触发阈值 (0-1) */
  threshold?: number;
}

/**
 * 淡入动画组件
 * 元素进入视口时触发淡入动画
 *
 * @example
 * <FadeIn direction="up" delay={0.2} distance={30}>
 *   <h2>标题内容</h2>
 * </FadeIn>
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 20,
  once = true,
  className = '',
  threshold = 0.1,
}) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
        return {};
      default:
        return { y: distance };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : "hidden"}
      animate={reduced || isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
