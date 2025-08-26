'use client';
import React, { useEffect, useRef } from 'react';
import Container from '../Container';
import ProjectCard from './ProjectCard';
import { motion, useAnimation, useInView } from 'framer-motion';

const projectDetails = [
  {
    name: 'Tweaktail',
    description:
      'Build Tailwind components visually, export production-ready code instantly. TweakTail helps developers and designers create UIs 10x faster without CSS headaches ',
    stack: ['shadcn', 'next', 'tailwind'],
    image: '/image/projectImages/tweaktail.png',
    link: 'https://www.tweaktail.xyz/',
  },

  {
    name: 'Journeyskill',
    description:
      'Create, track, and complete coding challenges. Stay accountable and grow your skills, one streak at a time. ',
    stack: ['next', 'nodejs', 'tailwind', 'mongodb'],
    image: '/image/projectImages/journeyskill.png',
    link: 'https://www.journeyskill.online/',
  },
];

function Projects() {
  return (
    <section className="py-20" id="projects">
      <Container>
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
