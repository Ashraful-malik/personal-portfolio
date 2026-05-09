'use client';
import React from 'react';

function TextScroll() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'REST APIs',
    'Git & GitHub',
    'HTML & CSS',
  ];
  return (
    <div className="border-border bg-surface relative z-10 overflow-hidden border-y py-4">
      <div className="marquee-track">
        <div className="flex items-center gap-12 px-6 whitespace-nowrap">
          {skills.map((skill) => (
            <React.Fragment key={skill}>
              <span className="text-text-subtle text-xs tracking-[.15em] uppercase">{skill}</span>
              <span className="text-brand-primary text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextScroll;
