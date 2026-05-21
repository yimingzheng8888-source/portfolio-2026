import React from 'react';

export interface GlassCardProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 背景透明度 (0-1) */
  opacity?: number;
  /** 模糊程度 (px) */
  blur?: number;
  /** 边框透明度 (0-1) */
  borderOpacity?: number;
}

/**
 * 毛玻璃效果卡片组件
 *
 * @example
 * <GlassCard opacity={0.2} blur={16}>
 *   <h3>毛玻璃卡片</h3>
 *   <p>内容...</p>
 * </GlassCard>
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  opacity = 0.15,
  blur = 12,
  borderOpacity = 0.2,
}) => {
  const glassStyles = {
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden ${className}`}
      style={glassStyles}
    >
      {children}
    </div>
  );
};
