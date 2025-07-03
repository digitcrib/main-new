'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactFormButton from "@/components/ContactFormButton";
import RoadmapCarousel from "@/components/RoadmapCarousel";
import ErrorPage from '@/components/ErrorPage';


import HeroText from "@/components/HeroText";
import HeroImg from '/public/home/hero-image.svg';
import GShopIco from '/public/GShop.svg';
import FiveStarIco from "/public/5Star.svg";
import BgIcon from '/public/home/about-digitcrib/bg-icon.svg';
import WCUImg1 from "/public/home/why-choose-us/WCU-Picture-1.svg";
import WCUImg2 from "/public/home/why-choose-us/WCU-Picture-2.svg";
import WCUImg3 from "/public/home/why-choose-us/WCU-Picture-3.svg";
import WCUImg4 from "/public/home/why-choose-us/WCU-Picture-4.svg";
import SplashScreen from '@/components/SplashScreen';
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer); 
  }, []);

  return (

    <>

      <ErrorPage/>

      <div className='md:hidden'>

        {isLoading ? (

          <SplashScreen/>

        ) : (

          <div>

            <Navbar />

              <section className="pt-4 pb-8 bg-[#FFFFFF]">
                <div className="flex flex-col items-center justify-between gap-8">
                  <HeroText classname="px-4"/>
                  <div className="w-full flex justify-center items-center h-[26rem] relative px-8">
                    <HeroImg className="absolute -top-[8px] pointer-events-none" alt="Hero Image" />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-8  px-8">
                    <p className="font-Inter font-normal text-base text-center">We're a passionate team of creatives and strategists committed to designing impactful digital experiences. At Digitcrib, we help your business stand out with bespoke web solutions that deliver results.</p>
                    <ContactFormButton text={"BECOME OUR CLIENT"} />             
                  </div>  
                  <div className="flex justify-center items-center gap-x-2">
                    <GShopIco className="pointer-events-none" />
                    <p className="font-Inter font-normal text-base">Trusted by over 100+ customers</p>
                    <FiveStarIco className="pointer-events-none" />
                  </div>          
                </div>
              </section>

              <section className="px-4 py-16 bg-[#373737]" id='our-services'>
                <div className="flex flex-col items-center justify-center gap-10">
                  <div className="text-white">
                    <h2 className="uppercase font-Bebas_Neue text-5xl mb-2">Our Services</h2>
                    <p className="font-Inter text-base">Our approach is value-driven, result-oriented, and tailored to your goals. We go above and beyond to ensure you leverage the latest technology for business success.</p> 
                  </div>
                  <div className="grid grid-cols-1 justify-items-center content-center gap-10 text-black">
                    <div className="bg-[#FFFFFF] p-6 rounded-2xl shadow-our_services_card">
                      <h3 className="font-Bebas_Neue text-[40px]">01. UI/UX Designing</h3>
                      <p className="font-Inter text-base leading-[140%]">At Digitcrib, we craft visually compelling and user-friendly designs that transform ideas into seamless digital experiences. Our UI/UX design services are tailored to solve real-world problems, drive engagement, and ensure your audience connects with your brand effortlessly</p>
                    </div>
                    <div className="bg-[#FFFFFF] p-6 rounded-2xl shadow-our_services_card">
                      <h3 className="font-Bebas_Neue text-[40px]">02. Web Development</h3>
                      <p className="font-Inter text-base leading-[140%]">At Digitcrib, we craft visually compelling and user-friendly designs that transform ideas into seamless digital experiences. Our UI/UX design services are tailored to solve real-world problems, drive engagement, and ensure your audience connects with your brand effortlessly</p>
                    </div>
                    <div className="bg-[#FFFFFF] p-6 rounded-2xl shadow-our_services_card">
                      <h3 className="font-Bebas_Neue text-[40px]">03. Digital Marketing</h3>
                      <p className="font-Inter text-base leading-[140%]">At Digitcrib, we craft visually compelling and user-friendly designs that transform ideas into seamless digital experiences. Our UI/UX design services are tailored to solve real-world problems, drive engagement, and ensure your audience connects with your brand effortlessly</p>
                    </div>
                    <ContactFormButton text={"LEARN MORE"} />
                  </div>
                </div>
              </section>

              <section className="px-4 py-16 bg-[#FFFFFF]">
                <div className="flex flex-col items-center justify-center gap-10">
                  <h2 className="uppercase font-Bebas_Neue text-5xl text-center mb-2">Why Choose us</h2>
                  <div className="grid grid-cols-1 justify-items-center content-center gap-10">
                    <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                      <WCUImg1 className="w-full h-auto pointer-events-none" />
                      <div className="font-Bebas_Neue font-normal text-3xl mt-2">2 Years +</div>
                      <p className="font-Inter text-base">Industry Experience </p>
                    </div>
                    <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                      <WCUImg2 className="w-full h-auto pointer-events-none" />
                      <div className="font-Bebas_Neue font-normal text-3xl mt-2">Over 10's of</div>
                      <p className="font-Inter text-base">successful projects delivered.</p>
                    </div>
                    <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                      <WCUImg3 className="w-full h-auto pointer-events-none" />
                      <div className="font-Bebas_Neue font-normal text-3xl mt-2">100%</div>
                      <p className="font-Inter text-base">Custom build solution tailored to your vision</p>
                    </div>
                    <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                      <WCUImg4 className="w-full h-auto pointer-events-none" />
                      <div className="font-Bebas_Neue font-normal text-3xl mt-2">Personal Connection</div>
                      <p className="font-Inter text-base">We focus on building good connection with all our clients.</p>
                    </div>                    
                  </div>
                </div>
              </section>

              <section className="pt-16 bg-[#F68333]" id='our-portfolio'>
                <div className="w-full flex flex-col items-center justify-center gap-6 overflow-x-hidden">
                  <div className=" px-8 ">
                    <h2 className="uppercase text-white font-Bebas_Neue text-6xl text-center mb-2">Our Portfolio</h2>
                    <p className="font-Inter text-base text-center">Work that speaks for itself</p>
                  </div> 
                  <div className="w-[80rem] h-[36rem]">
                    <video className="w-full h-[36rem] aspect-auto bg-transparent pointer-events-none" src="/home/our-portfolio.webm" loop autoPlay muted />
                  </div>              
                </div>
              </section>
            
              <section className=" bg-[#F68333] pt-12 relative" id='about'>
                <BgIcon className="absolute z-0 -top-8 right-0 pointer-events-none" />
                <div className="flex flex-col items-start justify-center gap-10 px-4">
                  <div className="z-10">
                    <h2 className="w-2/3 uppercase font-Bebas_Neue text-6xl leading-[100%] text-white">About Digitcrib</h2>
                    <p className="font-Inter text-base">Where Passion Meets Innovation</p>
                  </div>
                  <p className="font-Inter font-medium text-base z-10">
                    Digitcrib is a collective of passionate designers and developers dedicated to helping businesses thrive online. From branding to advanced web solutions, we are more than just an agency—we're your strategic partners in growth.
                  </p>
                </div>
                <Image className="w-full h-auto pointer-events-none" src="/home/about-digitcrib/about-vector-image.png" alt="vector image of a guy with a tea cup and a woman waving her hand" width="426" height="464" />
              </section>
            
              <section className="px-4 pt-16 bg-[#FFFFFF] flex flex-col gap-y-10">
                  <h2 className="uppercase font-Bebas_Neue text-5xl">Easy 4 - STEP <br/> Roadmap <span className="text-[#F68333]">to</span> Success</h2>
                  <div>
                    <RoadmapCarousel />
                  </div>
              </section>

              <section className="px-4 py-16 bg-[#FFFFFF]" id='faq'>
                <div className="flex flex-col items-center justify-center gap-10">
                  <h2 className="leading-[42px] uppercase font-Inter font-extrabold text-[42px] text-center">Asked Questions</h2>
                  <div className='accordion-group p-4 shadow-lg rounded-2xl border border-gray-300' data-accordion="default-accordion">
                    <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                    >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">What makes our agency different from other startup development agencies?</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='font-Inter text-[#7B7583] font-normal text-lg'>
                        We stand out by offering comprehensive support. We go beyond just website or app development, providing services like legal guidance, marketing branding, and ongoing growth strategies. We're your one-stop shop for success!
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">What stage of startups do you typically work with? </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='font-Inter text-[#7B7583] font-normal text-lg'>
                          Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">What kind of websites and applications do you develop?</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='font-Inter text-[#7B7583] font-normal text-lg'>
                          Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">How do you help me market and brand my startup effectively? </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='font-Inter text-[#7B7583] font-normal text-lg'>
                          Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">How do you communicate and collaborate with your clients? </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='font-Inter text-[#7B7583] font-normal text-lg'>
                          Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">How much does it cost to work with your agency?</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='font-Inter text-[#7B7583] font-normal text-lg'>
                          Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    </Accordion>                   
                  </div>
                </div>
              </section>

            <Footer />

          </div>

        )}

      </div>

    </>

  );
}
