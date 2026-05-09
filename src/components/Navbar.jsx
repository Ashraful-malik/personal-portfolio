'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 right-0 left-0 z-50 border-b border-[rgba(30,30,30,0.5)] bg-[rgba(10,10,10,0.84)] backdrop-blur transition-all duration-300"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-accent flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white">
            AM
          </div>
          <span className="hidden text-sm font-semibold tracking-[0.04em] text-white sm:block">
            Ashraful Malik
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link text-text-light text-sm transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="btn-fill hidden items-center rounded-full border border-white/20 px-4 py-2 text-sm text-white sm:flex"
          >
            <span>Let's talk →</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="p-1 text-gray-300 hover:text-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-gray-800 bg-[rgba(10,10,10,0.96)] px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
