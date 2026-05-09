'use client';
import React, { useEffect, useRef } from 'react';
import Container from '../Container';
import ProjectCard from './ProjectCard';
import { motion, useAnimation, useInView } from 'framer-motion';

const projectDetails = [
  {
    name: 'khauspot',
    description:
      'KhauSpot helps you explore authentic neighborhood food spots, check in on the go, and spotlight underrated local vendors.',
    stack: ['nextjs', 'tailwind', 'mongodb', 'nodejs', 'clerk'],
    image: '/image/projectImages/khauspot-website.png',
    link: 'https://www.khauspot.vercel.app/',
  },
  {
    name: 'Journeyskill',
    description:
      'Create, track, and complete coding challenges. Stay accountable and grow your skills, one streak at a time. ',
    stack: ['nextjs', 'nodejs', 'tailwind', 'mongodb', 'clerk'],
    image: '/image/projectImages/journeyskill-website.png',
    link: 'https://journeyskill.vercel.app/',
  },
  {
    name: 'Tweaktail',
    description:
      'Build Tailwind components visually, export production-ready code instantly. TweakTail helps developers and designers create UIs 10x faster without CSS headaches ',
    stack: ['shadcn', 'nextjs', 'tailwind'],
    image: '/image/projectImages/tweaktail.png',
    link: 'https://www.tweaktail.xyz/',
  },
];

function Projects() {
  return (
    <section className="py-32" id="projects">
      <Container>
        <div className="reveal mb-4 flex items-center gap-3">
          <div className="bg-accent h-1.5 w-1.5 rounded-full"></div>
          <span className="snum">• Projects</span>
        </div>
        <h2 className="font-syne mb-12 text-2xl text-[clamp(2rem,4vw,3.5rem)] font-bold">
          Things I've Built
        </h2>
        {projectDetails.map((project, index) => (
          <AnimatedCard key={index} index={index}>
            <ProjectCard
              title={project.name}
              description={project.description}
              stack={project.stack}
              image={project.image}
              reverse={index % 2 === 1} // Alternate the order pass true for reverse
              link={project.link}
            />
          </AnimatedCard>
        ))}
      </Container>
    </section>
  );
}

const AnimatedCard = ({ children, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '0px 0px -15% 0px' });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: 'blur(12px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        delay: index * 0.2, // optional stagger
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="p-2 md:p-0"
    >
      {children}
    </motion.div>
  );
};
export default Projects;
