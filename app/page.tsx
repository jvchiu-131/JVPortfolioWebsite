'use client'

// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";
// import { Typewriter, useTypewriter } from "react-simple-typewriter";
// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
import HeroSection from "@/components/home/hero"
import AboutSection from "@/components/home/about"
import ExperienceSection from "@/components/home/experience"
import ProjectsSection from "@/components/home/projects"
import ContactSection from "@/components/home/contact"

const Home = () => {

    return(
    <div className="flex flex-col flex-grow">
      <HeroSection/>
      <AboutSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>

    </div>
  )
}

export default Home

