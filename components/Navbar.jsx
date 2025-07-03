import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants';
import { motion } from "framer-motion";

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
          <svg className='w-8 h-auto' width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.4408 13.8056H17.4406V8.4755C17.4406 2.83482 13.6845 0 8.72029 0C3.75607 0 0 2.83482 0 8.47813V13.8082H4.99581V19.1383C4.99581 24.7816 8.74924 27.6164 13.7161 27.6164C18.6829 27.6164 22.4364 24.7816 22.4364 19.1383V13.8082H18.4408V13.8056Z" fill="#F68333"/>
          </svg>
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={toggleSidebar}
          className=" z-30 text-black rounded-md focus:outline-none transition-transform duration-300 ease-in-out"
        >
          {isOpen ? (
            // X icon
            <svg className='w-7 h-auto mr-[4px]' width="20" height="20" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3334 25L1.33337 1M25.3334 1L1.33337 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>

          ) : (
            // Hamburger icon
            <svg className='w-9 h-auto' width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.11484 3.72412H22.3148" stroke="#353E5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.11484 20.2759H22.3148" stroke="#353E5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.11484 12H22.3148" stroke="#353E5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          )}
        </button>

      </div>

      {/* Sidebar */}
      <div
        className={`fixed py-[4rem] z-20 sm:py-[6rem] px-6 md:px-[3rem] lg:px-[4rem] xl:px-[7rem] bxl:px-[10rem] top-0 right-0 h-screen w-full bg-[#F68333] text-white transition-transform duration-300 ease-in-out  ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Sidebar Content */}
        <nav className="flex flex-col items-center justify-between h-full space-y-6">

          <div className='w-full grid grid-cols-1 justify-items-center content-end sm:grid-cols-2  gap-y-6'>
            <div className="w-full flex flex-col justify-center items-center self-start">         
              <ul className="self-start w-full flex flex-col  gap-2 font-Noto_Sans text-2xl sm:text-4xl md:text-6xl lg:leading-[5rem] font-semibold">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className='w-full'>
                    <button onClick={() => handleNavigation(link.href)} className="text-white font-Space_Grotesk text-4xl text-left w-full hover:text-white/60 transition-colors duration-300 ease-in-out">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className='w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-y-6'>     
            {/* Social Links */}
            <div className="self-start">
              <div className="font-semibold md:text-2xl lg:text-[32px] opacity-[80%] uppercase mb-2 font-Space_Grotesk text-xl">Follow Us</div>
              <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col justify-between items-end gap-6 text-white"
            >
              <div className="flex items-center justify-start gap-3">
                {SOCIAL_LINKS.map((social, index) => (
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
