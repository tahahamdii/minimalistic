import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Taha Hamdi",
  initials: "TH",
  url: "",
  location: "Tunis, Tunisia",
  locationLink: "",
  description:
    "Software Engineer ",
  summary:
    "Hey there! I'm Taha from Tunis Tunisia. I’m a Software Engineer who loves coding, swimming, and making new friends wherever I end up. I specialize in backend development and machine learning, focusing on building reliable systems and exploring the cool stuff in AI.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEG8aHLGSwZ-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723130835252?e=1729728000&v=beta&t=f1aw007_P3S15A7aLSq4X4IiBUaZPbMNW4BPdx1ksXo",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
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
      title: "p1",
      href: "https://dub.sh/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "kkkkkk.",
      technologies: [
        "Next.js",
        
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "pmmpm",
    }
  ],
  
} as const;
