import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const MAIN = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, Python, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated full-stack developer with a love for designing effective and user-friendly web applications. Having 2 years of professional background enabled me to enhance my expertise in using various technologies like React, Next.js, Node.js, MySQL, Python and MongoDB. My venture into web development started with a strong interest in understanding how things operate, and it has transformed into a profession where I always aim to improve and face different challenges.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Ylytic",
    description: `Led the full-stack development of Ylytic.com using Next.js and Flask, focusing on distributed system design to enhance user registration and analytics dashboards.Automated build and deployment processes using Jenkins and Docker, optimizing multi-threading and distributed system operations.`,
    technologies: ["React.js", "Next.js", "mongoDB", "Flask", "Python"],
  },
  {
    year: "2021",
    role: "Software Engineer Intern",
    company: "Greendzine",
    description: `Engineered a real-time warehouse inventory management application using Reactjs, Nodejs, and MongoDB. Developed an object detection tool using OpenCV and integrated it with the WMS application.`,
    technologies: ["React.js", "Next.js", "mongoDB", "Flask", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Marketplace Application",
    image: project1,
    description:
      "Designed and developed a virtual marketplace application enabling secure transactions, with a full-stack React-Django-MongoDB architecture that enables buyers to purchase used items and sellers to post ads.",
    technologies: ["React", "Django", "MongoDB"],
  },
  {
    title: "DigitizeDoc Engine",
    image: project2,
    description:
      "Created a web application to digitize documents and store content on the cloud, deployed on AWS with ElasticSearch integration for efficient querying and analysis.",
    technologies: ["React", "AWS", "Python"],
  },
  {
    title: 'Crypto Wallet',
    image: project3,
    description: 'Utilized Reactjs and solidity to develop a decentralized application (DApp) for Ethereum Wallet, incorporating blockchain technology.',
    technologies: ["React", "Solidity"]
  },
  {
    title: "Try On",
    image: project4,
    description:
      "Developed an advanced Virtual Try-On system incorporating Augmented Reality (AR) and machine learning to revolutionize online shopping by allowing customers to view clothes in real-time.",
    technologies: ["React", "Python"],
  },
];

export const CONTACT = {
  description: "Let's grab a coffee and discuss how we can create something amazing together!",
  phoneNo: "+1 6692829288",
  email: "satyendra1010@gmail.com",
};
