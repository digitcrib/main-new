'use client';

import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactFormButton from "@/components/ContactFormButton";
import RoadmapCarousel from "@/components/RoadmapCarousel";

import HeroText from "@/components/HeroText";
import HeroImg from '/public/home/hero-image.svg';
import GShopIco from '/public/GShop.svg';
import FiveStarIco from "/public/5Star.svg";
import BgIcon from '/public/home/about-digitcrib/bg-icon.svg';
import WCUImg1 from "/public/home/why-choose-us/WCU-Picture-1.svg";
import WCUImg2 from "/public/home/why-choose-us/WCU-Picture-2.svg";
import WCUImg3 from "/public/home/why-choose-us/WCU-Picture-3.svg";
import WCUImg4 from "/public/home/why-choose-us/WCU-Picture-4.svg";


export default function Home() {
  return (

    <>

      <Navbar />

      <>
        <div className="pt-4 pb-8 bg-[#FFFFFF]">
          <div className="flex flex-col items-center justify-between gap-8">
            <HeroText classname=" px-8"/>
            <div className="w-full flex justify-center items-center h-[26rem] relative px-8">
              <HeroImg className="absolute -top-[8px]  pointer-events-none" src="/home/hero-image.png" alt="Hero Image" />
            </div>
            <div className="flex flex-col items-center justify-between gap-8  px-8">
              <p className="font-Inter font-normal text-base text-center">We’re a passgvibuuhbiuhionate team of creatives and strategists committed to designing impactful digital experiences. At Digitcrib, we help your business stand out with bespoke web solutions that deliver results.</p>
              <ContactFormButton text={"BECOME OUR CLIENT"} />             
            </div>  
            <div className="flex justify-center items-center gap-x-2">
              <GShopIco className="pointer-events-none" />
              <p className="font-Inter font-normal text-base">Trusted by over 100+ customers</p>
              <FiveStarIco className="pointer-events-none" />
            </div>          
          </div>
        </div>
      </>

      <>
        <div className="px-8 py-16 bg-[#373737]">
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
              <ContactFormButton text={"LERAN MORE"} />
            </div>
          </div>
        </div>
      </>

      <>
        <div className="px-8 py-16 bg-[#FFFFFF]">
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
                <div className="font-Bebas_Neue font-normal text-3xl mt-2">Over 10’s of</div>
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
        </div>
      </>

      <>
        <div className="pt-16 pb-12 bg-[#F68333]">
          <div className="w-full flex flex-col items-center justify-center gap-6 overflow-x-hidden">
            <div className=" px-8 ">
              <h2 className="uppercase text-white font-Bebas_Neue text-6xl text-center mb-2">Our Portfolio</h2>
              <p className="font-Inter text-base text-center">Work that speaks for itself</p>
            </div> 
            <div className="w-[80rem] h-[36rem]">
              <video className="w-full h-[36rem] aspect-auto bg-transparent pointer-events-none" src="/home/our-portfolio.webm" loop autoPlay muted />
            </div>              
          </div>
        </div>
      </>

      <>
        <div className=" bg-[#F68333] relative">
          <BgIcon className="absolute z-0 -top-8 right-0 pointer-events-none" />
          <div className="flex flex-col items-start justify-center gap-10 px-8">
            <div className="z-10">
              <h2 className="w-2/3 uppercase font-Bebas_Neue text-6xl leading-[100%] text-white">About Digitcrib</h2>
              <p className="font-Inter text-base">Where Passion Meets Innovation</p>
            </div>
            <p className="font-Inter font-medium text-base z-10">
              Digitcrib is a collective of passionate designers and developers dedicated to helping businesses thrive online. From branding to advanced web solutions, we are more than just an agency—we’re your strategic partners in growth.
            </p>
          </div>
          <Image className="w-full h-auto pointer-events-none" src="/home/about-digitcrib/about-vector-image.png" alt="vector image of a guy with a tea cup and a woman waving her hand" width="426" height="464" />
        </div>
      </>

      <>
        <div className="px-8 pt-16 bg-[#FFFFFF]">
            <h2 className="uppercase font-Bebas_Neue text-5xl">Easy 4- STEP <br/> Roadmap <span className="text-[#F68333]">to</span> Success</h2>
            <div>
              <RoadmapCarousel />
            </div>
        </div>
      </>

      <>
        <div className="px-8 py-16 bg-[#FFFFFF]">
          <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="leading-[42px] uppercase font-Inter font-extrabold text-[42px] text-center">Asked Questions</h2>
            <div className='accordion-group p-4 shadow-lg rounded-2xl border border-gray-300' data-accordion="default-accordion">

              <div className='accordion pb-4 border-b border-solid border-gray-400 active' id='basic-heading-one-with-arrow-always-open'>
                <button className='accordion-toggle group inline-flex items-center justify-between  text-black w-full transition duration-500 hover:text-black accordion-active:text-black always-open ' aria-controls='basic-collapse-one-with-arrow-always-open'>
                  <h5 className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">What makes our agency different from other startup development agencies? </h5>
                  <svg className='text-black transition duration-500 group-black accordion-active:text-black accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
                  </svg>
                </button>
                <div id='basic-collapse-one-with-arrow-always-open' className='accordion-content w-full px-0 overflow-hidden pr-4 pt-4 active' style={{maxHeight: '15rem'}} aria-labelledby='basic-heading-one-with-arrow-always-open'>
                  <p className='font-Inter text-[#7B7583] font-normal text-lg'>We stand out by offering comprehensive support. We go beyond just website or app development, providing services like legal guidance, marketing branding, and ongoing growth strategies. We're your one-stop shop for success!</p>
                </div>
              </div>

              <div className='accordion py-4 border-b border-solid border-gray-400' id='basic-heading-two-with-arrow-always-open'>
                <button className='accordion-toggle group  inline-flex items-center justify-between  leading-8 text-black w-full transition duration-500 hover:text-black accordion-active:text-black' aria-controls='basic-collapse-two-with-arrow-always-open'>
                  <h5 className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">What stage of startups do you typically work with? </h5>
                  <svg className='text-gray-900 transition duration-500 group-hover:text-black accordion-active:text-black  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
                  </svg>
                </button>
                <div id='basic-collapse-two-with-arrow-always-open' className='accordion-content w-full px-0 overflow-hidden pt-4  pr-4' aria-labelledby='basic-heading-two-with-arrow-always-open'>
                  <p className='font-Inter text-[#7B7583] font-normal text-lg'>Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.</p>
                </div>
              </div>

              <div className='accordion py-4 border-b border-solid border-gray-400' id='basic-heading-two-with-arrow-always-open'>
                <button className='accordion-toggle group  inline-flex items-center justify-between  leading-8 text-black w-full transition duration-500 hover:text-black accordion-active:text-black' aria-controls='basic-collapse-two-with-arrow-always-open'>
                  <h5 className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">What kind of websites and applications do you develop? </h5>
                  <svg className='text-gray-900 transition duration-500 group-hover:text-black accordion-active:text-black  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
                  </svg>
                </button>
                <div id='basic-collapse-two-with-arrow-always-open' className='accordion-content w-full px-0 overflow-hidden pt-4  pr-4' aria-labelledby='basic-heading-two-with-arrow-always-open'>
                  <p className='font-Inter text-[#7B7583] font-normal text-lg'>Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.</p>
                </div>
              </div>

              <div className='accordion py-4 border-b border-solid border-gray-400' id='basic-heading-two-with-arrow-always-open'>
                <button className='accordion-toggle group  inline-flex items-center justify-between  leading-8 text-black w-full transition duration-500 hover:text-black accordion-active:text-black' aria-controls='basic-collapse-two-with-arrow-always-open'>
                  <h5 className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">How do you help me market and brand my startup effectively? </h5>
                  <svg className='text-gray-900 transition duration-500 group-hover:text-black accordion-active:text-black  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
                  </svg>
                </button>
                <div id='basic-collapse-two-with-arrow-always-open' className='accordion-content w-full px-0 overflow-hidden pt-4  pr-4' aria-labelledby='basic-heading-two-with-arrow-always-open'>
                  <p className='font-Inter text-[#7B7583] font-normal text-lg'>Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.</p>
                </div>
              </div>

              <div className='accordion py-4 border-b border-solid border-gray-400' id='basic-heading-two-with-arrow-always-open'>
                <button className='accordion-toggle group  inline-flex items-center justify-between  leading-8 text-black w-full transition duration-500 hover:text-black accordion-active:text-black' aria-controls='basic-collapse-two-with-arrow-always-open'>
                  <h5 className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">How do you communicate and collaborate with your clients? </h5>
                  <svg className='text-gray-900 transition duration-500 group-hover:text-black accordion-active:text-black  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
                  </svg>
                </button>
                <div id='basic-collapse-two-with-arrow-always-open' className='accordion-content w-full px-0 overflow-hidden pt-4  pr-4' aria-labelledby='basic-heading-two-with-arrow-always-open'>
                  <p className='font-Inter text-[#7B7583] font-normal text-lg'>Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.</p>
                </div>
              </div>

              <div className='accordion pt-4' id='basic-heading-two-with-arrow-always-open'>
                <button className='accordion-toggle group  inline-flex items-center justify-between  leading-8 text-black w-full transition duration-500 hover:text-black accordion-active:text-black' aria-controls='basic-collapse-two-with-arrow-always-open'>
                  <h5 className="w-4/5 font-Inter font-bold text-lg leading-[20px] text-left">How much does it cost to work with your agency? </h5>
                  <svg className='text-gray-900 transition duration-500 group-hover:text-black accordion-active:text-black  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
                  </svg>
                </button>
                <div id='basic-collapse-two-with-arrow-always-open' className='accordion-content w-full px-0 overflow-hidden pt-4  pr-4' aria-labelledby='basic-heading-two-with-arrow-always-open'>
                  <p className='font-Inter text-[#7B7583] font-normal text-lg'>Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>

      <Footer />

    </>

  );
}
