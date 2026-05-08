import { cn } from '@/utility/cn';
import React from 'react';
import DotBackground from './DotBackground';

function Container({ children, className }) {
  return <div className={cn(`mx-auto max-w-6xl`, className)}>{children}</div>;
}

export default Container;
