'use client';
import Link from 'next/link';
import React from 'react';

import Nav from './Nav';
import Github from './GithubLogo';
import LinkedIn from './LinkedinLogo';
import Resume from './ResumeLogo';
import Logo3 from './Logo3';
import { Adjective } from '@/data/data';

export default function Header() {
  const data = Adjective();

  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:p-12'>
      <div className='flex flex-1 flex-col justify-between p-4 md:px-12 md:py-8'>
        <div>
          <div className='mb-4 text-[#B842DC] hover:text-teal-500'>
            <h1 className='relative m-auto w-48 md:m-0 md:w-80'>
              <Link href='/'>
                <Logo3 />
              </Link>
            </h1>
          </div>
          <div className='w-full md:w-1/2 lg:w-full'>
            <h2 className='pb-3 text-center text-2xl text-teal-500 md:text-left'>
              Web Developer at Captiva{'\u00A0'}Marketing
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
          <div className='md:my-20'>
            <Nav />
          </div>
        </div>
        <ul className='my-8 flex flex-row justify-center gap-6 md:my-0 md:justify-start'>
          <li>
            <Link
              href='https://github.com/enj657'
              target='_blank'
              className='text-[#B842DC] hover:text-teal-500'
            >
              <span className='sr-only'>Github</span>
              <Github />
            </Link>
          </li>
          <li>
            <Link
              href='https://www.linkedin.com/in/enj657/'
              target='_blank'
              className='text-[#B842DC] hover:text-teal-500'
            >
              <span className='sr-only'>LinkedIn</span>
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link
              href=''
              target='_blank'
              className='text-[#B842DC] hover:text-teal-500'
            >
              <span className='sr-only'>Resume</span>
              <Resume />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
