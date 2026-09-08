import { RefObject, useEffect } from 'react';

/** Reveal each composition once, without hiding content while it waits offscreen. */
export function useHomeMotion(root: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || seen.has(entry.target)) return;
        seen.add(entry.target);
        observer.unobserve(entry.target);
        if (media.matches) return;
        const animation = entry.target.animate(
          [{ opacity: 0, transform: 'translateY(26px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 850, easing: 'cubic-bezier(.2,.65,.25,1)', fill: 'none' },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    root.current?.querySelectorAll('.home-introduction-copy, .selected-works > .section-heading, .featured-case, .secondary-works .work-card, .practice-layout, .awards-grid')
      .forEach(element => observer.observe(element));
    const stop = () => { if (media.matches) animations.forEach(animation => animation.cancel()); };
    media.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      media.removeEventListener('change', stop);
    };
  }, [root]);
}
