// Define the interface for a single project
interface Adjective {
  id: number;
  adjective: string;
  emoji: string;
}

// Define the type for the array of projects
type AdjectiveData = Adjective[];

export const Adjective = (): AdjectiveData => {
  const data: AdjectiveData = [
    {
      id: 1,
      adjective: 'Web Developer',
      emoji: '💻',
    },
    {
      id: 2,
      adjective: 'Data Analyst',
      emoji: '📊',
    },
    {
      id: 3,
      adjective: 'Musician',
      emoji: '🎻',
    },
    {
      id: 4,
      adjective: 'Vegetarian',
      emoji: '🍉',
    },
    {
      id: 5,
      adjective: 'Hiker',
      emoji: '🏔',
    },
    {
      id: 6,
      adjective: 'Sports Fan',
      emoji: '🎾',
    },
    {
      id: 7,
      adjective: 'Traveler',
      emoji: '🛩',
    },
    {
      id: 8,
      adjective: 'Stargazer',
      emoji: '🌌',
    },
    {
      id: 9,
      adjective: 'Partner',
      emoji: '🌈',
    },
    {
      id: 10,
      adjective: 'Cat Mom',
      emoji: '🐈',
    },
  ];

  return data;
};

// Define the interface for a single project
interface Projects {
  id: number;
  src: string;
  href: string;
  website: string;
  publishDate: string;
  listItems: string[];
}

// Define the type for the array of projects
type WorkProjectsData = Projects[];

