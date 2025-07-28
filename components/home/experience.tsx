import {Card, CardHeader, CardFooter, CardBody} from "@heroui/card"
import { title, subtitle } from "@/components/primitives";
import { useState } from "react";
import Image from "next/image";


const ExperienceSection = () => {

    const ExperienceCard = () => {

        const [selected, setSelected] = useState('all');

        const experiences = [
            {
                company: 'Symph',
                role: 'Web Developer Intern',
                period: 'Jan 2024 - Jul 2024',
                description:
                'Symph Inc. is a Cebu City-based software company founded in 2010, with 50-100 team members',
                logo: '/symphLogo.svg',
            },

            {
                company: 'Accenture',
                role: 'Associate Software Engineer',
                period: 'August 2024 - Present',
                description:
                'Accenture is a global professional services company that provides IT services, consulting, digital transformation, technology, and operations services to businesses, governments, and organizations around the world',
                logo: '/accentureLogo.svg',
            },

        ]

        return(
        <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-3xl w-full py-6"
        shadow="sm"
        >
      <CardBody>
        <div className="relative border-l-2 border-gray-700 ml-12 pl-20 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Circular Logo Badge */}
              <div className="absolute -left-26 w-12 h-12 rounded-xl bg-black flex items-center justify-center overflow-hidden">
                <Image src={exp.logo} alt={exp.company} width={48} height={48} />
              </div>

              {/* Experience Content */}
              <div>
                <h3 className="text-lg font-semibold text-[#0f1626]">{exp.company}</h3>
                <p className="text-sm text-gray-900">{exp.role}</p>
                <p className="text-sm text-gray-700 mb-2">{exp.period}</p>
                <p className="text-sm text-gray-500">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
        )
    }


    return (
        <section className="flex flex-col justify-center items-center max-w-screen max-h-screen my-24 mb-32 mx-12">
            <div className="mb-20">
                <span className={title({size: 'lg'})}>
                    Profesional <span className={title({ color: "neonPinkPurple", size: 'lg'})}>Experience</span>
                </span>
            </div>
            
            <div>
                 <ExperienceCard/>
            </div>
        </section>
    )
}

export default ExperienceSection