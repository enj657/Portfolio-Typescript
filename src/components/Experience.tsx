'use client'
import { Experience } from "@/data/data";
import React from "react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

export default function ExperienceComponent() {
  const data = Experience();

  return (
    <section className="p-4 md:p-0" id="experience">
      <h2 className="md:p-8 text-teal-500 text-2xl pb-3">Experience</h2>
      <div>
        {data.map((dataItem) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#e3e3e3"
            glarePosition="top"
            glareBorderRadius="1.5rem"
            scale={1.05}
            key={dataItem.id}
          >
            <div className="grid sm:grid-cols-6 my-8 p-8 relative md:mb-10 md:p-8 md:backdrop-filter md:backdrop-blur-sm rounded-3xl">
              <span className="col-span-2">
                {dataItem.year1} &#8212; {dataItem.year2}
              </span>
              <div className="col-span-4">
                <p>
                  <strong>{dataItem.title}</strong>
                </p>
                <Link
                  href={dataItem.href}
                  target="_blank"
                  className="after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big"
                >
                  {dataItem.company}
                </Link>
                <p className="my-4">{dataItem.description}</p>
                <ul className="flex gap-2 flex-wrap">
                  {dataItem.listItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-1 bg-gradient-to-b from-[#B842DC]/80 to-[#7c2c95]/70 rounded-3xl border-0 border-t border-white border-opacity-60 text-sm leading-6 mb-1"
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
