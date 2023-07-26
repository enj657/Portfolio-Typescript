import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import About from "@/components/About";
import ExperienceComponent from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationComponent from "@/components/Education";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className={`${poppins.className} lg:px-24 lg:py-0 max-w-screen-xl md:px-12 md:py-20 min-h-screen mx-auto px-6 py-12`}>
        <div className="lg:flex lg:gap-4 lg:justify-between">
            <Header />
            <main className={`pt-12 lg:w-1/2 `}>
              <About />
              <Projects />
              <ExperienceComponent />
              <EducationComponent />
            </main>
        </div>
    </div>
  );
}
