import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import Markdown from "react-markdown";
import EmblaCarousel from "../components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import '../app/css/embla.css'
import { ProjectCard } from "@/components/project-card";
import { PinContainer } from "@/components/ui/3d-pin";
import img from '../data/location.jpg'
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Badge } from "@/components/ui/badge";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MarqueeDemo1 } from "@/components/MarqueeDemo copy";
import { TbBrandLeetcode } from "react-icons/tb";
import { CardDemo } from "@/components/magicui/CardDemo";
import SparklesText from "@/components/magicui/sparkles-text";
import Meteors from "@/components/ui/meteors";
import AnimatedNavbar from "@/components/new/AnimatedNavbar";




const BLUR_FADE_DELAY = 0.4;
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function Home() {
  return (
    <div>
      
    <AnimatedNavbar/>
    
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      
      <section id="hero">

        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
            {/* <Meteors number={10} /> */}

              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`hi i'm taha `}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl italic"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/tahahamdii" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl hover:text-gray-600" />
                </a>
                <a href="https://linkedin.com/in/hamditaha" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-gray-600" />
                </a>
                <a href="https://medium.com/@hamdi.taha" target="_blank" rel="noopener noreferrer">
                <FaMedium className="text-xl hover:text-gray-600" />
                </a>
                <a href="mailto:hamdi.taha@esprit.tn" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-xl hover:text-gray-600" />
                </a>
                <a href="https://leetcode.com/u/tahahamdii" target="_blank" rel="noopener noreferrer">
                <TbBrandLeetcode className="text-xl hover:text-gray-600" />
                </a>
              
                </div>

                </BlurFade>
            </div>
            
            
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            
          </div>
          
        </div>
        
      </section>
            
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
          
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>

        <div>
      <a href="https://taha-bucket-v1.s3.amazonaws.com/SonocureArticle.pdf" target="_blank" rel="noopener noreferrer">
        <SparklesText text="check out my last research paper " />
      </a>
    </div>
            </BlurFade>

      </section>
      <section>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <MarqueeDemo1/>
      </BlurFade>
      </section>
      {/* <section className="rounded-2xl">
        <div className="flex min-h-0 flex-col gap-y-3 ">
          <BlurFade delay={BLUR_FADE_DELAY * 5} >
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </BlurFade>

        </div>
      </section> */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 7 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have built everything from straightforward websites
                  to advanced web apps.
                  Here are some of the projects Im most excited about.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section>
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <MarqueeDemo/>
      </BlurFade>
      </section>
      
      
      <section id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 text-center md:px-6 w-full py-0">
          <div className="space-y-3 col-span-1 mt-12">
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <div className="space-y-3 mt-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="text-base font-normal tracking-tight font-sans italic">

            Im currently looking for new opportunities, my inbox is always open.
          </p>
          <p className="text-base font-normal tracking-tight font-sans">
      <a 
        href="mailto:hamdi.taha@esprit.tn" 
        className="text-blue-500 hover:underline italic"
      >
        
        hamdi.taha@esprit.tn
      </a>
      </p>
        </div>
        </BlurFade>
    </div>
    <BlurFade delay={BLUR_FADE_DELAY * 10}>
    <div className="col-span-1 flex justify-center items-center">
      <PinContainer title="+216 95 092 609">
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/4 w-[10rem] h-[10rem] relative z-10">
          <Image
            src={img}
            alt="aa"
            layout="fill"
            objectFit="cover"
            className="rounded-lg z-0"
          />
          <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
    </BlurFade>

    
  </div>
</section>
  


    </main>
    </div>
  );
}
