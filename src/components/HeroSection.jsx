'use client';
import React, { useEffect, useRef } from 'react';
import { motion, stagger, animate } from 'motion/react';
import Navbar from './Navbar';
import Container from './Container';
import Link from 'next/link';

function HeroSection() {
  const intro = 'Hi, I’m Ashraful Malik';
  const heading = 'Full-Stack Developer & UI Designer';
  const subHeading = 'I build web experiences that blend functionality with thoughtful design.';
  const h1Ref = useRef();
  useEffect(() => {
    async function runAnimation() {
      await document.fonts.ready;
      // Animate h1 words with stagger
      if (h1Ref.current) {
        const words = splitTextToWords(h1Ref.current);
        animate(
          words,
          { opacity: [0, 1], y: [20, 0], filter: ['blur(4px)', 'blur(0px)'] },
          {
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: stagger(0.03),
          },
        );
      } else {
        return;
      }
    }

    runAnimation();

    document.fonts.ready.then(() => {
      if (!h1Ref.current) return;
      const words = splitTextToWords(h1Ref.current);

      animate(
        words,
        { opacity: [0, 1], y: [20, 0] },
        {
          type: 'spring',
          stiffness: 200,
          damping: 20,
          delay: stagger(0.06),
        },
      );
    });
  }, []);

  return (
    <Container>
      <main className="relative min-h-screen w-full" id="home">
        <Navbar />
        <div className="flex min-h-screen w-full items-center justify-center">
          <div className="text-text-primary max-w-2xl p-4 md:p-0">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            >
              <span>{intro}</span>
            </motion.div>
            <h1
              ref={h1Ref}
              className="text-brand-primary ml-2 text-center text-4xl font-bold md:text-6xl"
            >
              {heading}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }} // Delay based on h1 animation duration
              className="m-auto max-w-md pt-4 text-center"
            >
              {subHeading}
            </motion.p>
          </div>
        </div>

        {/* project navigation */}
        <div className="text-text-secondary absolute bottom-4 left-1/2 flex -translate-x-1/2 animate-bounce items-center gap-2">
          <Link href="/#projects" className="text-sm">
            View My Projects
          </Link>
        </div>
      </main>
    </Container>
  );
}

//View My Projects

function splitTextToWords(element) {
  const words = element.textContent.trim().split(/\s+/);
  element.innerHTML = '';
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.className = 'word';
    element.appendChild(span);
    if (i < words.length - 1) element.append(' ');
  });
  return element.querySelectorAll('.word');
}
export default HeroSection;
