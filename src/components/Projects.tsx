'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { WorkProjects, PersonalProjects } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const dataWorkProj = WorkProjects();
  const dataPersonalProj = PersonalProjects();

  return (
    <section className='p-4 md:p-0' id='projects'>
      <h2 className='pb-3 text-2xl text-teal-500 md:p-8'>Work Projects</h2>
      {dataWorkProj.map((dataItem) => (
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor='#e3e3e3'
          glarePosition='top'
          glareBorderRadius='1.5rem'
          scale={1.05}
          key={dataItem.id}
        >
          <div className='relative grid rounded-3xl py-8 sm:grid-cols-6 md:mb-10 md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
            <div className='col-span-2 my-auto'>
              <Image
                className='w-5/6'
                width={100}
                height={100}
                src={dataItem.src}
                alt=''
              />
            </div>
            <div className='col-span-4'>
              <p>
                <Link
                  className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 md:after:rounded-3xl md:after:border-0 md:after:border-t md:after:border-white md:after:border-opacity-30 md:after:bg-white md:after:bg-opacity-5 md:after:shadow-big"
                  href={dataItem.href}
                  target='_blank'
                >
                  {dataItem.website}
                </Link>
              </p>
              <p className='mb-4'>{dataItem.publishDate}</p>
              <ul className='flex flex-wrap gap-2'>
                {dataItem.listItems.map((item, index) => (
                  <li
                    key={index}
                    className='mb-1 rounded-3xl border-0 border-t border-white border-opacity-60 bg-gradient-to-b from-[#B842DC]/80 to-[#7c2c95]/70 px-4 py-1 text-sm leading-6'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Tilt>
      ))}

      <h2 className='pb-3 text-2xl text-teal-500 md:p-8'>Personal Projects</h2>
      {dataPersonalProj.map((dataItem) => (
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor='#e3e3e3'
          glarePosition='top'
          glareBorderRadius='1.5rem'
          scale={1.05}
          key={dataItem.id}
        >
          <div className='relative grid rounded-3xl py-8 sm:grid-cols-6 md:mb-10 md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
            <div className='col-span-2 my-auto'>
              <Image
                className='w-5/6'
                width={100}
                height={100}
                src={dataItem.src}
                alt=''
              />
            </div>
            <div className='col-span-4'>
              <p>
                <Link
                  className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 md:after:rounded-3xl md:after:border-0 md:after:border-t md:after:border-white md:after:border-opacity-30 md:after:bg-white md:after:bg-opacity-5"
                  href={dataItem.href}
                  target='_blank'
                >
                  {dataItem.website}
                </Link>
              </p>
              <p className='mb-4'>{dataItem.publishDate}</p>
              <ul className='flex flex-wrap gap-2'>
                {dataItem.listItems.map((item, index) => (
                  <li
                    key={index}
                    className='mb-1 rounded-3xl border-0 border-t border-white border-opacity-60 bg-gradient-to-b from-[#B842DC]/80 to-[#7c2c95]/70 px-4 py-1 text-sm leading-6'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Tilt>
      ))}
    </section>
  );
}
