import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function CardNotFound() {
  return (
    <section className=''>
      <div>
          <Tilt
            className='my-8 md:mx-12 lg:m-0'
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor='#e3e3e3'
            glarePosition='top'
            glareBorderRadius='1.5rem'
            scale={1.0}
          >
            <div className="text-center after:content[''] mb-4 text-white/70 after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big p-12">Technology not used...</div>
          </Tilt>
      </div>
    </section>
  );
}
