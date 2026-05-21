import React from 'react';

export interface SectionTitleProps {
  /** 主标题 */
  title: string;
  /** 副标题 */
  subtitle?: string;
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right';
  /** 是否显示装饰线 */
  showLine?: boolean;
  /** 装饰线位置 */
  linePosition?: 'top' | 'bottom';
  /** 自定义类名 */
  className?: string;
  /** 标题颜色变体 */
  variant?: 'dark' | 'light';
}

/**
 * 区块标题组件
 *
 * @example
 * <SectionTitle
 *   title="我的作品"
 *   subtitle="精选项目展示"
 *   align="center"
 *   showLine
 * />
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  showLine = false,
  linePosition = 'bottom',
  className = '',
  variant = 'dark',
}) => {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const lineAlignStyles = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  const textColors = {
    dark: 'text-text-primary',
    light: 'text-text-inverse',
  };

  const subtitleColors = {
    dark: 'text-text-secondary',
    light: 'text-text-inverse/70',
  };

  return (
    <div className={`mb-12 ${alignStyles[align]} ${className}`}>
      {showLine && linePosition === 'top' && (
        <div
          className={`w-16 h-1 bg-accent rounded-full mb-6 ${lineAlignStyles[align]}`}
        />
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${textColors[variant]}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${subtitleColors[variant]} ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      {showLine && linePosition === 'bottom' && (
        <div
          className={`w-16 h-1 bg-accent rounded-full mt-6 ${lineAlignStyles[align]}`}
        />
      )}
    </div>
  );
};
