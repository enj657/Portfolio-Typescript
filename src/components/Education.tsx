'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Education } from '@/data/data';
import Link from 'next/link';

interface EducationProps {
  primaryPickerColor: string;
  secondaryPickerColor: string;
  educationHoverStates: boolean[]; // An array of boolean hover states for each project
  setEducationHoverStates: React.Dispatch<
    React.SetStateAction<boolean[]> // Function to update the hover states for projects
  >;
}

const EducationComponent: React.FC<EducationProps> = ({
  primaryPickerColor,
  secondaryPickerColor,
  educationHoverStates,
  setEducationHoverStates,
}) => {
  const data = Education();

  // Handle mouse enter and mouse leave events for links
  const handleLinkMouseEnter = (index: number) => {
    const updatedEducationHoverStates = [...educationHoverStates];
    updatedEducationHoverStates[index] = true;
    setEducationHoverStates(updatedEducationHoverStates);
  };

  const handleLinkMouseLeave = (index: number) => {
    const updatedEducationHoverStates = [...educationHoverStates];
    updatedEducationHoverStates[index] = false;
    setEducationHoverStates(updatedEducationHoverStates);
  };

  return (
    <section id='education'>
      <h2
        style={{
          color: secondaryPickerColor,
        }}
        className={`p-4 pb-3 text-center text-2xl ${secondaryPickerColor} md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8`}
      >
        Education
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
            <div className='relative flex flex-col rounded-3xl py-8 sm:grid-cols-6 md:mb-10 md:grid md:p-12 md:backdrop-blur-sm md:backdrop-filter'>
              <span className='flex justify-center pb-2 align-middle md:col-span-2 md:justify-start lg:col-span-2 lg:justify-start'>
                {dataItem.year1} &#8212; {dataItem.year2}
              </span>
              <div className='flex flex-col px-4 text-center md:col-span-4 md:px-0 md:pl-2 md:text-left lg:col-span-4'>
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
                        color: educationHoverStates[index]
                          ? secondaryPickerColor
                          : '#fff',
                        transition: 'color 0.3s ease',
                      }}
                      className={`after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big`}
                    >
                      {dataItem.company}
                    </Link>
                  </div>
                <p className='text-white/70'>{dataItem.degree}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default EducationComponent;
