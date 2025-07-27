import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { LinkedInIcon } from "../icons";
import Image from "next/image";

const HeroSection = () => {
    const [text] = useTypewriter({
        words:['Hello, I am JV'],
                loop: false,
                typeSpeed: 70,
                deleteSpeed: 50,
                delaySpeed: 1000
      })
      return (
        <section className="md:my-10 md:py-10 max-w-screen max-h-screen">
        <div className="flex justify-around items-center md:px-14 md:gap-10 my-20">
          <div className="flex flex-col max-w-md items-center">
          <div>
            <div className="h-10 mb-10">
              <span className={title({ color: "neonPinkPurple", size: 'lg'})}>
                {text}
              </span>             
            </div>
            <div className={subtitle({ class: "mt-4" })}>
              I’m a fullstack developer who loves building cool, 
              user-friendly apps with React, Next.js, NestJS, and .NET. 
              Big fan of clean code, great UI, 
              and coffee-fueled late-night builds 
            </div>
    
    
          </div>
    
          <div className="flex justify-center mt-6 gap-3">
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href="#contact"
            >
              Contact Me
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.linkedIn}
            >
              <LinkedInIcon size={20} />
              LinkedIn
            </Link>
          </div>
          </div>

           <div>
            <Image
                src="/jeboy.jpg" // or from public folder
                alt="My Profile"
                width={500}
                height={500}
                className="rounded-4xl"
            />
          </div>
        </div>
        </section>
      );
}

export default HeroSection