"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NAV_LINKS, SOCIALS_URL } from '@/constants';

export default function ContactFormButton() {
  
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    // Add or remove the class to prevent scrolling
    if (!isOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  };

  const handleNavigation = (href) => {
    setIsOpen(false);
    document.body.classList.remove("body-no-scroll"); // Ensure scrolling is re-enabled
    router.push(href);
  };

  return (
    <>

      <div className='w-full h-auto bg-white'>

        {isOpen ? (

          <div className="fixed inline-flex justify-end items-center top-7 right-8 w-full h-auto z-40 text-red-500 ">   
            <svg onClick={toggleSidebar} className='pr-[2px]' width="20" height="20" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3334 25L1.33337 1M25.3334 1L1.33337 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

        ) : (

          <button onClick={toggleSidebar} className='w-full my-2 bg-primary_orange text-white shadow-custom_primary_button hover:shadow-custom_primary_button_hover active:shadow-custom_primary_button_active active:translate-y-1 transition-transform duration-300 ease-in-out font-Space_Grotesk font-normal text-xsm text-center py-3 rounded-full border border-black' >BECOME OUR CLIENT&ensp;
            <span className='text-lg font-light align-middle'>
            +
            </span>
          </button>

        )}

      </div>

      {/* Contact Sidebar */}
      <div
        className={`fixed py-[4rem] z-30 sm:py-[6rem] px-6 md:px-[3rem] lg:px-[4rem] xl:px-[7rem] bxl:px-[10rem] top-0 right-0 h-screen w-full bg-black text-white transition-transform duration-300 ease-in-out  ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Content */}
        <nav className="flex flex-col items-center justify-between h-full space-y-6">
        
          <div>
            
          </div>

        </nav>
      </div>
    </>
  );
}
