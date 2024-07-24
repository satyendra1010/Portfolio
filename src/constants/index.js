import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project 5.png";

export const MAIN = `Dedicated full-stack developer with 2+ years of experience in building scalable, high-performance web applications. Proficient in modern frontend and backend technologies, cloud services, and DevOps practices. Skilled in optimizing application performance, implementing microservices architectures, and ensuring robust security measures.`;

export const ABOUT_TEXT = `I'm a full-stack developer with a passion for solving complex problems through code. With 2+ years of experience, I've honed my expertise in React, Next.js, Node.js, MySQL, Python, and MongoDB. My journey began with curiosity about how things work and evolved into a career where I constantly seek new challenges.
I thrive in the realms of web development, cloud computing, distributed systems, computer vision, and data visualization. My approach combines creativity with analytical thinking to craft effective, user-friendly solutions. I'm always eager to learn, adapt, and push the boundaries of what's possible in tech.
Whether it's optimizing performance, enhancing user experience, or ensuring robust security, I bring more than just coding skills to the table. I'm a communicator, a collaborator, and a developer who turns complex concepts into elegant solutions. Let's build something amazing together!`;

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
    title: "Algorithm Visualizer",
    image: project5,
    description:
      "Created a dynamic sorting algorithm visualizer using Next.js 14 and TypeScript for educational purposes.",
    technologies: ["Next.js"],
    link: "https://satyendra1010.github.io/algorithm-visualizer/",
  },
  {
    title: "Crypto Wallet",
    image: project3,
    description:
      "Utilized Reactjs and solidity to develop a decentralized application (DApp) for Ethereum Wallet, incorporating blockchain technology.",
    technologies: ["React", "Solidity"],
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
  description:
    "Let's grab a coffee and discuss how we can create something amazing together!",
  phoneNo: "+1 6692829288",
  email: "satyendra1010@gmail.com",
};
