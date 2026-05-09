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
    <>
      <Navbar />
      <main className="hero-grid relative min-h-screen w-full" id="home">
        {/* background circles radius */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(ellipse,rgba(232,80,10,.07) 0%,transparent 70%)' }}
        ></div>

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
                A passionate fresher who loves turning ideas into real, working products — clean
                code, thoughtful UI, from front to back.
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
              <div className="reveal d4 flex items-center gap-4">
                <Link
                  href="https://github.com/Ashraful-malik"
                  target="_blank"
                  className="text-text-subtle text-xs tracking-widest uppercase transition-colors hover:text-white"
                >
                  GitHub
                </Link>
                <span className="bg-border h-3 w-px"></span>
                <Link
                  href="https://www.linkedin.com/in/ashraful-malik/"
                  target="_blank"
                  className="text-text-subtle text-xs tracking-widest uppercase transition-colors hover:text-white"
                >
                  LinkedIn
                </Link>
                <span className="bg-border h-3 w-px"></span>
                <Link
                  href="https://x.com/ashraful__malik"
                  target="_blank"
                  className="text-text-subtle text-xs tracking-widest uppercase transition-colors hover:text-white"
                >
                  X
                </Link>
              </div>
            </div>

            {/* right */}

            {/* bottom scroll */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
              <span className="text-text-subtle text-[10px] tracking-[.2em] uppercase">Scroll</span>
              <div className="h-10 w-px bg-gradient-to-b from-[#666] to-transparent"></div>
            </div>
          </div>
        </Container>
      </main>
    </>
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
