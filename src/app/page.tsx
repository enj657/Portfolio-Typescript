import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import About from '@/components/About';
import ExperienceComponent from '@/components/Experience';
import Projects from '@/components/Projects';
import EducationComponent from '@/components/Education';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <div
      className={`${poppins.className} mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20 lg:py-0`}
    >
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Header />
        <main className={`lg:w-1/2 `}>
          <About />
          <Projects />
          <ExperienceComponent />
          <EducationComponent />
        </main>
      </div>
    </div>
  );
}
