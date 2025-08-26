'use client';
import React from 'react';
import Container from './Container';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'X',
    href: 'https://twitter.com/ashraful__malik',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/uiwebbyte/',
  },

  { name: 'Linkedin', href: 'https://www.linkedin.com/in/ashraful-malik/' },
  { name: 'Github', href: 'https://github.com/Ashraful-malik' },
];
function Footer() {
  return (
    <div>
      <Container>
        <footer className="flex w-full flex-col items-center justify-center px-4 md:px-0">
          <div className="border-border flex w-full items-center justify-between border-t py-8">
            <Link href="/">
              <Image
                src="/image/ashraful.png"
                width={80}
                height={80}
                className="h-10 w-10"
                alt="logo"
              />
            </Link>

            <LinkHoverAnimation />
          </div>
        </footer>
      </Container>
    </div>
  );
}

function LinkHoverAnimation() {
  return (
    <div className="flex gap-4 font-medium">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          className="text-md relative inline-block h-6 overflow-hidden capitalize"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          variants={{
            initial: {},
            hovered: {},
          }}
        >
          <motion.span
            className="block"
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {link.name}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 block"
            variants={{
              initial: { y: '100%' },
              hovered: { y: '0%' },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {link.name}
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
}

export default Footer;
