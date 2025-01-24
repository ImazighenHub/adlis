'use client';
import { useEffect, useState } from 'react';

export const useScrollStatus = (threshold: number = 1) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Add scroll event listener with signal
    window.addEventListener('scroll', handleScroll, { signal });

    // Cleanup function to abort the listener
    return () => {
      controller.abort();
    };
  }, [threshold]);

  return isScrolled;
};
