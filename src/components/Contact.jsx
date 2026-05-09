'use client';
import Link from 'next/link';
import React from 'react';

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Ashraful-malik',
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ashraful-malik/',
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'https://x.com/ashraful__malik',
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="border-border relative overflow-hidden border-t py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(4rem, 16vw, 12rem)',
            color: 'rgba(255, 255, 255, 0.022)',
            whiteSpace: 'nowrap',
          }}
        >
          CONTACT
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="reveal mb-4 flex items-center justify-center gap-3">
            <div className="bg-accent h-1.5 w-1.5 rounded-full"></div>
            <span className="snum">• Contact</span>
          </div>

          <h2
            className="reveal d1 mb-4 leading-tight text-white"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            {"Let's connect &"}
            <br />
            <span style={{ color: '#e8500a' }}>work together</span>
          </h2>

          <p className="reveal d2 text-text-light mb-10 text-sm leading-relaxed font-light">
            I'm actively looking for my first developer role. Whether you have an opportunity, a
            project, or just want to say hi — my inbox is always open.
          </p>

          <div className="reveal d3">
            <a
              href="mailto:ashraful.inbox@gmail.com"
              className="group bg-surface border-border hover:border-accent/40 inline-flex items-center gap-3 rounded-2xl border px-6 py-4 text-sm font-normal text-white transition-all"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              ashraful.inbox@gmail.com
              <svg
                className="text-subtle group-hover:text-accent transition-colors"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="reveal d4 mt-12 flex items-center justify-center gap-6">
            {socialLinks.map((link, i) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className="text-text-subtle flex items-center gap-2 text-xs tracking-wider uppercase transition-colors hover:text-white"
                  target="_blank"
                >
                  {link.icon}
                  {link.name}
                </Link>

                {i < socialLinks.length - 1 && <span className="bg-border h-3 w-px"></span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
