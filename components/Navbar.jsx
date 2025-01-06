"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NAV_LINKS, SOCIALS_URL } from '@/constants';
import { motion } from 'framer-motion';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>

      <div className=' w-full bg-white flex justify-between items-center px-8 py-6'>

        {/* Logo */}
        <div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.5055 6.07118C20.183 6.07118 21.5428 4.7121 21.5428 3.03559C21.5428 1.35908 20.183 0 18.5055 0C16.8282 0 15.4684 1.35908 15.4684 3.03559C15.4684 4.7121 16.8282 6.07118 18.5055 6.07118Z" fill="#6D758F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.5055 14.0355C20.183 14.0355 21.5428 12.6765 21.5428 11C21.5428 9.32342 20.183 7.96436 18.5055 7.96436C16.8282 7.96436 15.4684 9.32342 15.4684 11C15.4684 12.6765 16.8282 14.0355 18.5055 14.0355Z" fill="#6D758F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.5055 21.9999C20.183 21.9999 21.5428 20.6408 21.5428 18.9643C21.5428 17.2878 20.183 15.9287 18.5055 15.9287C16.8282 15.9287 15.4684 17.2878 15.4684 18.9643C15.4684 20.6408 16.8282 21.9999 18.5055 21.9999Z" fill="#6D758F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.7715 14.0355C12.449 14.0355 13.8088 12.6765 13.8088 11C13.8088 9.32342 12.449 7.96436 10.7715 7.96436C9.09416 7.96436 7.73436 9.32342 7.73436 11C7.73436 12.6765 9.09416 14.0355 10.7715 14.0355Z" fill="#6D758F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.7715 21.9999C12.449 21.9999 13.8088 20.6408 13.8088 18.9643C13.8088 17.2878 12.449 15.9287 10.7715 15.9287C9.09416 15.9287 7.73436 17.2878 7.73436 18.9643C7.73436 20.6408 9.09416 21.9999 10.7715 21.9999Z" fill="#6D758F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.03736 21.9999C4.71476 21.9999 6.07455 20.6408 6.07455 18.9643C6.07455 17.2878 4.71476 15.9287 3.03736 15.9287C1.35997 15.9287 0.000167847 17.2878 0.000167847 18.9643C0.000167847 20.6408 1.35997 21.9999 3.03736 21.9999Z" fill="#6D758F"/>
          </svg> 
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={toggleSidebar}
          className=" z-50 text-black rounded-md focus:outline-none transition-transform duration-300 ease-in-out"
        >
          {isOpen ? (
            // X icon
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="26" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.11484 3.72412H22.3148" stroke="#353E5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.11484 20.2759H22.3148" stroke="#353E5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.11484 12H22.3148" stroke="#353E5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          )}
        </button>

      </div>

      {/* Sidebar */}
      <div
        className={`fixed py-[4rem] z-40 sm:py-[6rem] px-6 md:px-[3rem] lg:px-[4rem] xl:px-[7rem] bxl:px-[10rem] top-0 right-0 h-screen w-full bg-[#F68333] text-white transition-transform duration-300 ease-in-out  ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Content */}
        <nav className="flex flex-col items-center justify-between h-full space-y-6">

          <div className='w-full grid grid-cols-1 justify-items-center content-end sm:grid-cols-2  gap-y-6'>
            {/* <div className="w-full flex flex-col justify-center items-center self-start">         
              <ul className="self-start w-full flex flex-col  gap-2 font-Noto_Sans text-2xl sm:text-4xl md:text-6xl lg:leading-[5rem] font-semibold">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className='w-full'>
                    <button onClick={() => handleNavigation(link.href)} className="text-white text-left w-full hover:text-white/60 transition-colors duration-300 ease-in-out">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}

          </div>

          <div className='w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-y-6'>     
            {/* Social Links */}
            {/* <div className="self-start">
              <div className="font-semibold md:text-2xl lg:text-[32px] opacity-[80%] uppercase mb-2">Follow Us</div>
              <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col justify-between items-end gap-6 text-white"
            >
              <div className="flex items-center justify-start gap-3">
                {SOCIALS_URL.map((social, index) => (
                  <motion.div
                  whileHover={{ scale: 1.2 }}
                  key={index}
                >
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                    <img className="w-10 h-10"  src={social.src} alt={`Social ${index}`} />
                  </a>
                  </motion.div>
                ))}
              </div>
              </motion.div>
            </div> */}

          </div>
        </nav>
      </div>
    </>
  );
}
