'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';
import Github from './GithubLogo';
import LinkedIn from './LinkedinLogo';
import Resume from './ResumeLogo';
import Logo3 from './Logo3';
import { Adjective } from '@/data/data';
import ColorPicker from './ColorPicker';

interface HeaderProps {
  hoverState4: boolean;
  setHoverState4: React.Dispatch<React.SetStateAction<boolean>>;
  navHoverState: boolean[];
  setNavHoverState: React.Dispatch<React.SetStateAction<boolean[]>>;
  primaryPickerColor: string;
  setPrimaryPickerColor: React.Dispatch<React.SetStateAction<string>>;
  secondaryPickerColor: string;
  setSecondaryPickerColor: React.Dispatch<React.SetStateAction<string>>;
  hoverState1: boolean;
  setHoverState1: React.Dispatch<React.SetStateAction<boolean>>;
  hoverState2: boolean;
  setHoverState2: React.Dispatch<React.SetStateAction<boolean>>;
  hoverState3: boolean;
  setHoverState3: React.Dispatch<React.SetStateAction<boolean>>;
  hoveredLink: number;
  setHoveredLink: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({
  hoverState4,
  setHoverState4,
  navHoverState,
  setNavHoverState,
  primaryPickerColor,
  setPrimaryPickerColor,
  secondaryPickerColor,
  setSecondaryPickerColor,
  hoverState1,
  setHoverState1,
  hoverState2,
  setHoverState2,
  hoverState3,
  setHoverState3,
  hoveredLink,
  setHoveredLink,
}) => {
  const data = Adjective();

  const svgVariants = {
    hidden: {
      opacity: 1,
      scale: .8,
      stroke: primaryPickerColor,
    },
    visible: {
      opacity: 1,
      scale: 1,
      stroke: primaryPickerColor,
    },
    hover: {
      opacity: 1,
      scale: 1.2,
      stroke: hoverState4 ? secondaryPickerColor : primaryPickerColor,
    },
  };

  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:p-12'>
      <div className='flex flex-1 flex-col justify-between p-4 md:px-12 md:pt-8 lg:p-0'>
        <div>
          <div className={`mb-4 lg:pt-8`}>
            <h1 className='relative m-auto w-48 md:m-0 md:w-80'>
              <Link href='/'>
                <Logo3
                  hoverState4={hoverState4}
                  setHoverState4={setHoverState4}
                  primaryPickerColor={primaryPickerColor}
                  secondaryPickerColor={secondaryPickerColor}
                />
              </Link>
            </h1>
          </div>
          <div className='w-full md:w-1/2 lg:w-full'>
            <h2
              style={{ color: secondaryPickerColor }}
              className={`pb-3 text-center text-2xl md:text-left`}
            >
              Web Developer
            </h2>
            <ul className='flex flex-wrap justify-center gap-x-3 text-sm md:justify-start'>
              {data.map((dataItem) => (
                <li key={dataItem.id}>
                  {dataItem.adjective}
                  <span className='pl-2 text-base'>{dataItem.emoji}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:my-12'>
            <Nav
              navHoverState={navHoverState}
              setNavHoverState={setNavHoverState}
              primaryPickerColor={primaryPickerColor}
              setPrimaryPickerColor={setPrimaryPickerColor}
              secondaryPickerColor={secondaryPickerColor}
              setSecondaryPickerColor={setSecondaryPickerColor}
              hoveredLink={hoveredLink}
              setHoveredLink={setHoveredLink}
            />
          </div>
        </div>
        {/* Color Picker */}
        <div>
          <ColorPicker
            primaryPickerColor={primaryPickerColor}
            setPrimaryPickerColor={setPrimaryPickerColor}
            secondaryPickerColor={secondaryPickerColor}
            setSecondaryPickerColor={setSecondaryPickerColor}
          />
          <ul className='order-3 my-8 flex flex-row justify-center gap-[1.9rem] md:my-0 md:justify-start lg:order-4 lg:pb-8'>
            <motion.li
              initial='hidden'
              animate='visible'
              variants={svgVariants}
              transition={{ type: 'spring', duration: 3, bounce: 0.8 }}
              whileHover='hover'
            >
              <Link
                href='https://github.com/enj657'
                target='_blank'
                style={{
                  color: hoverState1
                    ? secondaryPickerColor
                    : primaryPickerColor,
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={() => setHoverState1(true)}
                onMouseOut={() => setHoverState1(false)}
                className=''
              >
                <span className='sr-only'>Github</span>
                <Github />
              </Link>
            </motion.li>
            <motion.li
              initial='hidden'
              animate='visible'
              variants={svgVariants}
              transition={{ type: 'spring', duration: 3, bounce: 0.8 }}
              whileHover='hover'
            >
              <Link
                href='https://www.linkedin.com/in/enj657/'
                target='_blank'
                style={{
                  color: hoverState2
                    ? secondaryPickerColor
                    : primaryPickerColor,
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={() => setHoverState2(true)}
                onMouseOut={() => setHoverState2(false)}
                className=''
              >
                <span className='sr-only'>LinkedIn</span>
                <LinkedIn />
              </Link>
            </motion.li>
            <motion.li
              initial='hidden'
              animate='visible'
              variants={svgVariants}
              transition={{ type: 'spring', duration: 3, bounce: 0.8 }}
              whileHover='hover'
            >
              <a
                href='/March_2025_Resume.pdf'
                download='March_2025_Resume'
                style={{
                  color: hoverState3
                    ? secondaryPickerColor
                    : primaryPickerColor,
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={() => setHoverState3(true)}
                onMouseOut={() => setHoverState3(false)}
                className=''
              >
                <span className='sr-only'>Resume</span>
                <Resume />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
