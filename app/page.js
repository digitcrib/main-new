'use client';

import Image from "next/image";
import CTAbutton from "../components/CTAbutton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (

    <>

      <Navbar />

      <>
        <div className="py-10">
          <div className="flex flex-col items-center justify-between gap-8">           
            <h1 className="w-3/4 uppercase font-Bebas_Neue text-6xl text-center">Empowering Your <span className="font-Luxurious_Script font-normal normal-case">Digital</span> <span className="text-[#F68333]">Vision</span></h1>
            <div className="w-full h-[27rem] relative">
              <Image className="absolute -top-40 w-[400px] h-[612px] px-0 pointer-events-none" src="/home/hero-image.png" alt="Hero Image" width={1000} height={1000} />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 px-8">
              <p className="font-Inter font-normal text-base text-center">We’re a passionate team of creatives and strategists committed to designing impactful digital experiences. At Digitcrib, we help your business stand out with bespoke web solutions that deliver results.</p>
              <CTAbutton />  
            </div>                          
          </div>
        </div>
      </>

      <>
        <div className="px-8 py-10">
          <div className="flex flex-col items-center justify-center gap-10">
            <div>
              <h2 className="uppercase font-Bebas_Neue text-5xl text-center mb-2">Our Services</h2>
              <p className="font-Inter text-base text-center">Our approach is value-driven, result-oriented, and tailored to your goals. We go above and beyond to ensure you leverage the latest technology for business success.</p> 
            </div>
            <ul className="font-Bebas_Neue text-[32px]">
              <li className="border-b-2 border-black mb-4">01. UI/UX Designing</li>
              <li className="border-b-2 border-black mb-4">02. Web Development</li>
              <li className="border-b-2 border-black">03. Digital Marketing</li>
            </ul>
            <CTAbutton />
          </div>
        </div>
      </>

      <>
        <div className="px-8 py-10">
          <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="uppercase font-Bebas_Neue text-5xl text-center mb-2">Why Choose us</h2>
            <div className="grid grid-cols-1 justify-items-center content-center gap-10">

              <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                <Image className="pointer-events-none" src="/home/why-choose-us/Picture-1.png" alt="vector image of man sipping tea" width={300} height={300} />
                <div className="font-Bebas_Neue font-normal text-3xl mt-2">2 Years +</div>
                <p className="font-Inter text-base">Industry Experience </p>
              </div>
              <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                <Image className="pointer-events-none" src="/home/why-choose-us/Picture-2.png" alt="vector image of 2 man standing" width={300} height={300} />
                <div className="font-Bebas_Neue font-normal text-3xl mt-2">Over 10’s of</div>
                <p className="font-Inter text-base">successful projects delivered.</p>
              </div>
              <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                <Image className="pointer-events-none" src="/home/why-choose-us/Picture-3.png" alt="vector image of a guy standing and using a laptop" width={300} height={300} />
                <div className="font-Bebas_Neue font-normal text-3xl mt-2">100%</div>
                <p className="font-Inter text-base">Custom build solution tailored to your vision</p>
              </div>
              <div className="w-[16rem] flex flex-col items-center justify-center text-center gap-1">
                <Image className="pointer-events-none" src="/home/why-choose-us/Picture-4.png" alt="vector image consisting of a collage of people" width={300} height={300} />
                <div className="font-Bebas_Neue font-normal text-3xl mt-2">Personal Connection</div>
                <p className="font-Inter text-base">We focus on building good connection with all our clients.</p>
              </div>
              
            </div>
          </div>
        </div>
      </>

      <>
        <div className="px-8 py-10">
          <div className="flex flex-col items-center justify-center gap-10">
            <div>
              <h2 className="uppercase font-Bebas_Neue text-5xl text-center mb-2">Our Portfolio</h2>
              <p className="font-Inter text-base text-center">Work that speaks for itself</p>
            </div>    
            {/* <div className="w-full relative">
              <div className="swiper multiple-slide-carousel swiper-container relative">
              <div className="swiper-wrapper mb-16">
                <div className="swiper-slide">
                  <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-2xl font-semibold text-indigo-600">Slide 1 </span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-2xl font-semibold text-indigo-600">Slide 2 </span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-2xl font-semibold text-indigo-600">Slide 3 </span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-2xl font-semibold text-indigo-600">Slide 4 </span>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
                <button id="slider-button-left" className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full  hover:bg-indigo-600 !-translate-x-16" data-carousel-prev>
                  <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button id="slider-button-right" className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !translate-x-16" data-carousel-next>
                  <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              </div>
            </div> */}
          </div>
        </div>
      </>

      <>
        <div className="px-8 pt-10 bg-[#F68333]">
          <div className="flex flex-col items-center justify-center gap-10">
            <div>
              <div className="flex items-center justify-between">
              <h2 className="w-2/3 uppercase font-Bebas_Neue text-7xl leading-[80%] text-white">About Digitcrib</h2>
              <Image className="pointer-events-none" src="/home/globe.png" alt="vector of globe" width={110} height={110} />
              </div>
              <p className="font-Inter text-base">Where Passion Meets Innovation</p>
            </div>
            <p className="font-Inter font-medium text-base">
              Digitcrib is a collective of passionate designers and developers dedicated to helping businesses thrive online. From branding to advanced web solutions, we are more than just an agency—we’re your strategic partners in growth.
            </p>
            <Image className="pointer-events-none" src="/home/vector-guy.png" alt="vector image of a guy standing" width="265" height="414" ></Image>
          </div>
        </div>
      </>

      <>
        <div className="px-8 py-10">
            <h2 className="uppercase font-Bebas_Neue text-5xl">Your <br/> Roadmap to Success</h2>
        </div>
      </>

      <>
        <div className="px-8 py-10">
          <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="leading-[42px] uppercase font-Inter font-extrabold text-[42px] text-center">Asked Questions</h2>
            <div className='accordion-group p-4 shadow-lg rounded-2xl border' data-accordion="default-accordion">

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
