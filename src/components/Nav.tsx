'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    {
      id: 'about',
      name: 'About',
      link: '#about',
    },
    {
      id: 'projects',
      name: 'Projects',
      link: '#projects',
    },
    {
      id: 'experience',
      name: 'Experience',
      link: '#experience',
    },
    {
      id: 'education',
      name: 'Education',
      link: '#education',
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    // Set the first section as active by default
    setActiveLink(sections[0].id);

    window.onscroll = () => {
      let current: string | null = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      // If no section id is at the top, set the first section id as active
      if (!current && sections.length > 0) {
        current = sections[0].getAttribute('id');
      }

      // Ensure current is a string, using the empty string as a default value if null
      setActiveLink(current || '');
    };
  }, []);

  const springVariants = {
    open: {
      scale: 1.2,
    },
    closed: {
      scale: 1,
    },
  };

  return (
    <div className='hidden md:block'>
      <ul className='flex flex-col items-start gap-2 text-xl text-slate-400'>
        <AnimatePresence>
          {navLinks.map(({ id, link, name }) => (
            <motion.li
              key={name}
              initial='closed'
              animate={activeLink === id ? 'open' : 'closed'}
              whileHover='open' // Apply spring bounce on hover
              variants={springVariants}
              transition={{ type: 'spring', bounce: 0.7, duration: 1 }}
              className={`hover:text-teal-500 ${
                activeLink === id ? 'text-teal-500' : 'text-[#B842DC]'
              }`}
            >
              <Link href={link}>{name}</Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Nav;
