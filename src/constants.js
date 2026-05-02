// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwin.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import BCA from './assets/education_logo/BCA.jpeg';
import school from './assets/education_logo/school.jpeg';

// Project Section Logo's
import Amazon1 from './assets/work_logo/Amazon1.png';
import contact from './assets/work_logo/contact.png';
import portfolio from './assets/work_logo/portfolio.png';
import Resume from './assets/work_logo/Resume.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];
  
  export const education = [
    
    {
      id: 1,
      img: BCA,
      school: "IIMT College, Aligarh",
      date: "2023 - 2026",
      grade: "Expected - 2026",
      desc: "I Am currently pursuing Bachelor of Computer Application - (BCA) from IIMT College, Aligarh. I have focused on a variety of subjects that deepened my understanding of computing and technology. I have gained practical insights into the world of web development. My time at college has allowed me to work on projects that apply theoretical concepts to real world problems. ",
      degree: "Bachelor of Computer Applications - BCA (Computer Science)",
    },
    {
      id: 2,
      img: school,
      school: "VINEET INTER COLLEGE, BEGPUR ALIGARH",
      date: "Apr 2022 - March 2023",
      grade: "65%",
      desc: "I completed my class 12 education from  Vineet inter College, Aligarh, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "UP Board(XII) - PCM",
    },
    {
      id: 3,
      img: school,
      school: "VINEET INTER COLLEGE, BEGPUR ALIGARH",
      date: "Apr 2020 - March 2021",
      grade: "74%",
      desc: "I completed my class 10 education from Vineet inter College, Aligarh, under the UP board, where I studied Science.",
      degree: "UP Board(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Aamzon UI Clone",
      description:
        "Developed a fully responsive front-end clone of the Amazon Landing Page to demonstrate proficiency in modern web styling frameworks and responsive design pricipals.",
      image: Amazon1,
      tags: ["HTML", "CSS", "Bootstrap", "GitHub"],
    },
    {
      id: 1,
      title: "My-Contact-App",
      description:
      "A modern, fully responsive web application Built to manage your real contacts web application efficiently. Solving  real-world problems with clean code.",
      image: contact,
      tags: ["javascript","React JS", "HTML", "CSS", "JavaScript","GitHub"],
      
    },
    {
      id: 2,
      title: "My-Self-portfolio-website",
      description:
       "A modern portfolio built with the power of React and the flexibility of Tailwind & Bootstrap. this site combines clean code with aesthetic design to showcase my journey as a developer.",
      image: portfolio,
      tags: ["React JS", "Tailwind", "HTML", "CSS", "JavaScript"],
     
    },
    {
      id: 3,
      title: "DataEntry & Resume Automation Tool",
      description:
        "Web-based tool using Flask that converts user-input data into a professional resume format instantly Developed an Automated.",
      image: Resume,
      tags: ["Python", "Flask", "HTML", "CSS", "GitHub"],
      
    },
    
  ];  