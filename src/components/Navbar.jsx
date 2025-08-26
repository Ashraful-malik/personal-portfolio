'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import ThemeSwitcher from './ThemeSwitcher';
import { cn } from '@/utility/cn';
import Image from 'next/image';

function Navbar() {
  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'Project', href: '/#projects' },
    { name: 'Blog', href: '/blogs' },
  ];

  const [hover, setHover] = useState(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      animate={{
        width: scrolled ? '90%' : '100%',
        y: scrolled ? 10 : 0,
        borderWidth: scrolled ? '1px' : '0px',
      }}
      className={cn(
        `fixed inset-x-0 z-20 mx-auto mt-1 flex max-w-5xl items-center justify-between rounded-full px-4 py-2 transition-colors duration-300`,
        scrolled ? 'border-border bg-bg-subtle border' : 'border-transparent bg-transparent',
      )}
      onMouseLeave={() => setHover(null)}
    >
      {/* logo */}
      <div>
        <Link href="/">
          <Image
            src="/image/ashraful.png"
            width={200}
            height={200}
            className="h-10 w-10"
            alt="logo"
          />
        </Link>
        {/* <div className="h-9 w-9 rounded-full bg-black" /> */}
      </div>

      {/* desktop links */}
      <div className="hidden flex-wrap gap-10 md:flex">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            onMouseEnter={() => setHover(idx)}
            className="group relative cursor-pointer rounded-full px-4 py-2 text-base font-medium"
          >
            <span className="group-hover:text-text-inverse relative">{link.name}</span>
            {hover === idx && (
              <motion.div
                layoutId="hover-element"
                className="bg-bg-inverse absolute inset-0 -z-[1] rounded-xl"
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* theme + mobile toggle */}
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <button
          className="ring-brand-primary rounded-lg p-2 focus:ring-1 focus:outline-none md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-bg-default border-border absolute top-15 right-4 w-56 rounded-xl border shadow-lg md:hidden"
        >
          <div className="flex flex-col items-start gap-3 p-4">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:bg-bg-subtle w-full rounded-lg px-3 py-2 text-left text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-border w-full border-t pt-2">
              <ThemeSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
