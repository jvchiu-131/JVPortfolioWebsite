import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { LinkedInIcon } from "../icons";
import Image from "next/image";
import { Button } from "@heroui/button";
import clsx from "clsx";

const HeroSection = () => {
    const [text] = useTypewriter({
        words:['Hello, I am JV!'],
                loop: false,
                typeSpeed: 70,
                deleteSpeed: 50,
                delaySpeed: 1000
      })
      return (
        <section className="md:my-10 md:py-10 mx-4 max-w-screen max-h-screen">
        <div 
        className="flex flex-col justify-around items-center md:flex-row md:px-12 md:gap-10 my-20">
          <div className="flex flex-col max-w-md items-center mb-16">
          <div>
            <div className="h-10 mb-10">
              <span className={clsx(
              title({ size: 'lg' }),
              "text-gray-300 font-semibold tracking-wide"
              )}>
                {text}
              </span>             
            </div>
            <div className={clsx(subtitle({  class: "mt-4"}), "text-gray-300 font-semibold tracking-wide")}>
              I’m a fullstack developer who loves building cool, 
              user-friendly apps with React, Next.js, NestJS, and .NET. 
              Big fan of clean code, great UI, 
              and coffee-fueled late-night builds 
            </div>
    
    
          </div>
    
          <div className="flex justify-center mt-6 gap-3">
            <Button
              className='bg-linear-to-tr from-blue-500 to-violet-500 text-white shadow-lg'
            >
              <a href="#contact">
                  Contact Me
              </a>
            </Button>
            <Button
              className="bg-linear-to-tr from-blue-500 to-blue-900 text-white shadow-lg"
            >
              <a className="flex flex-row justify-center items-center gap-1"
              href={siteConfig.links.linkedIn}>
                <LinkedInIcon size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
          </div>

           <div className="md:px-2 px-24">
            <Image
                src="/jeboy.jpg"
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