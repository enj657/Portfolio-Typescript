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
        year1: "2022",
        year2: "Present",
        title: "Web Developer",
        href: "https://www.captiva-marketing.com/",
        company: "Captiva Marketing",
        description:
          "I build and maintain websites for over 150 clients. Some recent projects were for companies including Dining RD, Industrial Ally, and ClearCor displays.",
        listItems: ["HTML", "CSS", "JS", "PHP", "WordPress"],
      },
      {
        id: 2,
        year1: "2018",
        year2: "2020",
        title: "Business Office Associate",
        href: "https://www.stlukes-stl.com/",
        company: "St. Luke's Hospital",
        description:
          "Executed medical record database transition from legacy system to Cerner. Organized and prepared medical records for physician's use during patient visits. Coded service types into EMR platform to ensure consistent billing. Improved financial reconciliation process by creating an excel database of payments received to compare to expected collections from Cerner. Assisted with patient communication and appointment scheduling.",
        listItems: ["Cerner", "eCW", "Excel", "Word"],
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
    description: string;
    listItems: string[];
  }


// Define the type for the array of projects
type EducationData = Education[];

export const Education = (): EducationData => {
  const data: EducationData = [
      {
        id: 1,
        year1: "2021",
        year2: "2022",
        title: "Student",
        href: "https://www.",
        company: "Washington University in St. Louis",
        degree: "Certificate in Data Analytics",
        description: "Lorem ipsum dolor lorem ipsum dolor.",
        listItems: ["Python", "SQL", "JS", "ML"],
      },
      {
        id: 2,
        year1: "2011",
        year2: "2015",
        title: "Student",
        href: "https://welcome.miami.edu/",
        company: "University of Miami",
        degree: "B.S. Health Sciences, Minor in Religious Studies",
        description: "Lorem ipsum dolor lorem ipsum dolor.",
        listItems: [],
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
      {
        id: 1,
        src: "/stlouisdesignbuild-img.png",
        href: "https://www.captiva2-webdev.com/lami",
        website: "Lami Wood",
        publishDate: "July 2023",
        listItems: ["PHP", "HTML", "CSS"],
      },
      {
        id: 2,
        src: "/stlouisdesignbuild-img.png",
        href: "https://www.pmaminfo.com",
        website: "Precious Metals Association",
        publishDate: "June 2023",
        listItems: ["PHP", "HTML", "CSS"],
      },
      {
        id: 3,
        src: "/stlouisdesignbuild-img.png",
        href: "https://www.stlouisdesignbuild.com",
        website: "St. Louis Design Build",
        publishDate: "May 2023",
        listItems: ["PHP", "HTML", "CSS"],
      },
      {
        id: 4,
        src: "/diningrd-img.png",
        href: "https://www.diningrd.com",
        website: "Dining RD",
        publishDate: "April 2023",
        listItems: ["PHP", "HTML", "CSS"],
      },
      {
        id: 5,
        src: "/industrialally-img.png",
        href: "https://www.industrial-ally.com",
        website: "Industrial Ally",
        publishDate: "March 2023",
        listItems: ["PHP", "HTML", "CSS"],
      },
      {
        id: 6,
        src: "/clearcordisplays-img.png",
        href: "https://www.clearcordisplays.com",
        website: "ClearCor Displays",
        publishDate: "Feb 2023",
        listItems: ["PHP", "HTML", "CSS"],
      },
      {
        id: 7,
        src: "/stlouisdesignbuild-img.png",
        href: "https://www.captiva2-webdev.com/hubfares",
        website: "Hubfares",
        publishDate: "December 2022",
        listItems: ["PHP", "HTML", "CSS"],
      },
      {
        id: 8,
        src: "/joinschaeffer-img.png",
        href: "https://www.joinschaeffer.com/",
        website: "Schaeffer Oil",
        publishDate: "October 2022",
        listItems: ["PHP", "HTML", "CSS"],
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
      src: "/stlouisdesignbuild-img.png",
      href: "https://enj657.github.io/TOP_stl_website/",
      website: "Fun Things To Do In St. Louis",
      publishDate: "April 2022",
      listItems: ["JS", "HTML", "CSS"],
    },
    {
      id: 2,
      src: "/stlouisdesignbuild-img.png",
      href: "https://enj657.github.io/travel-itinerary-react/",
      website: "Travel Itinerary",
      publishDate: "June 2022",
      listItems: ["HTML", "CSS", "React"],
    },
    {
      id: 3,
      src: "/stlouisdesignbuild-img.png",
      href: "https://enj657.github.io/meme-generator/",
      website: "Meme Generator",
      publishDate: "June 2022",
      listItems: ["React", "HTML", "CSS"],
    },
  ];

  return data;
};