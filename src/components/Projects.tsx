'use client';
import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { WorkProjects, PersonalProjects } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import { filterDataByListItem } from './Filter';
import CardNotFound from './CardNotFound';
import XSvg from './XSvg';

interface ProjectsProps {
  primaryPickerColor: string;
  secondaryPickerColor: string;
  workProjectHoverStates: boolean[]; // An array of boolean hover states for each project
  setWorkProjectHoverStates: React.Dispatch<React.SetStateAction<boolean[]>>; // Function to update the hover states for projects
  personalProjectHoverStates: boolean[]; // An array of boolean hover states for each project
  setPersonalProjectHoverStates: React.Dispatch<React.SetStateAction<boolean[]>
  >;
}

const ProjectsComponent: React.FC<ProjectsProps> = ({
  primaryPickerColor,
  secondaryPickerColor,
  workProjectHoverStates,
  setWorkProjectHoverStates,
  personalProjectHoverStates,
  setPersonalProjectHoverStates,
}) => {
  const topRef = useRef<HTMLDivElement | null>(null); // Specify the type of topRef
  const [filterCriteria, setFilterCriteria] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [filterInputFocused, setFilterInputFocused] = useState(false);

  // Handle the input click event to show the dropdown list
  const handleInputClick = () => {
    if (filteredSuggestions.length > 0) {
      // Show the dropdown list when the input is clicked and there are filtered suggestions
      setFilteredSuggestions([]);
    } else {
      // Otherwise, show the filtered suggestions
      setFilteredSuggestions(allListItems);
    }
  };

  const handleFilterInputFocus = () => {
    setFilterInputFocused(true);
    const projectsComponent = document.getElementById('projects');
    if (projectsComponent) {
      const { top } = projectsComponent.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + top,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 'Enter') {
        setFilterInputFocused(false);
        handleFilterInputFocus();
      }
    };

    const filterInput = document.getElementById('filterInput');

    if (filterInputFocused && filterInput) {
      filterInput.focus();
    }

    if (filterInput) {
      filterInput.addEventListener('keypress', handleKeyPress);
    }

    return () => {
      if (filterInput) {
        filterInput.removeEventListener('keypress', handleKeyPress);
      }
    };
  }, [filterInputFocused]);

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
  ).sort((a, b) => a.localeCompare(b));

  // Function to scroll to the top of the component
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top whenever filterCriteria changes
  useEffect(() => {
    scrollToTop();
  }, [filterCriteria]);

  // Filter the list of possible items based on the current input and set the filtered suggestions
  const handleInputChange = (e: any) => {
    const input = e.target.value;
    setFilterCriteria(input);

    // Scroll to the top of the filter input
    const filterInput = document.getElementById('projects');
    if (filterInput) {
      filterInput.scrollIntoView({ behavior: 'smooth' });
    }

    const suggestions = allListItems.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredSuggestions(suggestions);
    setSelectedSuggestionIndex(-1); // Reset the selected suggestion index when the input changes
  };

  // Handle selecting a suggestion from the autocomplete dropdown
  const handleSuggestionSelect = (suggestionIndex: number) => {
    if (suggestionIndex >= 0 && suggestionIndex < filteredSuggestions.length) {
      setFilterCriteria(filteredSuggestions[suggestionIndex]);
      setFilteredSuggestions([]);
      setSelectedSuggestionIndex(-1); // Reset the selected suggestion index after selecting a suggestion
    }
  };

  // Handle hiding the dropdown when the input loses focus
  const handleInputBlur = () => {
    setTimeout(() => {
      setFilteredSuggestions([]);
    }, 100);
  };

  // Create a ref to the list element to scroll the selected item into view
  const dropdownListRef = useRef<HTMLUListElement | null>(null);

  // Scroll to the selected item when 'selectedSuggestionIndex' changes
  useEffect(() => {
    if (selectedSuggestionIndex !== -1 && dropdownListRef.current) {
      const selectedElement = dropdownListRef.current.children[
        selectedSuggestionIndex
      ] as HTMLElement;

      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [selectedSuggestionIndex]);

  // Handle mouse enter and mouse leave events for links
  const handleLinkMouseEnter = (
    index: number,
    projectType: 'work' | 'personal'
  ) => {
    if (projectType === 'work') {
      const updatedWorkHoverStates = [...workProjectHoverStates];
      updatedWorkHoverStates[index] = true;
      setWorkProjectHoverStates(updatedWorkHoverStates);
    } else {
      const updatedPersonalHoverStates = [...personalProjectHoverStates];
      updatedPersonalHoverStates[index] = true;
      setPersonalProjectHoverStates(updatedPersonalHoverStates);
    }
  };

  const handleLinkMouseLeave = (
    index: number,
    projectType: 'work' | 'personal'
  ) => {
    if (projectType === 'work') {
      const updatedWorkHoverStates = [...workProjectHoverStates];
      updatedWorkHoverStates[index] = false;
      setWorkProjectHoverStates(updatedWorkHoverStates);
    } else {
      const updatedPersonalHoverStates = [...personalProjectHoverStates];
      updatedPersonalHoverStates[index] = false;
      setPersonalProjectHoverStates(updatedPersonalHoverStates);
    }
  };

  return (
    <section className='' id='projects'>
      {isLoading ? ( // Render loading state while data is being fetched
        <div>
          <h2
            style={{
              color: secondaryPickerColor,
            }}
            className={`px-4 pb-4 pt-2 text-center text-2xl md:px-12 md:pb-4 md:text-left lg:px-12 lg:pb-4 lg:pt-2`}
          >
            Projects
          </h2>
        </div>
      ) : (
        // Render the actual content once the data is loaded
        <>
          <div className='sticky top-0 z-20 rounded-b-xl bg-[#0e1d35]/90 bg-blend-normal md:bg-[#0e1c35]/90 lg:bg-[#0e1d35]/90'>
            <div className='flex flex-col pb-4 pt-4 align-middle md:m-0 md:flex-row'>
              <h2
                style={{
                  color: secondaryPickerColor,
                }}
                className={`px-4 pb-4 pt-2 text-center text-2xl md:px-12 md:pb-4 md:text-left lg:px-12 lg:pb-4 lg:pt-2`}
              >
                Projects
              </h2>
              <div className='flex flex-grow gap-3 px-3 md:gap-6 md:px-0 lg:gap-3 lg:pr-12'>
                <div className='relative flex flex-grow'>
                  <input
                    id='filterInput'
                    style={{
                      color: primaryPickerColor,
                    }}
                    className={`h-12 w-full rounded-3xl border border-white bg-transparent px-5 text-base focus:outline-none focus:ring focus:ring-white/30`}
                    type='text'
                    value={filterCriteria}
                    onChange={handleInputChange}
                    onFocus={handleFilterInputFocus}
                    onClick={handleInputClick}
                    onBlur={handleInputBlur}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        setSelectedSuggestionIndex((prevIndex) =>
                          prevIndex <= 0
                            ? filteredSuggestions.length - 1
                            : prevIndex - 1
                        );
                      } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        setSelectedSuggestionIndex((prevIndex) =>
                          prevIndex === filteredSuggestions.length - 1
                            ? 0
                            : prevIndex + 1
                        );
                      } else if (
                        e.key === 'Tab' &&
                        filteredSuggestions.length > 0
                      ) {
                        handleSuggestionSelect(selectedSuggestionIndex);
                      } else if (
                        e.key === 'Enter' &&
                        filteredSuggestions.length > 0
                      ) {
                        handleSuggestionSelect(selectedSuggestionIndex);
                      }
                    }}
                    placeholder='Filter projects by technology...'
                  />

                  {filteredSuggestions.length > 0 && (
                    <ul
                      ref={dropdownListRef} // Attach the ref to the ul element
                      style={{
                        color: primaryPickerColor,
                      }}
                      className={`absolute top-12 z-50 max-h-48 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white/90 shadow-lg`}
                    >
                      {filteredSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className={`cursor-pointer px-5 py-2 ${
                            index === selectedSuggestionIndex
                              ? 'bg-gray-400'
                              : ''
                          }`}
                          onClick={() => handleSuggestionSelect(index)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button
                  style={{ color:primaryPickerColor }}
                  className={`flex h-12 w-12 justify-center rounded-full border px-4 py-1 align-middle text-base md:mr-12 lg:m-0`}
                  onClick={() => setFilterCriteria('')}
                >
                  <XSvg />
                </button>
              </div>
            </div>
          </div>
          <h3
            style={{
              color: secondaryPickerColor,
            }}
            className={`p-4 pb-3 text-center text-xl md:px-12 md:pb-2 md:pt-4 md:text-left lg:px-12 lg:pb-8 lg:pt-4`}
          >
            Work Projects
          </h3>

          {filteredWorkProjects.length === 0 && <CardNotFound />}
          {filteredWorkProjects.map((dataItem, index) => (
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
              <div className='relative flex flex-col rounded-3xl py-8 sm:grid-cols-6 md:mb-10 md:grid md:p-8 md:backdrop-blur-sm md:backdrop-filter'>
                <div className='flex justify-center align-middle md:col-span-3 md:my-auto'>
                  <Image
                    className='w-4/6 rounded-lg mb-2 md:w-5/6 md:pb-0'
                    width={300}
                    height={300}
                    src={dataItem.src}
                    alt=''
                  />
                </div>
                <div className='flex flex-col justify-between text-center md:col-span-3 md:pl-2 md:text-left'>
                  <div>
                    {/* Wrap the link inside a div and attach the mouse events to the div */}
                    <div
                      onMouseEnter={() => handleLinkMouseEnter(index, 'work')}
                      onMouseLeave={() => handleLinkMouseLeave(index, 'work')}
                    >
                      <Link
                        href={dataItem.href}
                        target='_blank'
                        style={{
                          color: workProjectHoverStates[index]
                            ? secondaryPickerColor
                            : '#fff',
                          transition: 'color 0.3s ease',
                        }}
                        className={`after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big`}
                      >
                        {dataItem.website}
                      </Link>
                    </div>
                    <p className='mb-4 text-white/70'>{dataItem.publishDate}</p>
                  </div>
                  <ul className='flex flex-wrap justify-center gap-2 align-middle md:justify-start'>
                    {dataItem.listItems.map((item, index) => (
                      <li
                        key={index}
                        style={{ backgroundColor: primaryPickerColor }}
                        className="after:content[''] relative mb-1 rounded-3xl border-0 border-t border-white border-opacity-60 px-4 py-1  shadow-big after:absolute after:-inset-0 after:z-20 after:rounded-3xl after:bg-gradient-to-b after:from-black/10 after:to-black/40 lg:px-3 lg:py-0.5"
                      >
                        <span className='relative z-40 text-sm leading-6'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tilt>
          ))}

          <h3
            style={{
              color: secondaryPickerColor,
            }}
            className={`p-4 pb-3 text-center text-xl md:px-12 md:py-8 md:pb-2 md:text-left lg:px-12 lg:py-8`}
          >
            Personal Projects
          </h3>

          {filteredPersonalProjects.length === 0 && <CardNotFound />}
          {filteredPersonalProjects.map((dataItem, index) => (
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
                    className='w-4/6 rounded-lg mb-2 md:w-5/6 md:pb-0'
                    width={300}
                    height={300}
                    src={dataItem.src}
                    alt=''
                  />
                </div>
                <div className='flex flex-col justify-between text-center md:col-span-3 md:pl-2 md:text-left'>
                  <div>
                    {/* Wrap the link inside a div and attach the mouse events to the div */}
                    <div
                      onMouseEnter={() =>
                        handleLinkMouseEnter(index, 'personal')
                      }
                      onMouseLeave={() =>
                        handleLinkMouseLeave(index, 'personal')
                      }
                    >
                      <Link
                        href={dataItem.href}
                        target='_blank'
                        style={{
                          color: personalProjectHoverStates[index]
                            ? secondaryPickerColor
                            : '#fff',
                          transition: 'color 0.3s ease',
                        }}
                        className={`after:content[''] after:absolute after:-inset-x-0 after:-inset-y-0 after:rounded-3xl after:border-0 after:border-t after:border-white after:border-opacity-30 after:bg-white after:bg-opacity-5 after:shadow-big`}
                      >
                        {dataItem.website}
                      </Link>
                    </div>
                    <p className='mb-4 text-white/70'>{dataItem.publishDate}</p>
                  </div>
                  <ul className='flex flex-wrap justify-center gap-2 align-middle md:justify-start'>
                    {dataItem.listItems.map((item, index) => (
                      <li
                        key={index}
                        style={{ backgroundColor: primaryPickerColor }}
                        className="after:content[''] relative mb-1 rounded-3xl border-0 border-t border-white border-opacity-60 px-4 py-1  shadow-big after:absolute after:-inset-0 after:z-20 after:rounded-3xl after:bg-gradient-to-b after:from-black/10 after:to-black/40 lg:px-3 lg:py-0.5"
                      >
                        <span className='relative z-40 text-sm leading-6'>
                          {item}
                        </span>
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
};
export default ProjectsComponent;
