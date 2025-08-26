'use client';
import { cn } from '@/utility/cn';
import React, { isValidElement } from 'react';
import { cloneElement } from 'react';

const variants = {
  variant: {
    default: 'text-text-primary bg-primary ',
    primary: 'text-text-inverse bg-brand-primary shadow-none',
    secondary: 'text-text-primary bg-bg-subtle  shadow-none ',
    outline:
      'text-primary border border-brand-primary bg-transparent hover:bg-primary/20 hover:bg-brand-primary/25',
    link: 'text-brand-primary underline-offset-4 hover:underline shadow-none',
  },
  size: {
    default: 'h-9 px-4 py-2 has-[>svg]:px-3',
    sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-sm',
    lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
    icon: ' h-9 w-9 rounded-full',
  },
};
function Button({
  children,
  className = '',
  asChild,
  variant = 'default',
  size = 'default',
  ...props
}) {
  const baseClass =
    'inline-flex items-center  text-base font-medium gap-1 justify-center rounded-lg cursor-pointer whitespace-nowrap shadow-md focus:outline-primary ';
  const variantsClass = variants.variant[variant];
  const sizeClass = variants.size[size];
  const mergeClass = cn(baseClass, variantsClass, sizeClass, className);

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      className: cn(mergeClass, children.props.className),
    });
  }

  return (
    <button className={mergeClass} {...props}>
      {children}
    </button>
  );
}

export { Button };
