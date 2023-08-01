import React from 'react';

interface AboutProps {
  primaryPickerColor: string;
  secondaryPickerColor: string;
}

const AboutComponent: React.FC<AboutProps> = ({
  primaryPickerColor,
  secondaryPickerColor,
}) => {
  return (
    <section className='flex flex-1 p-4 md:pt-0 md:px-12 lg:pb-4 lg:pt-8' id='about'>
      <div className='flex flex-col justify-center'>
        <h2
          style={{
            color: secondaryPickerColor,
          }}
          className='pb-3 text-center text-2xl text-teal-500 md:pt-6 md:text-left'
        >
          About
        </h2>
        <p className='mb-6 mt-4 text-center text-base md:text-left'>{`Hey, I'm Elle, a web developer who loves creating fun websites. I got hooked on web development after a data analytics bootcamp in 2022.`}</p>
        <p className='mb-6 text-center text-base md:text-left'>{`I'm all about making websites look incredible on any device and accessible to everyone. I want the web to be a fun and inclusive place for all. I love keeping up to date with the latest technologies and have been continuously improving my knowledge of HTML, JS, and CSS.`}</p>
        <p className='mb-6 text-center text-base md:text-left'>{`When I'm not coding, you can find me hiking, hanging out with loved ones, playing music, or exploring virtual worlds in video games.`}</p>
      </div>
    </section>
  );
};

export default AboutComponent;
