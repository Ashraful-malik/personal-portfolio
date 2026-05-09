'use client';
import { cn } from '@/utility/cn';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function ProjectCard({ className, title, description, stack, reverse = false, image, link }) {
  return (
    <div
      className={cn(
        `mb-24 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3 ${className} ${reverse && 'ml-auto'}`,
      )}
    >
      {/* Image takes 2 parts (2/3 of width) */}
      <div
        className={cn(
          `bg-bg-subtle rounded-md p-2 md:col-span-2`,
          reverse ? 'md:order-2' : 'md:order-1',
        )}
      >
        <Image
          src={image}
          alt="Project screenshot"
          width={900}
          height={600}
          className="h-auto w-full rounded-md object-cover"
        />
      </div>

      {/* Text takes 1 part (1/3 of width) */}
      <div className={cn('md:col-span-1', reverse ? 'md:order-1' : 'md:order-2')}>
        {/* title,description */}
        <h1 className="text-text-primary font-syne mb-2 text-4xl font-bold">{title}</h1>
        <p className="text-text-light">{description}</p>
        {/* tags */}
        <div className="flex pt-5">
          <TechStack stackNames={stack} />
        </div>
        {/* action button */}
        <div className="pt-6">
          <Link
            href={link}
            target="_blank"
            className="btn-fill border-brand-primary bg-brand-primary inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-white"
          >
            <span>See My Projects</span>
            <ArrowRight width={14} height={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// TechStack component
function TechStack({ stackNames = [] }) {
  return (
    <div className="flex items-center gap-2">
      {stackNames.map((stack, index) => (
        <div
          key={index}
          className={cn(
            'border-border/30 bg-bg-default flex cursor-pointer items-center gap-1 rounded-full border px-2 py-1',
          )}
          title={stack}
        >
          <p className="text-text-secondary font-syne text-xs capitalize">{stack}</p>
        </div>
      ))}
    </div>
  );
}
export default ProjectCard;
