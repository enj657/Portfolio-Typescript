'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Education } from '@/data/data';
import Link from 'next/link';

export default function EducationComponent() {
  const data = Education();

  return (
    <section className='p-4 md:p-0' id='education'>
      <h2 className='pb-3 text-2xl text-teal-500 md:p-8'>Education</h2>
      <div>
        {data.map((dataItem) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor='#e3e3e3'
            glarePosition='top'
            glareBorderRadius='1.5rem'
            scale={1.05}
            key={dataItem.id}
          >
            <div className='relative grid my-8 rounded-3xl p-8 sm:grid-cols-6 md:mb-10 md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
              <span className='col-span-2'>
                {dataItem.year1} &#8212; {dataItem.year2}
              </span>
              <div className='col-span-4'>
                <p>
                  <strong>{dataItem.title}</strong>
                </p>
                <Link
                  href={dataItem.href}
                  target='_blank'
                  className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big"
                >
                  {dataItem.company}
                </Link>
                <p className='text-sm text-slate-300'>{dataItem.degree}</p>
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
