import React from 'react';

export interface CardProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 是否可点击 */
  clickable?: boolean;
  /** 点击回调 */
  onClick?: () => void;
  /** 是否有阴影 */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** 是否有边框 */
  bordered?: boolean;
}

/**
 * 通用卡片组件
 *
 * @example
 * <Card shadow="lg" bordered>
 *   <h3>卡片标题</h3>
 *   <p>卡片内容</p>
 * </Card>
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  clickable = false,
  onClick,
  shadow = 'md',
  bordered = false,
}) => {
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const baseStyles =
    'bg-white rounded-lg overflow-hidden transition-all duration-300';
  const hoverStyles = clickable
    ? 'cursor-pointer hover:-translate-y-1 hover:shadow-xl'
    : '';
  const borderStyles = bordered ? 'border border-gray-200' : '';

  return (
    <div
      className={`${baseStyles} ${shadowStyles[shadow]} ${hoverStyles} ${borderStyles} ${className}`}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {children}
    </div>
  );
};
