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
    <section className='' id='projects'>
      <h2 className='p-4 pb-3 text-center text-2xl text-teal-500 md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8'>
        Work Projects
      </h2>
      {dataWorkProj.map((dataItem) => (
        <Tilt
          className='my-8 md:mx-12 lg:m-0'
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor='#e3e3e3'
          glarePosition='top'
          glareBorderRadius='1.5rem'
          scale={1.0}
          gyroscope={true}
          key={dataItem.id}
        >
          <div className='relative flex flex-col rounded-3xl py-8 sm:grid-cols-6 md:mb-10  md:grid md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
            <div className='flex justify-center align-middle md:col-span-3 md:my-auto'>
              <Image
                className='w-4/6 rounded-lg pb-2 md:w-5/6 md:pb-0'
                width={300}
                height={300}
                src={dataItem.src}
                alt=''
              />
            </div>
            <div className='flex flex-col justify-between text-center md:col-span-3 md:pl-2 md:text-left'>
              <div>
                <p>
                  <Link
                    className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big hover:text-teal-500"
                    href={dataItem.href}
                    target='_blank'
                  >
                    {dataItem.website}
                  </Link>
                </p>
                <p className='mb-4 text-white/70'>{dataItem.publishDate}</p>
              </div>
              <ul className='flex flex-wrap  justify-center gap-2 align-middle md:justify-start'>
                {dataItem.listItems.map((item, index) => (
                  <li
                    key={index}
                    className='mb-1 rounded-3xl border-0 border-t border-white border-opacity-60 bg-gradient-to-b from-[#B842DC]/70 to-[#7c2c95]/60 px-4 py-1 text-sm leading-6 shadow-big lg:px-3 lg:py-0.5'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Tilt>
      ))}

      <h2 className='p-4 pb-3 text-center text-2xl text-teal-500 md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8'>
        Personal Projects
      </h2>
      {dataPersonalProj.map((dataItem) => (
        <Tilt
          className='my-8 md:mx-12 lg:m-0'
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor='#e3e3e3'
          glarePosition='top'
          glareBorderRadius='1.5rem'
          scale={1.0}
          gyroscope={true}
          key={dataItem.id}
        >
          <div className='relative flex flex-col rounded-3xl py-8 sm:grid-cols-6 md:mb-10  md:grid md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
            <div className='flex justify-center align-middle md:col-span-3 md:my-auto'>
              <Image
                className='w-4/6 rounded-lg pb-2 md:w-5/6 md:pb-0'
                width={300}
                height={300}
                src={dataItem.src}
                alt=''
              />
            </div>
            <div className='flex flex-col justify-between text-center md:col-span-3 md:pl-2 md:text-left'>
              <div>
                <p>
                  <Link
                    className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big hover:text-teal-500"
                    href={dataItem.href}
                    target='_blank'
                  >
                    {dataItem.website}
                  </Link>
                </p>
                <p className='mb-4 text-white/70'>{dataItem.publishDate}</p>
              </div>
              <ul className='flex flex-wrap  justify-center gap-2 align-middle md:justify-start'>
                {dataItem.listItems.map((item, index) => (
                  <li
                    key={index}
                    className='mb-1 rounded-3xl border-0 border-t border-white border-opacity-60 bg-gradient-to-b from-[#B842DC]/70 to-[#7c2c95]/60 px-4 py-1 text-sm leading-6 shadow-big lg:px-3 lg:py-0.5'
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
