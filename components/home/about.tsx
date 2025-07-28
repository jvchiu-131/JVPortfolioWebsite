import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode'
import Image from 'next/image';
import { title, subtitle } from "@/components/primitives";
import {Card, CardHeader, CardFooter} from "@heroui/card"
import clsx from 'clsx';


const AboutSection = () => {

    const Cards = () => {
        return (
        <div className="max-w-screen-xl w-screen px-4 gap-2 grid grid-cols-12 grid-rows-2">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">A GDSC Member</p>
          <h4 className="text-white font-medium text-large">Executive Technical Officer</h4>
        </CardHeader>
        
        <Image
          height={300}
  width={400}
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src='/gdscgdscjboy.jpg'
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">COLLABORATIVE IN WORK</p>
          <h4 className="text-white font-medium text-large">Contributes to others</h4>
        </CardHeader>
        <Image
        height={300}
  width={400}
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src='/gdscJeboy.jpg'
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">An IT Graduate</p>
          <h4 className="text-white font-medium text-large">Graduated with degree in BSIT</h4>
        </CardHeader>
        <Image
         height={300}
  width={400}
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src='/jboypremium.jpg'
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">ENJOYS WORK LIFE BALANCE</p>
          <h4 className="text-white/90 font-medium text-xl">Work hard, play hard</h4>
        </CardHeader>
        <Image
     height={300}
  width={400}
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src='/jboypromax.jpg'
        />
        
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">CURIOUS</p>
          <h4 className="text-white/90 font-medium text-xl">Curious on how things work</h4>
        </CardHeader>
        <Image
         height={300}
  width={400}
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src='/jeboys.jpg'
        />
       
      </Card>
    </div>
        )
    }

    const Carousel = () => {
    return (
    <Swiper
      modules={[Autoplay, FreeMode]}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  loop={true}
  speed={4000}
  slidesPerView={7}
  freeMode={true}
  spaceBetween={30}
  allowTouchMove={false}
      grabCursor={false}
    >
        
        <SwiperSlide>
        <Image
        src="./reactIcon.svg"
        alt='React'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./nestjs-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./nextjs-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./node-js-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./aspnet-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./csharp-svgrepo-com (1).svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./expo-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./github-142-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./java-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./microsoft-azure-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./mongodb-logo-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>

        <SwiperSlide>
        <Image
        src="./mysql-logo-svgrepo-com.svg"
        alt='NestJS'
        width={60}
        height={60}
        draggable='false'
        />
        </SwiperSlide>
        
     
    </Swiper>
    )
    }

    return (
        <section className="md:py-10 w-screen">
            
            <div className='flex justify-center items-center my-5 mx-2 '>
                <Carousel/>
            </div>
            <div className='flex flex-col justify-center items-center mt-24'>
                <div>
                    <div className="h-10 mb-20 flex justify-center items-center">
                        <span className={clsx(title({size: 'lg'}), "text-[#0f1626]")}>
                            A little bit <span className={title({ color: "neonPinkPurple", size: 'lg'})}>About Me</span>
                        </span>             
                    </div>
                    
                </div>
                <div className='md:max-w-4xl flex justify-center items-center'>
                            <Cards/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;