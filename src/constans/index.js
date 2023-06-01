import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    wahana,
    ajb,
    bce,
    ibf,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Instructor",
      company_name: "Bandung Education computer",
      icon: bce,
      iconBg: "#383E56",
      date: "May 2022 - Oct 2022",
      points: [
        "Teaching about computers, Mathematic, and basic algorithm.",
        "provide simple pain, ms word, ms excel, ms powerpoint projects.",
        "tech manners to students.",
      ],
    },
    {
      title: "Administraion Staff",
      company_name: "PT. Wahana Express",
      icon: wahana,
      iconBg: "#E6DEDD",
      date: " July 2021 - Sept 2021",
      points: [
        "Make report on finances, items, income, and expences.",
        "Chech the items and input the items and do the packing.",
        "Maintenance of items, as well as office equipment.",
      ],
    },
    {
      title: "Marketing Staff",
      company_name: "Bank Abadi Jaya Bersama",
      icon: ajb,
      iconBg: "#383E56",
      date: "Jan 2021 - April 2021",
      points: [
        "pursue marketing targets that must be met.",
        "make income and expense reports.",
        "Find customers and provide offers.",
      ],
    },
    {
      title: "Marketing Staff",
      company_name: "International Bussines Futures",
      icon: ibf,
      iconBg: "#E6DEDD",
      date: "oct 2020 - nov 2020",
      points: [
        "pursue marketing targets that must be met.",
        "make income and expense reports.",
        "Find customers and provide offers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Try not to be a successful human being but try to be a useful human being.",
      name: "Albert Einstein",
      designation: "Scientist",
      company: "Scientist",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    },
    {
      testimonial:
        "Our virtues and our failures are inseparable, like coercion and trouble. When they were separated, humans ceased to exist. 3. I don't think you can name the great discoveries married men have made.",
      name: "Nikola Tesla",
      designation: "Scientist",
      company: "Scientist",
      image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSEKg6zv_zKaIL9sinsQJpZGBRWGM06saaCkficSpeqt4o3La2SxCqABdZPlPeJQ0Io",
    },
    {
      testimonial:
        "Success belongs to those who always try. 2. Learn to give thanks for the good things in your life. Learn to be strong from the bad things in your life. 3. Happiness and sadness depend on how we react to it.",
      name: "B. J. Habibie",
      designation: "Scientist",
      company: "Global Scientist",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/B.J._Habibie_with_presidential_decorations.jpg/220px-B.J._Habibie_with_presidential_decorations.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };