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
      <div
      className="bg-center bg-cover bg-no-repeat"
       style={{
          backgroundImage: `url('/wavy-gradient.svg')`,
        
        }} >
          <HeroSection/>
      </div>
      <div 
      className="bg-center bg-cover bg-no-repeat"
       style={{
          backgroundImage: `url('/wave-gradient.svg')`,
        
        }}>
      <AboutSection/>
      </div>
      <div className="bg-center bg-cover bg-no-repeat"
       style={{
          backgroundImage: `url('/blured.svg')`,
        
        }}>
          <ExperienceSection/>
      </div>
    
      <ProjectsSection/>

      <div className="bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/contactsbg.svg')`
      }}
      >
        <ContactSection/>
      </div>

    </div>
  )
}

export default Home

