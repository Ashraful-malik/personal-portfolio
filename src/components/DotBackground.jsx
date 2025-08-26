'use client';
import { cn } from '@/utility/cn';
import React from 'react';

function DotBackground({ className = '', position = 'absolute' }) {
  return (
    <div
      className={cn(
        `z-[-1] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#212121_1px,transparent_1px)] ${position}`,
        className,
      )}
    ></div>
  );
}

export default DotBackground;
