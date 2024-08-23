import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";

export const DATA = {
  name: "Taha Hamdi",
  initials: "TH",
  url: "",
  location: "Tunis, Tunisia",
  locationLink: "",
  description:
    "Software Engineer / Junior entrepreneur. ",
  summary:
    "it's me Taha from Tunis. I'm a final-year software engineering student at [**_ESPRIT_**](https://esprit.tn/).  I specialize in backend development and machine learning, recently interned [**_@Talan_**](https://www.linkedin.com/company/talan-tunisie/) for the summer, and i'm currently looking for **an end-of-study internship**, i'm highly collaborative and i always aim to bring my best to the team ! ",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEG8aHLGSwZ-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723130835252?e=1729728000&v=beta&t=f1aw007_P3S15A7aLSq4X4IiBUaZPbMNW4BPdx1ksXo",
  skills: [
    "Spring Boot",
    "Node.js",
    "Java",
    "C++",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Hugging Face Transformers",
    "XGBoost",
    "Azure Virtual Machines",
    "Azure Kubernetes Service",
    "Azure Machine Learning",
    "DevOps",

    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hamdi.taha@esprit.tn",
    tel: "+216 95092609",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tahahamdii",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hamditaha/",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      leetcode : {
        name: "LeetCode",
        url: "https://leetcode.com/tahahamdii/",
        icon: TbBrandLeetcode,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Talan Tunisia",
      href: "https://tn.talan.com/",
      badges: [],
      location: "On site",
      title: "Ai Intern",
      logoUrl: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/354048503_603407435224336_1560140732932918241_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sAJFAKDLJVwQ7kNvgGjj-u4&_nc_ht=scontent.ftun9-1.fna&oh=00_AYDu6f1OvwE4pDbnmWxNd_6M99mvtMhalsgyAAaE5elp-w&oe=66CAC29C",
      start: "Juin 2024",
      end: "August 2024",
      description:
        "I was fortunate to work on an innovative project aimed at detecting and treating cancer using ultrasound technology, which helps avoid invasive biopsies. Collaborating with a dedicated team at Talan Innovation Factory, I contributed to developing new solutions that focus on using ultrasound waves and biomarkers for early cancer detection and precise treatment.",
    },
    
    {
      company: "ESPRIT",
      href: "p.p",
      badges: [],
      location: "On site",
      title: "Intern in Neurogaming and Pathfinding",
      logoUrl: "https://pbs.twimg.com/profile_images/1394261489054277638/rijXG1C__400x400.jpg",
      start: "May 2023",
      end: "September 2023",
      description:
        "I was lucky enough to intern on a super cool Neurogaming and Pathfinding project, working with Rim Somaii. During this time, I got to jump in and help out with different parts of the project, using what I know about game development and deep learning.",
    },
    {
      company: "INCEPTUM Junior Entreprise",
      href: "p.p",
      badges: [],
      location: "On site",
      title: "Senior Member",
      logoUrl: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/120766494_2744481162537655_8929039621265870715_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=yGEU5ZoISSUQ7kNvgFpirP5&_nc_ht=scontent.ftun9-1.fna&oh=00_AYA51XgdwvHuHsg47omaW7tzC0-XE-Heu-0Y00Wrsw3vGw&oe=66EC6979",
      start: "September 2023",
      end: "Present",
      description:
        "I've had the chance to dive into an awesome community of tech lovers and professionals. It's been an amazing experience, helping me learn so much more and make great connections with people who share my interests",
    },
    
  ],
  education: [
    {
      school: "IPEIM Monastir",
      href: "https://ipeim.rnu.tn/",
      degree: "Preparatory Cycle for Engineering",
      logoUrl: "https://ipeim.rnu.tn/stylesheets/images/logo-white.png",
      start: "2019",
      end: "2022",
    },
    {
        school: "ESPRIT",
        href: "https://esprit.tn/",
        degree: "Software Engineering degree",
        logoUrl: "https://pbs.twimg.com/profile_images/1394261489054277638/rijXG1C__400x400.jpg",
        start: "2022",
        end: "2025",
      }
  ],
  projects: [
    {
      title: "Sonogenetics",
      href: "",
      dates: "Juin 2024 - August 2024",
      active: true,
      description:
      "I worked with Talan Tunisie on a project that uses AI and sonogenetics to detect and treat cancer without painful biopsies. The AI adjusts ultrasound settings for each patient, improving diagnosis and treatment. The system gets better over time by learning from different cases.",
      technologies: [
        "ML",
        "DL",
        "NLP",
        "Computer Vision",
        "TensorFlow",
        "PyTorch",
        "Angular",
        "Node.js",
        "Jenkins",
      ],
      links: [
        
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/Backend-EnergyG",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "https://sharedby.blomp.com/jTb7Rl",
    },
    {
      title: "Payment Solution for Ecommerce",
      href: "",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "microservices project showcasing : #ConfigurationServers, #ServiceDiscovery (Eureka), #APIGateway (Spring Cloud Gateway), #AsynchronousCommunication (Kafka), #SynchronousCommunication (OpenFeign, RestTemplate), #DistributedTracing (Zipkin, Spring Actuator), #Security (Keycloak), and infrastructure setup with #Docker and #DockerCompose.",
      technologies: [
        "Sprin Boot",
        "Java",
        "Kafka",
        "Eureka",
        "Zipkin",
        "Keycloak",
        "Docker"
        
      ],
      links: [
     
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/Payment-Solution-for-Ecommerce",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "aa",
    },
    {
      title: "Adenocarcinoma Detection",
      href: "",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "focusing on detecting and analyzing adenocarcinoma using advanced deep learning techniques. It includes a complete #MLOps pipeline with #MLflow and #DVC for managing models, along with #CI/CD for smooth deployment.",
      technologies: [
        "Machine Learning",
        "Deep Learning",
        "Python",
        "MLflow",
        "DVC",
        "CI/CD",
        "Docker",
        "MLOps"

        
      ],
      links: [
        
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/OncoFlow-Deep-Learning-MLOps-for-Adenocarcinoma",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "pmmpm",
    },
    {
      title: "Real-Time Sign Language Communication App",
      href: "",
      dates: "April 2024 - Juin 2024",
      active: true,
      description:
      "I worked on a freelance project for a startup, developing an app with a TensorFlow-based sign language detection system integrated into a Spring Boot backend. The app ensures secure communication and real-time messaging via WebSocket. The Flutter front-end allows users to communicate through sign language, which is detected, refined by the OpenAI API, and delivered instantly. The app also features a Jenkins pipeline for CI CD",
      technologies: [
        "Spring Boot",
        "JWT",
        "WebSocket",
        "TensorFlow",
        "Flutter",
        "OpenAI",
        "Jenkins",
        "CI/CD",
        "Docker",
        

        
      ],
      links: [
        
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/SignLanguageProject",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "pmmpm",
    },
    {
      title: "Natural Language Database Interaction App",
      href: "",
      dates: "Mars 2024 - April 2024",
      active: true,
      description:
      "I developed a Python chat app that lets users communicate with their database using natural language. Integrated with MySQL, OpenAI, and Langchain, the app provides SQL queries and explanations through an easy-to-use interface.",
      technologies: [
        "Python",
        "MySQL",
        "OpenAI",
        "Langchain",

        

        
      ],
      links: [
        
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/SQLine",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/image.png",
      video:
        "",
    },
    {
      title: "Modern Job Portal",
      href: "",
      dates: "Jannuary 2024 - Mars 2024",
      active: true,
      description:
      "job portal similar to LinkedIn where users can apply for jobs.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Redux",
        "MongoDB",
        "JWT",
        "Docker",

        

        
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/JobPortal",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "pmmpm",
    },
    {
      title: "Energy Guard",
      href: "",
      dates: "Jannuary 2024 - April 2024",
      active: true,
      description:
      "I worked on The Energy Guard project with Coficab, a manufacturer, where I developed a web application for comprehensive industrial energy management. The app integrates IoT sensors on machines to monitor and analyze energy usage. It also incorporates a machine learning model to predict energy consumption and suggests best practices for reducing it",
      technologies: [
        "Node.js",
        "Express",
        "IoT",
        "Machine Learning",
        "React",
        "Chart.js",
        "WEbsockets",
        "Docker",
        "Jenkins",

        

        
      ],
      links: [
        
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/Backend-EnergyG",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "pmmpm",
    },
    
  ],
  
} as const;
