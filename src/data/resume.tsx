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
    "I thrive on challenges and enjoy enhancing user experiences through innovative solutions. I love building cool stuff and leveraging AI to deliver the best new solutions.",
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
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
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
      company: "p p",
      href: "p.p",
      badges: [],
      location: "Remote",
      title: " ^p p",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "p",
    }
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
