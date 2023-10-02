'use client';

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import About from '@/components/About';
import ExperienceComponent from '@/components/Experience';
import Projects from '@/components/Projects';
import EducationComponent from '@/components/Education';
// import CloserComponent from '@/components/Closer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const [primaryPickerColor, setPrimaryPickerColor] = useState('#B842DC');
  const [secondaryPickerColor, setSecondaryPickerColor] = useState('#14B8A6');
  const [hoverState1, setHoverState1] = useState(false);
  const [hoverState2, setHoverState2] = useState(false);
  const [hoverState3, setHoverState3] = useState(false);
  const [hoverState4, setHoverState4] = useState(false);
  const [navHoverState, setNavHoverState] = useState<boolean[]>([false, false, false, false]);
  const [workProjectHoverStates, setWorkProjectHoverStates] = useState<boolean[]>([]);
  const [personalProjectHoverStates, setPersonalProjectHoverStates] = useState<boolean[]>([]);
  const [experienceHoverStates, setExperienceHoverStates] = useState<boolean[]>([]);
  const [educationHoverStates, setEducationHoverStates] = useState<boolean[]>([]);
  const [hoveredLink, setHoveredLink] = useState<number>(0);

  return (
    <div
      className={`${poppins.className} mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20 lg:py-0`}
    >
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Header
          hoverState4={hoverState4}
          setHoverState4={setHoverState4}
          navHoverState={navHoverState}
          setNavHoverState={setNavHoverState}
          primaryPickerColor={primaryPickerColor}
          setPrimaryPickerColor={setPrimaryPickerColor}
          secondaryPickerColor={secondaryPickerColor}
          setSecondaryPickerColor={setSecondaryPickerColor}
          hoverState1={hoverState1}
          setHoverState1={setHoverState1}
          hoverState2={hoverState2}
          setHoverState2={setHoverState2}
          hoverState3={hoverState3}
          setHoverState3={setHoverState3}
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
        />
        <main className={`lg:w-1/2 pb-8`}>
          <About 
            primaryPickerColor={primaryPickerColor}
            secondaryPickerColor={secondaryPickerColor}/>
          <Projects
            primaryPickerColor={primaryPickerColor}
            secondaryPickerColor={secondaryPickerColor}
            workProjectHoverStates={workProjectHoverStates}
            setWorkProjectHoverStates={setWorkProjectHoverStates}
            personalProjectHoverStates={personalProjectHoverStates}
            setPersonalProjectHoverStates={setPersonalProjectHoverStates}
          />
          <ExperienceComponent
            primaryPickerColor={primaryPickerColor}
            secondaryPickerColor={secondaryPickerColor}
            experienceHoverStates={experienceHoverStates}
            setExperienceHoverStates={setExperienceHoverStates}
          />
          <EducationComponent
            primaryPickerColor={primaryPickerColor}
            secondaryPickerColor={secondaryPickerColor}
            educationHoverStates={educationHoverStates}
            setEducationHoverStates={setEducationHoverStates}
          />
          {/* <CloserComponent 
            primaryPickerColor={primaryPickerColor}
            secondaryPickerColor={secondaryPickerColor}
            hoverState4={hoverState4}
            setHoverState4={setHoverState4}
          /> */}
        </main>
      </div>
    </div>
  );
}
