import React, { useState, useEffect, useCallback } from 'react';

export interface TypewriterProps {
  /** 要显示的文本 */
  text: string;
  /** 打字速度 (ms/字) */
  speed?: number;
  /** 打完后的停顿时间 (ms) */
  pauseDuration?: number;
  /** 是否循环 */
  loop?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 光标样式 */
  cursorStyle?: 'block' | 'line' | 'underline';
  /** 是否显示光标 */
  showCursor?: boolean;
}

/**
 * 打字机特效组件
 * 逐字显示文本，支持循环播放
 *
 * @example
 * <Typewriter
 *   text="你好，我是设计师"
 *   speed={80}
 *   pauseDuration={2000}
 *   loop
 * />
 */
export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 80,
  pauseDuration = 2000,
  loop = false,
  className = '',
  cursorStyle = 'line',
  showCursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const cursorStyles = {
    block: 'inline-block w-2.5 h-5 bg-current ml-1 align-middle animate-blink',
    line: 'inline-block w-0.5 h-5 bg-current ml-0.5 align-middle animate-blink',
    underline: 'inline-block w-4 h-0.5 bg-current ml-1 align-middle animate-blink',
  };

  const typeText = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // 打字中
      if (displayText.length < text.length) {
        setDisplayText(text.slice(0, displayText.length + 1));
      } else {
        // 打完了，暂停
        if (loop) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    } else {
      // 删除中
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
      }
    }
  }, [displayText, isDeleting, isPaused, loop, pauseDuration, text]);

  useEffect(() => {
    const timer = setTimeout(typeText, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [typeText, speed, isDeleting]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      {showCursor && (
        <span className={cursorStyles[cursorStyle]} aria-hidden="true" />
      )}
    </span>
  );
};
