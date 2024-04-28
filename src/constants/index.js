
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
    mongodb,
    git,
    figma,
    docker,
    meta,
    tesla,
    shopify,
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
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "UI/UX Developer",
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
    {
      name: "Python",
      icon: typescript,
    },
  ];
  
  const experiences = [
    {
      title: "React developer Intern",
      company_name: "Venuelook",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Summer Intern",
      company_name: "Ituple Technologies",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Aug 2023",
      points: [
        "Acquired hands-on experience with frontend technologies during a one-month summer internship",
        "Engaged in collaborative development with fellow developers, emphasizing teamwork and effective communication",
        "Contributed to testing efforts to ensure the quality and reliability of the project",
      ],
    },
    {
      title: "Graduation",
      company_name: "Deenbandhu Chhotu Ram University of Science and Technology",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - June 2024",
      points: [
        "Bachelors of technology specialised in Computer Science",
        "Scored 91 percentile in JEE mains",
      ],
    },
 
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Blog App",
      description:
        "Web-based platform that allows users to post, read, edit and delete blogs, providing a convenient and efficient solution for showcasing your writing skills",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appWrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/20001001054/Blog-App",
    },
    {
      name: "Mapty App",
      description:
        "A web-based platform designed to capture users' current geographical coordinates, facilitating the tracking and documentation of their workout sessions in real-time.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/20001001054/Mapty-app",
    },
    {
      name: "Recipe App",
      description:
        "A user-friendly web application streamlining the cooking process of your favorite dishes. Simply enter the dish name, and you will promptly get the detailed recipe, making cooking easier for you.",
      tags: [
        {
          name: "WebApi",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/20001001054/Recipe-WebApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };