'use client';
import { cn } from '@/utility/cn';
import { icons } from '@/utility/icons';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
        <h1 className="text-text-primary mb-2 text-2xl font-semibold">{title}</h1>
        <p className="text-text-secondary text-lg/snug">{description}</p>
        {/* tags */}
        <div className="flex pt-5">
          <TechStack stackNames={stack} />
        </div>
        {/* action button */}
        <div className="pt-6">
          <Button asChild variant="primary" className="group">
            <Link href={link} target="_blank">
              Live preview
              <span className="group-hover:translate-x-2 group-hover:duration-300 group-hover:ease-in-out">
                <ArrowUpRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// TechStack component
function TechStack({ stackNames = [] }) {
  return (
    <div className="flex items-center">
      {stackNames.map((stack, index) => (
        <div
          key={index}
          className={cn(
            'border-border bg-bg-default flex cursor-pointer items-center gap-1 rounded-full border px-2 py-2',
            index !== 0 ? '-ml-3' : '',
          )}
          title={stack}
        >
          <Image src={icons[stack]} width={20} height={20} alt={stack} className="h-5 w-5" />
          <p className="text-text-secondary hidden text-sm capitalize">{stack}</p>
        </div>
      ))}
    </div>
  );
}
export default ProjectCard;
