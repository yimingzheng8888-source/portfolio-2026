import React from 'react';

export interface BadgeProps {
  /** 显示文本 */
  children: React.ReactNode;
  /** 变体颜色 */
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline';
  /** 尺寸 */
  size?: 'sm' | 'md';
  /** 自定义类名 */
  className?: string;
}

/**
 * 标签/徽章组件
 *
 * @example
 * <Badge variant="accent" size="sm">UI设计</Badge>
 * <Badge variant="outline">React</Badge>
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-bg-secondary text-text-secondary',
    primary: 'bg-primary text-white',
    secondary: 'bg-accent text-white',
    accent: 'bg-accent text-white',
    outline: 'border border-text-muted text-text-secondary bg-transparent',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
