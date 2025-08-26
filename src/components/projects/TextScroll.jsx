'use client';
import { icons } from '@/utility/icons';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const projects = Array.from({ length: 10 }, (_, i) => ({
  name: `Projects`,
  tech: Object.keys(icons)[i % Object.keys(icons).length], // You could rotate or randomize this
}));

function TextScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  return (
    <div className="w-full overflow-hidden py-8 whitespace-nowrap" ref={containerRef}>
      <motion.div className="flex items-center gap-24" style={{ x }}>
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="font-regular flex flex-shrink-0 items-center gap-2 text-xl backdrop-opacity-55"
          >
            <span className="text-text-secondary">{project.name}</span>
            <Image
              src={icons[project.tech]}
              alt={project.tech}
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TextScroll;
