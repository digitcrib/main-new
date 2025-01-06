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
      {/* Hamburger menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 text-black rounded-md focus:outline-none transition-transform duration-300 ease-in-out"
      >
        {isOpen ? (
          // X icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.11484 3.72412H22.3148" stroke="#353E5C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.11484 20.2759H22.3148" stroke="#353E5C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.11484 12H22.3148" stroke="#353E5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed py-[4rem] z-40 sm:py-[6rem] px-6 md:px-[3rem] lg:px-[4rem] xl:px-[7rem] bxl:px-[10rem] top-0 right-0 h-screen w-full bg-[#aa1f00] text-white transition-transform duration-300 ease-in-out  ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Content */}
        <nav className="flex flex-col items-center justify-between h-full space-y-6">

          <div className='w-full grid grid-cols-1 justify-items-center content-end sm:grid-cols-2  gap-y-6'>
            <div className="w-full flex flex-col justify-center items-center self-start">         
              <ul className="self-start w-full flex flex-col  gap-2 font-Noto_Sans text-2xl sm:text-4xl md:text-6xl lg:leading-[5rem] font-semibold">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className='w-full'>
                    <button onClick={() => handleNavigation(link.href)} className="text-white text-left w-full hover:text-white/60 transition-colors duration-300 ease-in-out">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="w-fit h-auto place-self-center sm:place-self-end">
              <img className="w-[21rem] h-auto sm:w-[52vw] md:w-[48vw] lg:w-[40vw] bxl:w-[34vw]" src="/navbar/mohmood-farooqui.jpg" alt="mohmood farooqui" />
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-y-6'>
            {/* Email */}
            <div className="self-start">
              <div className="font-semibold md:text-2xl lg:text-[32px] opacity-[80%] uppercase mb-2">Email</div>
              <a href="mailto:mahmood.farooqui@gmail.com" className="font-bold text-xl md:text-2xl bxl:text-4xl text-white hover:text-white/60 transition-colors duration-300 ease-in-out cursor-pointer">mahmood.farooqui@gmail.com</a>
            </div>
            
            {/* Social Links */}
            <div className="self-start">
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
            </div>

          </div>
        </nav>
      </div>
    </>
  );
}
