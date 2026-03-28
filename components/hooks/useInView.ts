"use client";

import { useEffect, useState, RefObject } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element | null>,
  options: Options = {}
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return inView;
}
