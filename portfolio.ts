import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  // FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Tianyu Zhang",
  title: "Hi all, I'm Terry located in Dublin, Ireland",
  description:
    "I'm a CS graduate at Trinity College Dublin, and I had experience developing Full Stack web applications with Python, Golang, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "RookieTerry",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:zhangt8@tcd.ie",
  linkedin: "https://www.linkedin.com/in/tianyuzhang-cn/",
  github: "https://github.com/RookieTerry",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive static websites using React.js and Vue.js"),
        emoji("⚡ Building RESTful APIs in Python Flask & Java SpringBoot Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Spring Framework",
          iconifyTag: "logos:spring",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "English", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Mandarin Chinese",
    progressPercentage: "100",
  },
  {
    Stack: "Programming",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Trinity College Dublin, The University of Dublin",
    subHeader: "Master of Science in Computer Science",
    duration: "September 2024 - Present",
    desc: "Future Networks Systems strand",
    grade: "Upper Second Class (Expected)",
    descBullets: ['Advanced Software Engineering', 'Distributed Systems', 'Internet of Things', 'Scalable Computing', 'Urban Computing'], // Array of Strings
  },
  {
    schoolName: "Wuhan University of Science and Technology & Birmingham City University",
    subHeader: "Bachelor of Engineering in Network Engineering",
    duration: "September 2020 - July 2024",
    desc: "Joint Degree Programme",
    grade: "Upper Second Class",
    descBullets: ['Computer Networks', 'Data Structure and Algorithm', 'Java EE Architecture', 'Python Programming', 'Routing & Network Switched Technology'], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Network Engineer Intern",
    company: "FiberHome Communication (Wuhan Headquarter)",
    companyLogo: "/img/icons/common/FiberHome.jpg",
    date: "Oct 2023 - Nov 2023",
    descBullets: [
      "Deployed a state-of-the-art SPN network in an elastic cloud environment using 5G technologies and Flexible Ethernet, configuring 5G base stations, routers supporting the ISIS protocol, and MPLS VPN.",
      "Implemented a modern enterprise network utilizing FiberHome\'s CITRANS 650 series hardware, ensuring seamless functionality.",
    ]
  },
  {
    role: "Binary Security Researcher Intern",
    company: "Institute of Software, Chinese Academy of Sciences",
    companyLogo: "/img/icons/common/ISCAS.jpg",
    date: "Jun 2022 - Sept 2022",
    descBullets: [
    	"Leveraged AFL (American Fuzzy Lop) for white-box and black-box testing of PC-side applications.",
    	"Conducted white-box testing on open-source applications' source code to uncover buffer overflow vulnerabilities using AFL's genetic detection algorithm.",
      "Employed IDA Pro for disassembly and modification, conducting black-box testing on 64-bit exe programs in QEMU and numb modes.",
      "Delivered comprehensive application security assessments and recommendations to enhance software security."
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Location-Based Weather Condition Map",
    desc: "Developed a weather information API using Python and Node.js, with data stored in Google Firebase. Utilized CORS middleware for cross-origin resource sharing. Created a dynamic frontend deployed on Vercel, using ECharts for interactive data visualization and Material UI for a modern user interface. Integrated RESTful APIs to display current and historical weather conditions of the user's location as interactive graphs. Deployed backend services on Heroku for scalability and high availability. Conducted API testing and debugging with Postman, utilizing log analysis for error resolution and application stability. Designed and implemented backend APIs, managing deployment environments to ensure seamless application performance.",
    link: "https://weather-condition-map.vercel.app",
    github: "https://gitlab.scss.tcd.ie/zhangt8/weatherconditionmap"
  },
  {
    name: "A Technology Intelligence Knowledge Organization System Based on Knowledge Graph",
    desc: "Engaged in a state-of-the-art project under a lab affiliated with China Institute of Scientific and Technological Information, I spearheaded the back-end development of a sophisticated Intelligence Knowledge Organization System leveraging a knowledge graph, advanced NLP techniques, and bespoke web scraping tools. Initially, I engineered a robust multi-thread web crawler to methodically extract critical datasets from scholarly websites across finance,legal,tourism and medical fields, persisting the data into a structured MySQL database. Subsequently, I crafted RESTful APIs in Java and Python frameworks for group members working on front-end development, facilitating seamless data retrieval for front-end integration, thereby ensuring a robust and responsive back-end architecture for the system.",
    link: "#",
  },
  {
    name: "Malicious Data Flow Control System within Software Defined Network",
    desc: "Drove the creation of a sophisticated malicious data flow control system within the context of the floodlight controller framework. This endeavour comprised two critical modules: the link flow detection and data flow detection decision-making components. The link traffic detection module routinely gathered statistical data from switch edge ports, monitored traffic patterns, and adjusted system states in response to predefined thresholds. The data flow detection and decision-making modules maintained IP address pairs, skilfully processing incoming data packets and rendering decisions based on the system's status.",
    github: "https://github.com/RookieTerry/SDN-FlowControl",
  },
  {
    name: "A Simple FTP Software",
    desc: "Implemented a client-server architecture using Python sockets module and FTP protocol. Deployed authentication and encryption for secure user login. Developed file upload/download functionalities with real-time progress tracking. Enabled Unix-like command support for file operations on the server. Designed a server dashboard to display user status and file transmission progress.",
    github: "https://github.com/RookieTerry/SimpleFTPSoftware",
  },
  {
    name: "My Personal Blog",
    desc: "It is a blog website that I built using Hexo. I have written blogs about my projects, past experiences, and some tutorials. I have also integrated a comment section using Twikoo and Mailgun. The website is deployed on Netlify and specially optimized for Mainland China.",
    link: "https://hackerterry.netlify.app",
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Tianyu Zhang's Portfolio",
  description: greetings.description,
  author: "Tianyu Zhang",
  image: "https://avatars.githubusercontent.com/u/77920425?v=4",
  url: "https://www.scss.tcd.ie/~zhangt8",
  keywords: [
    "Tianyu",
    "Terry",
    "Tianyu Zhang",
    "@RookieTerry",
    "RookieTerry",
    "Portfolio",
    "Tianyu Portfolio",
    "Tianyu Zhang Portfolio",
  ],
};
