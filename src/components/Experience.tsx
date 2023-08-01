'use client';
import { Experience } from '@/data/data';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';

interface ExperienceProps {
  primaryPickerColor: string;
  secondaryPickerColor: string;
  experienceHoverStates: boolean[]; // An array of boolean hover states for each project
  setExperienceHoverStates: React.Dispatch<
    React.SetStateAction<boolean[]> // Function to update the hover states for projects
  >;
}

const ExperienceComponent: React.FC<ExperienceProps> = ({
  primaryPickerColor,
  secondaryPickerColor,
  experienceHoverStates,
  setExperienceHoverStates,
}) => {
  const data = Experience();

  // Handle mouse enter and mouse leave events for links
  const handleLinkMouseEnter = (index: number) => {
    const updatedExperienceHoverStates = [...experienceHoverStates];
    updatedExperienceHoverStates[index] = true;
    setExperienceHoverStates(updatedExperienceHoverStates);
  };

  const handleLinkMouseLeave = (index: number) => {
    const updatedExperienceHoverStates = [...experienceHoverStates];
    updatedExperienceHoverStates[index] = false;
    setExperienceHoverStates(updatedExperienceHoverStates);
  };

  return (
    <section className='' id='experience'>
      <h2
        style={{
          color: secondaryPickerColor,
        }}
        className='p-4 pb-3 text-center text-2xl md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8'
      >
        Experience
      </h2>
      <div>
        {data.map((dataItem, index) => (
          <Tilt
            className='my-8 md:mx-12 lg:m-0'
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor='#e3e3e3'
            glarePosition='top'
            glareBorderRadius='1.5rem'
            scale={1.0}
            key={dataItem.id}
          >
            <div className='relative flex flex-col rounded-3xl py-8 sm:grid-cols-6 md:mb-10  md:grid md:p-12 md:backdrop-blur-sm md:backdrop-filter'>
              <span className='flex justify-center pb-2 align-middle md:col-span-2 md:justify-start lg:col-span-2 lg:justify-start'>
                {dataItem.year1} &#8212; {dataItem.year2}
              </span>
              <div className='flex flex-col justify-between px-4 text-center md:col-span-4 md:px-0 md:pl-2 md:text-left lg:col-span-4'>
                <div>
                  <p>
                    <strong>{dataItem.title}</strong>
                  </p>
                  <div
                    onMouseEnter={() => handleLinkMouseEnter(index)}
                    onMouseLeave={() => handleLinkMouseLeave(index)}
                  >
                    <Link
                      href={dataItem.href}
                      target='_blank'
                      style={{
                        color: experienceHoverStates[index]
                          ? secondaryPickerColor
                          : '#fff',
                        transition: 'color 0.3s ease',
                      }}
                      className={`after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big`}
                    >
                      {dataItem.company}
                    </Link>
                  </div>
                  <p className='mb-6 mt-4 text-white/70'>
                    {dataItem.description}
                  </p>
                </div>
                <ul className='flex flex-wrap justify-center gap-2 align-middle md:justify-start'>
                  {dataItem.listItems.map((item, index) => (
                    <li
                      key={index}
                      style={{ backgroundColor: primaryPickerColor }}
                      className="after:content[''] relative mb-1 rounded-3xl border-0 border-t border-white border-opacity-60 px-4 py-1  shadow-big after:absolute after:-inset-0 after:z-20 after:rounded-3xl after:bg-gradient-to-b after:from-black/10 after:to-black/40 lg:px-3 lg:py-0.5"
                    >
                      <span className='relative z-40 text-sm leading-6'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
