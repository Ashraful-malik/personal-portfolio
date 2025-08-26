'use client';
import React from 'react';
import { motion } from 'motion/react';
import Container from './Container';

const email = 'ashraful.inbox@gmail.com';
function Contact() {
  return (
    <Container>
      <motion.div
        className="relative flex min-h-[70vh] w-full flex-col items-center gap-12 md:min-h-[90vh]"
        initial={{ opacity: 0, y: 80 }} // start faded and slightly below
        whileInView={{ opacity: 1, y: 0 }} // fade in and move up when visible
        transition={{ duration: 0.3, ease: 'easeOut' }} // smooth ease
        viewport={{ amount: 0.4 }} // trigger only once, when 30% is visible
      >
        {/* contact background */}
        <div className="">
          <h1 className="text-text-primary text-7xl md:text-9xl">CONTACT</h1>
        </div>
        <div className="">
          <p className="pb-2 text-center text-lg">Say Hi, Lets connect</p>
          <input
            type="text"
            name="email"
            aria-label="email"
            className="focus:outline-primary border-border rounded-xl border px-4 py-4 text-3xl shadow-sm md:px-6"
            defaultValue={email}
            readOnly
          />
        </div>
      </motion.div>
    </Container>
  );
}

export default Contact;
