'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  key: number;
  id: string;
  name: string;
  link: string;
}

interface NavProps {
  navHoverState: boolean[];
  setNavHoverState: React.Dispatch<React.SetStateAction<boolean[]>>;
  hoveredLink: number; // Change the type to 'number'
  setHoveredLink: React.Dispatch<React.SetStateAction<number>>; // Change the type to 'number'
  primaryPickerColor: string;
  setPrimaryPickerColor: React.Dispatch<React.SetStateAction<string>>;
  secondaryPickerColor: string;
  setSecondaryPickerColor: React.Dispatch<React.SetStateAction<string>>;
}

const Nav: React.FC<NavProps> = ({
  navHoverState,
  setNavHoverState,
  hoveredLink,
  setHoveredLink,
  primaryPickerColor,
  setPrimaryPickerColor,
  secondaryPickerColor,
  setSecondaryPickerColor,
}) => {
  const [activeLink, setActiveLink] = useState('');

  const navLinks: NavLink[] = [
    {
      key: 1,
      id: 'about',
      name: 'About',
      link: '#about',
    },
    {
      key: 2,
      id: 'projects',
      name: 'Projects',
      link: '#projects',
    },
    {
      key: 3,
      id: 'experience',
      name: 'Experience',
      link: '#experience',
    },
    {
      key: 4,
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
          {navLinks.map(({ key, id, link, name }) => {
            // Find the index of the current link in the navHoverState array
            const index = navLinks.findIndex((item) => item.key === key);

            return (
              <motion.li
                key={name}
                initial='closed'
                animate={activeLink === id ? 'open' : 'closed'}
                whileHover='open'
                variants={springVariants}
                transition={{ type: 'spring', bounce: 0.7, duration: 1 }}
                style={{
                  color:
                    activeLink === id
                      ? secondaryPickerColor // Use secondary color if the link is active
                      : navHoverState[index] || hoveredLink === key
                      ? secondaryPickerColor // Use secondary color if the link is hovered
                      : primaryPickerColor, // Use primary color for other cases
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={() => setHoveredLink(key)}
                onMouseLeave={() => setHoveredLink(0)}
              >
                <Link href={link}>{name}</Link>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
};
export default Nav;