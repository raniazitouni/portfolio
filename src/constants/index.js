import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    threejs,
    close,
    DOMOV,
    arduino,
  } from "../assets";
  
  export const navLinks = [
    {
      id:  "about",
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
      name:"arduino",
      icon :arduino,
    }
    
  ];
  
  const experiences = [
    {
    }
  ];
  
  const testimonials = [

  ];
  
  const projects = [
    {
      name: "Domov",
      description:
        "A home automation mobile application that allows the control of home devices. It includes features for activation/deactivation and advanced parameter management. This application is coded in React Native.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: DOMOV,
      source_code_link: "https://github.com/raniazitouni/DOMOV",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };