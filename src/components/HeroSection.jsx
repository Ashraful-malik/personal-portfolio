'use client';
import React, { useEffect, useRef } from 'react';
import { motion, stagger, animate } from 'motion/react';
import Navbar from './Navbar';
import Container from './Container';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';

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
    <main className="hero-grid relative min-h-screen w-full" id="home">
      {/* background circles radius */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(ellipse,rgba(232,80,10,.07) 0%,transparent 70%)' }}
      ></div>

      {/* <Navbar /> */}
      <Container>
        <div className="grid w-full items-center gap-16 px-6 py-24 md:grid-cols-2">
          {/* left */}
          <div>
            <div className="reveal mb-6 flex items-center gap-2">
              <div className="bg-brand-primary h-1.5 w-1.5 rounded-full"></div>
              <span className="snum">HI, I'M ASHRAFUL MALIK</span>
            </div>

            <h1
              className="reveal d1 font-syne mb-6 text-white"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 1.05,
              }}
            >
              Full-Stack
              <br />
              <span className="text-brand-primary">Developer</span>
            </h1>
            <p className="reveal d2 text-text-light mb-10 max-w-md text-base leading-relaxed font-[300]">
              A passionate fresher who loves turning ideas into real, working products — clean code,
              thoughtful UI, from front to back.
            </p>

            <div className="reveal d3 mb-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="btn-fill border-brand-primary bg-brand-primary flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-white"
              >
                <span>See My Projects</span>
                <ArrowRight width={14} height={14} strokeWidth={2} />
              </a>
              <a
                href="#resume"
                className="btn-ghost border-border text-light flex items-center gap-2 rounded-full border px-6 py-3 text-sm"
              >
                <ArrowDown width={14} height={14} strokeWidth={2} />
                Download CV
              </a>
            </div>
          </div>

          {/* right */}
          <div className="reveal d2 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="border-border flex h-80 w-64 items-center justify-center overflow-hidden rounded-2xl border md:h-96 md:w-72"
                style="background: linear-gradient(145deg, #151515, #111)"
              >
                <div className="text-center">
                  <div className="bg-muted border-border mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border">
                    <span
                      style='
                      font-family: "Syne", sans-serif;
                      font-weight: 700;
                      font-size: 1.5rem;
                      color: #a0a0a0;
                    '
                    >
                      AM
                    </span>
                  </div>
                  <span className="text-subtle text-xs tracking-wider">ashrafulmalik.online</span>
                </div>
                <div
                  className="absolute top-0 right-0 h-24 w-24 rounded-bl-full opacity-10"
                  style="background: #e8500a"
                ></div>
              </div>
              {/* < Badge: open to work */}
              <div className="bg-surface border-border absolute -bottom-4 -left-6 flex items-center gap-2 rounded-xl border px-4 py-3 shadow-xl">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-light text-xs">Open to opportunities</span>
              </div>
              {/* Badge: projects count  */}
              <div
                className="absolute -top-4 -right-4 rounded-xl px-4 py-3 text-center shadow-xl"
                style="background: #e8500a"
              >
                <div
                  style='
                  font-family: "Syne", sans-serif;
                  font-weight: 700;
                  font-size: 1.25rem;
                  color: #fff;
                '
                >
                  3
                </div>
                <div
                  style="
                  font-size: 10px;
                  color: rgba(255, 255, 255, 0.7);
                  letter-spacing: 0.1em;
                  text-transform: uppercase;
                "
                >
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div classNameName="flex min-h-screen w-full items-center justify-center">
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
        </div> */}
      </Container>
      {/* project navigation */}
      <div className="text-text-secondary absolute bottom-4 left-1/2 flex -translate-x-1/2 animate-bounce items-center gap-2">
        <Link href="/#projects" className="text-sm">
          View My Projects
        </Link>
      </div>
    </main>
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
