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
    "it's me Taha from Tunis. I'm a final-year software engineering student at [**_ESPRIT_**](https://esprit.tn/). Throughout my career, I have developed a strong foundation in the software development life cycle, including requirements gathering, design, implementation, and maintenance, recently interned [**_@Talan_**](https://www.linkedin.com/company/talan-tunisie/) for the summer, and i'm currently looking for **an end-of-study internship**, i'm highly collaborative and i always aim to bring my best to the team ! ",
  avatarUrl: "https://taha-bucket-v1.s3.amazonaws.com/newedit.png",
  skills: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Hugging Face Transformers",
    "AWS",
    "DevOps",
    "Spring Boot",
    "Node.js",
    "Java",
    "C++",
    "Go",
    "React",
    "Angualr",
    "Flutter",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Jenkins",
  
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        url: "hamdi.taha@esprit.tn",
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
      title: "Sofware Engineering Intern",
      logoUrl: "./talan.png",
      start: "Juin 2024",
      end: "August 2024",
      description:
        "I was fortunate to work on an innovative project aimed at detecting and treating cancer using ultrasound technology, which helps avoid invasive biopsies. Collaborating with a dedicated team at Talan Innovation Factory, I contributed to developing new solutions that focus on using ultrasound waves and biomarkers for early cancer detection and precise treatment.",
    },
    {
      company: "COFICAB",
      href: "https://www.linkedin.com/posts/hamditaha_reactjs-nodejs-mongodb-activity-7198027348510687232-IFqC?utm_source=share&utm_medium=member_desktop",
      badges: [],
      location: "On site",
      title: "Sofware Engineering Intern",
      logoUrl: "./cropped-COFICAB-LOGO-Square.png",
      start: "Jannuary 2024",
      end: "May 2024",
      description:
        "Worked on a smart web app designed for industrial energy management, focusing on real-time monitoring and optimization of energy consumption .",
    },
    {
      company: "Nursy Ai",
      href: "https://www.linkedin.com/company/nursyai/",
      badges: [],
      location: "On site",
      title: "Co Founder and Business Developer",
      logoUrl: "/nursyai_logo.jpg",
      start: "April 2023",
      end: "September 2024",
      description:
        "NursyAI is at the forefront of healthcare innovation, harnessing the power of artificial intelligence to transform the way we approach healthcare. Our cutting-edge AI solutions are designed to enhance patient care and streamline healthcare processes.",
    },
    {
      company: "ESPRIT",
      href: "https://esprit.tn/",
      badges: [],
      location: "On site",
      title: "Sofware Engineering Intern",
      logoUrl: "https://pbs.twimg.com/profile_images/1394261489054277638/rijXG1C__400x400.jpg",
      start: "May 2023",
      end: "September 2023",
      description:
        "Developed a real-time fraud detection system for financial institutions. Created a responsive front-end interface and a robust back-end system. Implemented APIs to facilitate seamless interaction with various data services.",
    },
    
    {
      company: "INCEPTUM Junior Entreprise",
      href: "p.p",
      badges: [],
      location: "On site",
      title: "Senior Project Department Member",
      logoUrl: "/inceptumje_logo.jpg",
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
      title: "Sonocure: AI for Cancer Detection",
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
      image: "/image.png",
      video:
        "https://taha-bucket-v1.s3.amazonaws.com/demo.mp4",
    },
    {
      title: "Payment Solution for Ecommerce",
      href: "",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "Microservices project featuring Configuration Servers, Service Discovery (Eureka), API Gateway, async (Kafka) and sync (OpenFeign, RestTemplate) communication, distributed tracing, security with Keycloak, and Docker infrastructure. 🛠️",
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
      image: "/payment.png",
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
      image: "/mlops.png",
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
          href: "https://github.com/tahahamdii/sign-language-application",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/sign.webp",
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
      image: "/sql.jpg",
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
      image: "/job.png",
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
      image: "/coficab.jpg",
      video:
        "pmmpm",
    },
    {
      title: "DevOps Project",
      href: "",
      dates: "Mars 2024 - May 2024",
      active: true,
      description:
      "Led a DevOps initiative to develop and deploy a Spring Boot and Angular full-stack dormmanagement system, emphasizing seamless CI/CD and cloud infrastructure.",
      technologies: [
        "Team Leadership",
        "CI/CD",
        "Docker",
        "SonarQube",
        "Jenkins",
        "Grafana ",
        "Prometheus "

        

        
      ],
      links: [
        
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/Twin6_Wizards",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/devops.png",
      video:
        "pmmpm",
    },
    {
      title: "Object Detection Using Adaptive Mask R-CNN in Optical Remote Sensing Images",
      href: "",
      dates: "Mars 2024 - May 2024",
      active: true,
      description:
      "Developed an advanced object detection model tailored for optical remote sensing images, significantly boosting detection accuracy using the Adaptive Mask R-CNN architecture.",
      technologies: [
        "Adaptive Mask R-CNN architecture",
        "deep learning",
        

        

        
      ],
      links: [
        
        {
          type: "GitHub",
          href: "https://github.com/tahahamdii/mask-rcnn-object-detection",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/object.png",
      video:
        "pmmpm",
    },
    
  ],
  
} as const;
