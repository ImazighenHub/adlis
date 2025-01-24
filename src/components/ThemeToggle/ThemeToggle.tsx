'use client';
import { useTheme } from 'next-themes';
import { ToggleGroup, ToggleGroupItem } from '@/components';
import { MoonIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const themeOptions = [
  {
    value: 'light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    icon: MoonIcon,
  },
];

const ToggleTheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark the component as mounted
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (value: string | null) => {
    if (!value) {
      // If deselected, toggle to the opposite of the theme
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    } else {
      // Set the explicitly selected theme
      setTheme(value);
    }
  };

  // Determine the currently selected theme from system
  const currentValue = theme === 'system' ? resolvedTheme : theme;

  return (
    <ToggleGroup
      type='single'
      value={currentValue} // Use resolvedTheme to reflect the applied theme
      onValueChange={handleThemeChange}
      className={cn(
        'relative overflow-hidden rounded-xs border border-neutral-100 before:absolute before:inset-y-0 before:left-0 before:w-1/2 before:bg-purple-100 dark:border-white',
        {
          'before:transition-all': mounted, // Enable animation only after mounted
          'before:translate-x-full': currentValue === 'dark',
        },
      )}
    >
      {themeOptions.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          aria-label={`Toggle ${option.value} theme`}
          className='relative z-1'
        >
          <option.icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default ToggleTheme;
