'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components';

const ToggleTheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark the component as mounted
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const handleThemeChange = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      onClick={handleThemeChange}
      size='icon'
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ToggleTheme;
