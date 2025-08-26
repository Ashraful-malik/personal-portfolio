'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) {
    return null;
  }
  return (
    <div className="pt-1">
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')} className="cursor-pointer">
          <Sun className="h-6 w-6" />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')} className="cursor-pointer">
          <Moon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default ThemeSwitcher;
