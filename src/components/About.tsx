import React from 'react';

export default function About() {
  return (
    <section className='flex flex-1 p-4 md:px-12 md:py-8' id='about'>
      <div className='flex flex-col justify-center'>
        <h2 className='pb-3 md:pt-12 text-center text-2xl text-teal-500 md:text-left'>
          About
        </h2>
        <p className='mt-4 mb-6 text-base'>{`Hey, I'm Elle, a web developer who loves creating fun websites. I got hooked on web development after a data analytics bootcamp in 2022.`}</p>
        <p className='mb-6 text-base'>{`I'm all about making websites look incredible on any device and accessible to everyone. I want the web to be a fun and inclusive place for all. I love keeping up to date with the latest technologies and have been continuously improving my knowledge of HTML, JS, and CSS.`}</p>
        <p className='mb-6 text-base'>{`When I'm not coding, you can find me hiking, hanging out with loved ones, playing music, or exploring virtual worlds in video games.`}</p>
      </div>
    </section>
  );
}
