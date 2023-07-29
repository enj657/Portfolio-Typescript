'use client';
import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { WorkProjects, PersonalProjects } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import { filterDataByListItem } from './Filter';
import CardNotFound from './CardNotFound';

export default function Projects() {
  const [filterCriteria, setFilterCriteria] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a delay of 1 second
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Call the functions to get the data arrays
  const dataWorkProj = WorkProjects();
  const dataPersonalProj = PersonalProjects();

  const filteredWorkProjects = filterCriteria
    ? filterDataByListItem(() => dataWorkProj, filterCriteria)
    : dataWorkProj;

  const filteredPersonalProjects = filterCriteria
    ? filterDataByListItem(() => dataPersonalProj, filterCriteria)
    : dataPersonalProj;

  // Merge the data from both arrays
  const allData = [...dataWorkProj, ...dataPersonalProj];

  // Extract all unique technology items from the merged data
  const allListItems = Array.from(
    new Set(allData.flatMap((proj) => proj.listItems))
  );

  // Filter the list of possible items based on the current input
  const filteredSuggestionsArray = allListItems.filter((item) =>
    item.toLowerCase().includes(filterCriteria.toLowerCase())
  );

  // Filter the list of possible items based on the current input and set the filtered suggestions
  const handleInputChange = (e: any) => {
    const input = e.target.value;
    setFilterCriteria(input);

    const suggestions = allListItems.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredSuggestions(suggestions);
  };

  // Handle selecting a suggestion from the autocomplete dropdown
  const handleSuggestionSelect = (suggestion: any) => {
    setFilterCriteria(suggestion);
    setFilteredSuggestions([]);
  };

  // Handle hiding the dropdown when the input loses focus
  const handleInputBlur = () => {
    setTimeout(() => {
      setFilteredSuggestions([]);
    }, 100);
  };

  return (
    <section className='' id='projects'>
      {isLoading ? ( // Render loading state while data is being fetched
        <div>Loading...</div>
      ) : (
        // Render the actual content once the data is loaded
        <>
          <div className='flex flex-col align-middle md:flex-row'>
            <h2 className='px-4 pb-4 pt-2 text-center text-2xl text-teal-500 md:px-12 md:pb-2 md:text-left lg:px-12 lg:py-2'>
              Projects
            </h2>
            <div className='flex flex-grow gap-3 md:gap-6 lg:gap-3'>
              <div className='relative flex flex-grow'>
                <input
                  className='flex h-12 flex-grow rounded-3xl border border-white bg-transparent px-5 text-base text-[#B842DC] focus:outline-none focus:ring focus:ring-teal-500/70'
                  type='text'
                  value={filterCriteria}
                  onChange={handleInputChange}
                  onFocus={handleInputChange} // Display suggestions on input focus
                  onBlur={handleInputBlur} // Hide suggestions when input loses focus
                  placeholder='Filter projects by technology...'
                />

                {filteredSuggestions.length > 0 && (
                  <ul className='absolute top-12 z-10 max-h-48 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white/90 text-[#B842DC] shadow-lg'>
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className='cursor-pointer px-5 py-2 hover:bg-gray-100 hover:text-teal-500'
                        onClick={() => handleSuggestionSelect(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                className='h-12 w-12 rounded-full border px-3 py-1 text-base text-teal-500 hover:text-[#B842DC] md:mr-12 lg:m-0'
                onClick={() => setFilterCriteria('')}
              >
                ✖
              </button>
            </div>
          </div>

          <h3 className='p-4 pb-3 text-center text-xl text-teal-500 md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8'>
            Work Projects
          </h3>
          {filteredWorkProjects.length === 0 && <CardNotFound />}
          {filteredWorkProjects.map((dataItem) => (
            <Tilt
              className='my-8 md:mx-12 lg:m-0'
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor='#e3e3e3'
              glarePosition='top'
              glareBorderRadius='1.5rem'
              scale={1.0}
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
                    <p className='mb-8 text-white/70'>{dataItem.publishDate}</p>
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

          <h3 className='p-4 pb-3 text-center text-xl text-teal-500 md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8'>
            Personal Projects
          </h3>

          {filteredPersonalProjects.length === 0 && <CardNotFound />}
          {filteredPersonalProjects.map((dataItem) => (
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
        </>
      )}
    </section>
  );
}
