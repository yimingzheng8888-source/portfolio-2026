import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  /** 按钮变体 */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 子元素 */
  children: React.ReactNode;
  /** 点击回调 */
  onClick?: () => void;
  /** 链接地址 (如果提供，渲染为 <Link> 或 <a>) */
  href?: string;
  /** 是否外部链接 */
  external?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮类型 */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * 通用按钮组件
 *
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   点击我
 * </Button>
 *
 * <Button variant="outline" href="/portfolio">
 *   查看作品
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  external = false,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-light active:scale-95',
    secondary:
      'bg-accent text-white hover:bg-accent-hover active:scale-95',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95',
    ghost:
      'text-primary hover:bg-bg-secondary active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};