export const WorkProjects = (): WorkProjectsData => {
  const data: WorkProjectsData = [
    
    // {
    //   id: ,
    //   src: '/heartlandhealthevents.png',
    //   href: 'https://www.captiva2-webdev.com/heartlandhealthevents',
    //   website: 'Heartland Health Events',
    //   publishDate: 'October 2023',
    //   listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    // },
    // {
    //   id: ,
    //   src: '/ultrabase.png',
    //   href: 'https://www.captiva2-webdev.com/ultrabasesystems',
    //   website: 'Ultra Base Systems',
    //   publishDate: ' 2024 - development site',
    //   listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    // },
    {
      id: 18,
      src: '/1879distilling.png',
      href: 'https://www.1879distilling.com/',
      website: '1879 Distilling',
      publishDate: 'August 2024',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 17,
      src: '/trekk.png',
      href: 'https://www.trekkequipment.com/',
      website: 'Trekk Equipment',
      publishDate: 'May 2024',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 16,
      src: '/leap.png',
      href: 'https://www.leapforstudents.com/',
      website: 'Leap for Students',
      publishDate: 'May 2024',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 15,
      src: '/cl-smith.png',
      href: 'https://www.clsmithindustrial.com/',
      website: 'CL Smith Industrial',
      publishDate: 'March 2024',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 14,
      src: '/frederic-roofing.png',
      href: 'https://www.fredericroofing.com/',
      website: 'Frederic Roofing',
      publishDate: 'February 2024',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS', 'slick.js'],
    },
    {
      id: 13,
      src: '/mesolaw.png',
      href: 'https://www.mesolaw.com/',
      website: 'MesoLaw',
      publishDate: 'January 2024',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 12,
      src: '/pool-king.png',
      href: 'https://www.poolkingrec.com/',
      website: 'Pool King Recreation',
      publishDate: 'January 2024',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 11,
      src: '/travers-insurance.png',
      href: 'https://www.traversinsurance.com/',
      website: 'Travers Insurance',
      publishDate: 'December 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 10,
      src: '/rachelforsttravels.png',
      href: 'https://www.rachelforsttravels.com',
      website: 'Rachel Forst Travels',
      publishDate: 'October 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 9,
      src: '/impactmlds.png',
      href: 'https://www.impactmlds.com/',
      website: 'Impact MLDS',
      publishDate: 'September 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 8,
      src: '/fps-logistics.png',
      href: 'https://www.fps-logistics.com',
      website: 'FPS Logistics',
      publishDate: 'August 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    // {
    //   id: 8,
    //   src: '/lami.png',
    //   href: 'https://www.captiva2-webdev.com/lami',
    //   website: 'Lami Wood',
    //   publishDate: 'July 2023',
    //   listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    // },
    {
      id: 7,
      src: '/pmainfo-img.png',
      href: 'https://www.pmainfo.org',
      website: 'Precious Metals Association',
      publishDate: 'June 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 6,
      src: '/stlouisdesignbuild-img.png',
      href: 'https://www.stlouisdesignbuild.com',
      website: 'St. Louis Design Build',
      publishDate: 'May 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS', 'slick.js'],
    },
    {
      id: 5,
      src: '/diningrd-img.png',
      href: 'https://www.diningrd.com',
      website: 'Dining RD',
      publishDate: 'April 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS', 'WordPress'],
    },
    {
      id: 4,
      src: '/industrialally-img.png',
      href: 'https://www.industrial-ally.com',
      website: 'Industrial Ally',
      publishDate: 'March 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 3,
      src: '/clearcordisplays-img.png',
      href: 'https://www.clearcordisplays.com',
      website: 'ClearCor Displays',
      publishDate: 'Feb 2023',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS', 'slick.js'],
    },
    {
      id: 2,
      src: '/hubfares-img.png',
      href: 'https://www.captiva2-webdev.com/hubfares',
      website: 'Hubfares',
      publishDate: 'December 2022 - development site',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS', 'slick.js'],
    },
    {
      id: 1,
      src: '/joinschaeffer-img.png',
      href: 'https://www.joinschaeffer.com/',
      website: 'Schaeffer Oil',
      publishDate: 'October 2022',
      listItems: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  return data;
};

// Define the type for the array of projects
type PersonalProjectsData = Projects[];

export const PersonalProjects = (): PersonalProjectsData => {
  const data: PersonalProjectsData = [
    {
      id: 1,
      src: '/topstlouis-img.png',
      href: 'https://enj657.github.io/TOP_stl_website/',
      website: 'Fun Things To Do In St. Louis',
      publishDate: 'April 2022',
      listItems: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 2,
      src: '/travelitinerary-img.png',
      href: 'https://enj657.github.io/travel-itinerary-react/',
      website: 'Travel Itinerary',
      publishDate: 'June 2022',
      listItems: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 3,
      src: '/memegenerator-img.png',
      href: 'https://enj657.github.io/meme-generator/',
      website: 'Meme Generator',
      publishDate: 'June 2022',
      listItems: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  return data;
};

// Define the interface for a single project
interface Experience {
  id: number;
  year1: string;
  year2: string;
  title: string;
  href: string;
  company: string;
  description: string;
  listItems: string[];
}

// Define the type for the array of projects
type ExperienceData = Experience[];

export const Experience = (): ExperienceData => {
  const data: ExperienceData = [
    {
      id: 1,
      year1: '2022',
      year2: '2025',
      title: 'Web Developer',
      href: 'https://www.captiva-marketing.com/',
      company: 'Captiva Marketing',
      description:
        'I built and maintained websites for over 200 clients. Some recent projects were for companies including MRHFM Law Firm, 1879 Distilling Company, and Frederic Roofing Company.',
      listItems: ['HTML', 'CSS', 'JS', 'PHP', 'WordPress', 'slick.js', 'empoweren', 'hubspot', 'pardot', 'Adobe Experience Manager'],
    },
    {
      id: 2,
      year1: '2018',
      year2: '2020',
      title: 'Business Office Associate',
      href: 'https://www.stlukes-stl.com/',
      company: "St. Luke's Hospital",
      description:
        'Executed medical record database transition from legacy system to Cerner. Coded service types into EMR platform to ensure consistent billing. Improved financial reconciliation process by creating an excel database of payments received to compare to expected collections from Cerner.',
      listItems: ['Cerner', 'eCW', 'Excel', 'Word'],
    },
  ];

  return data;
};

// Define the interface for a single project
interface Education {
  id: number;
  year1: string;
  year2: string;
  title: string;
  href: string;
  company: string;
  degree: string;
}

// Define the type for the array of projects
type EducationData = Education[];

export const Education = (): EducationData => {
  const data: EducationData = [
    {
      id: 1,
      year1: '2021',
      year2: '2022',
      title: 'Student',
      href: 'https://bootcamp.tlcenter.wustl.edu/data/landing-b5a/?s=Google-Brand&dki=Learn%20Data%20Analytics%20Online%20in%2024%20Weeks&pkw=washington%20university%20data%20analytics&pcrid=458184222381&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CWASHINGTON-UNIVERSITY-IN-ST-LOUIS%7CSEM%7CDATA%7C-%7COFL%7CTIER-1%7CALL%7CBRD%7CEXACT%7CPrimary%7CGeneral&utm_term=washington%20university%20data%20analytics&utm_content=458184222381&s=google&k=washington%20university%20data%20analytics&gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJpGPRAtxhVjBpTE7dAfq4ASI3DoF1tzzLS3OxURhaswpLgyYXb6owaAly5EALw_wcB&gclsrc=aw.ds',
      company: 'Washington University in St. Louis',
      degree: 'Certificate in Data Analytics',
    },
    {
      id: 2,
      year1: '2011',
      year2: '2015',
      title: 'Student',
      href: 'https://welcome.miami.edu/',
      company: 'University of Miami',
      degree: 'B.S. Health Sciences, Minor in Religious Studies',
    },
  ];

  return data;
};
