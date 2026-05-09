'use client';
import React from 'react';

function Footer() {
  return (
    <footer className="border-border border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-3">
          <div className="bg-accent font-syne flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white">
            AM
          </div>
          <span className="text-subtle text-xs font-light">© 2026 Ashraful Malik</span>
        </div>
        <span className="text-subtle text-xs font-light">Full-Stack Developer · Open to work</span>
      </div>
    </footer>
  );
}

export default Footer;
