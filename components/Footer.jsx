import Image from 'next/image'
import React from 'react'

import FooterCTAButton from "../components/FooterCTAButton";

import TextLogo from '/public/text-logo.svg';
import FooterImg1 from '/public/footer/footer-img-1.svg';
import FooterImg2 from '/public/footer/footer-img-2.svg';

function Footer() {
  return (
    
    <>
      <div className="py-10 bg-[#1C1C1C] rounded-t-3xl">
        <div className='flex flex-col items-center justify-center'>
            <div className='text-white flex flex-col items-center justify-center gap-6 px-8'>
                <div className='w-full flex items-center justify-between gap-0'>
                    <TextLogo className="pointer-events-none" />
                    <h4 className='w-[7rem] text-[#BBBBBB] font-Inter font-extrabold leading-[100%]'>Your Journey Starts with us</h4>
                </div>
                <p className='leading-[120%] font-Inter text-xsm'>We are value driven result oriented and always ready to go that extra mile to ensure that our customer leverage the advances of technology for business success.</p>
                <div className='w-full h-auto flex items-center justify-between gap-6'>
                    <FooterCTAButton />
                    <div className='grid grid-cols-3 gap-3'>
                        <Image className="w-50 h-50 pointer-events-none" src="/footer/linkedin-icon.svg" alt="vector image of a guy standing" width={100} height={100} />
                        <Image className="w-50 h-50 pointer-events-none" src="/footer/twitter-icon.svg" alt="vector image of a guy standing" width={100} height={100} />
                        <Image className="w-50 h-50 pointer-events-none" src="/footer/instagram-icon.svg" alt="vector image of a guy standing" width={100} height={100} />
                    </div>
                </div>
            </div>
            <FooterImg1 className="w-full h-auto pointer-events-none"/>
            <div className='w-full text-white'>
                <p className='cursor-pointer font-Inter texr-[10px] font-light text-right mb-2 pr-1'>Privacy Policy</p>
                <FooterImg2 className="w-full h-auto pointer-events-none"/>
                <p className=' font-Inter texr-[10px] font-light text-center px-8 mt-2'>All copyrights are reserved by @digitcrib</p>
            </div>
        </div>
      </div>
    </>

  )
}

export default Footer