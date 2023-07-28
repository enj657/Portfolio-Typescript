'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Education } from '@/data/data';
import Link from 'next/link';

export default function EducationComponent() {
  const data = Education();

  return (
    <section className='' id='education'>
      <h2 className='p-4 pb-3 text-center text-2xl text-teal-500 md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8'>
        Education
      </h2>
      <div>
        {data.map((dataItem) => (
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
              <div className='flex flex-col px-4 text-center md:col-span-4 md:px-0 md:pl-2 md:text-left lg:col-span-4'>
                <p>
                  <strong>{dataItem.title}</strong>
                </p>
                <Link
                  href={dataItem.href}
                  target='_blank'
                  className="after:content[''] mb-4 text-white/70 after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big hover:text-teal-500"
                >
                  {dataItem.company}
                </Link>
                <p className='text-white/70'>{dataItem.degree}</p>
                <ul className='flex flex-wrap gap-2'>
                  {dataItem.listItems.map((item, index) => (
                    <li
                      key={index}
                      className='rounded-3xl bg-gradient-to-b from-teal-900 to-teal-700  px-4 py-1'
                    >
                      {item}
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
}
