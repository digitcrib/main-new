"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import BendArrow from '/public/bend-arrow.svg';

export default function FooterCTAButton() {
  
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>

      <div className='w-full h-auto bg-transparent'>

        <div className={`${ isOpen? 'block' : 'hidden' } fixed inline-flex justify-end items-center top-6 right-8 w-full h-auto z-40 text-red-500 `} >   
          <svg onClick={toggleSidebar} className='w-6 h-auto pr-[2px]' width="20" height="20" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3334 25L1.33337 1M25.3334 1L1.33337 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        <button onClick={toggleSidebar} className='w-full font-Space_Grotesk font-normal bg-[#F68333] shadow-custom_primary_button hover:shadow-custom_primary_button_hover active:shadow-custom_primary_button_active active:translate-y-1 transition-all duration-200 rounded-3xl py-2'>Let's Talk</button>

        {/* // )} */}

      </div>

      {/* Contact Sidebar */}
      <div
        className={`fixed py-[4rem] z-30 sm:py-[6rem] px-10 md:px-[3rem] lg:px-[4rem] xl:px-[7rem] bxl:px-[10rem] top-0 right-0 h-screen w-full bg-black text-white transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Content */}
        <nav>

          <form onSubmit={handleSubmit} action="POST"  className="w-full flex flex-col items-center justify-center gap-8 h-full">

            <div className='flex flex-col items-center justify-center gap-8'>
              <p className='w-full self-start font-Bebas_Neue font-normal text-[45px] leading-[120%]'>LET’S BUILD SOMETHING GREAT TOGETHER</p>
              <input className='w-full bg-black border-[1.5px] border-white focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-3 py-3 font-Inter font-normal text-lg'  name="name" placeholder="Enter your name*" type="text" />
              <input className='w-full bg-black border-[1.5px] border-white focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-3 py-3 font-Inter font-normal text-lg'  name="phone" placeholder="Phone Number*" type="tel" />
              <input className='w-full bg-black border-[1.5px] border-white focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-3 py-3 font-Inter font-normal text-lg'  name="email" placeholder="Email*" type="email" />
              <textarea className='w-full bg-black border-[1.5px] border-white focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-3 py-3 font-Inter font-normal text-lg' rows="6"  name="message" placeholder="Project Details*" type="text" />
              <button  type="submit" className='w-full font-Inter font-normal text-lg bg-black hover:bg-white border-[1.5px] border-white hover:border-black hover:text-black rounded-full px-3 py-3'>Send Message</button>
            </div>

            <div className='flex flex-col items-center justify-center gap-4 font-Inter font-normal text-lg text-center'>
              <p>
                By filling out the form you agree  to our <span className='underline cursor-pointer'>Privacy Policy</span>
              </p>
              <div>OR</div>
              <a
                href="mailto:digitcrib@gmail.com?subject=Got%20Questions?%20We're%20Here%20to%20Help!" 
                className='hover:underline relative'>
                <span className='absolute -top-1.5 -left-10'>
                  <BendArrow />
                </span>
                digitcrib@gmail.com
              </a>
            </div>

          </form>

        </nav>
      </div>
    </>
  );
}
