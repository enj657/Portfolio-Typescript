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
          scale={1.0}
          key={dataItem.id}
        >
          <div className='relative flex flex-col rounded-3xl my-8 py-8 sm:grid-cols-6 md:mb-10 md:grid md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
            <div className='flex justify-center align-middle md:col-span-2 md:my-auto'>
              <Image
                className='w-4/6 pb-2 md:w-5/6 md:pb-0'
                width={300}
                height={300}
                src={dataItem.src}
                alt=''
              />
            </div>
            <div className='flex flex-col text-center md:col-span-4 md:text-left md:pl-2'>
              <p>
                <Link
                  className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big"
                  href={dataItem.href}
                  target='_blank'
                >
                  {dataItem.website}
                </Link>
              </p>
              <p className='mb-4'>{dataItem.publishDate}</p>
              <ul className='flex flex-wrap justify-center md:justify-start gap-2 align-middle'>
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
          scale={1.0}
          key={dataItem.id}
        >
          <div className='relative flex flex-col rounded-3xl my-8 py-8 sm:grid-cols-6 md:mb-10 md:grid md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
            <div className='flex justify-center align-middle md:col-span-2 md:my-auto'>
              <Image
                className='w-4/6 pb-2 md:w-5/6 md:pb-0'
                width={300}
                height={300}
                src={dataItem.src}
                alt=''
              />
            </div>
            <div className='flex flex-col text-center md:col-span-4 md:text-left md:pl-2'>
              <p>
                <Link
                  className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big"
                  href={dataItem.href}
                  target='_blank'
                >
                  {dataItem.website}
                </Link>
              </p>
              <p className='mb-4'>{dataItem.publishDate}</p>
              <ul className='flex flex-wrap justify-center md:justify-start gap-2 align-middle'>
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
