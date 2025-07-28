import clsx from "clsx";
import { title } from "../primitives";
import { Card, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import Image from "next/image";

const ProjectsSection = () => {
  const ProjectCards = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mt-10 px-4">
        {/* Card 1 - Worshify */}
        <Card
          style={{ backgroundImage: `url('/cards-gradient.svg')` }}
          className="border-none max-w-xl h-full flex flex-col justify-between"
          radius="lg"
        >
          <div className="flex flex-row mx-10 my-10 gap-4">
            <Image alt="Worshify" className="object-cover" height={150} src="/Dashboard -User pov.svg" width={150} />
            <Image alt="Login" className="object-cover" height={150} src="/Login.svg" width={150} />
            <Image alt="Gig User" className="object-cover" height={150} src="/giguser.svg" width={150} />
          </div>

          <CardFooter className="text-small flex flex-col bg-white">
            <b>Worshify</b>
            <p className="text-default-500 text-center">
              A mobile app that gives worship musicians and clients a platform to meet and collaborate.
              Powered by React Native, Expo, and Firebase.
            </p>
          </CardFooter>
        </Card>

      
        <Card className="border-none max-w-xl bg-[#0176ff] h-full flex flex-col justify-between" radius="lg">
          <Chip color="default">Contributed during internship</Chip>
          <div className="flex justify-center mx-10 my-10">
            <Image alt="Symph Logo" className="object-cover" height={100} src="/symphLogo.svg" width={200} />
          </div>

          <CardFooter className="text-small flex flex-col bg-white">
            <b>Internship Projects</b>
            <p className="text-default-500 text-center">
              Contributed to Flying Tigers Express website, Big GenAI, NextGenAI. Used ReactJS, NextJS, Google Cloud
              Platform, and TailwindCSS.
            </p>
          </CardFooter>
        </Card>

      
        <Card
          style={{ backgroundImage: `url('/cards-gradient.svg')` }}
          className="border-none max-w-xl h-full flex flex-col justify-between"
          radius="lg"
        >
          <Chip color="secondary">In Development</Chip>
          <div className="flex justify-center mx-10 my-10">
            <Image alt="OpenMic" className="object-cover" height={300} src="/openmic.png" width={300} />
          </div>

          <CardFooter className="text-small flex flex-col bg-white">
            <b>OpenMic</b>
            <p className="text-default-500 text-center">
              A website similar to Worshify, but for general users. Powered by ReactJS, TailwindCSS, NextJS, NestJS,
              and MongoDB.
            </p>
          </CardFooter>
        </Card>

      
        <Card
          style={{ backgroundImage: `url('/cards-gradient.svg')` }}
          className="border-none max-w-xl h-full flex flex-col justify-between"
          radius="lg"
        >
          <Chip color="primary">In-Work Project</Chip>
          <div className="flex justify-center mx-10 my-10">
            <Image alt="Accenture" className="object-cover" height={100} src="/accentureLogo.svg" width={200} />
          </div>

          <CardFooter className="text-small flex flex-col bg-white">
            <b>Client Project</b>
            <p className="text-default-500 text-center">
              Maintains and develops a business-critical web app for a global client. Part of a team that modernized
              an enterprise system using Angular, Microsoft Azure, MySQL, C#, and ASP.NET.
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <section className="flex justify-center mt-12 items-center flex-grow md:my-10 md:py-10">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center">
          <span className={clsx(title({ size: "lg" }), "text-[#0f1626]")}>
            Selected <span className={title({ color: "neonPinkPurple", size: "lg" })}>Projects</span>
          </span>
          <div className="max-w-xl text-center mt-4 text-gray-600 dark:text-gray-300">
            A collection of projects I’ve done and contributed to. Each project represents unique learnings and
            challenges.
          </div>
        </div>

        <ProjectCards />
      </div>
    </section>
  );
};

export default ProjectsSection;
