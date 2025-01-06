import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    
    <>
      <div className="py-10 bg-[#1C1C1C] rounded-t-3xl">
        <div className='flex flex-col items-center justify-center'>
            <div className='text-white flex flex-col items-center justify-center gap-6 px-8'>
                <div className='w-full flex items-center justify-between gap-0'>
                    <h3 className='font-Inter font-extrabold text-4xl xs:text-[42px]'>DIGITCRIB</h3>
                    <h4 className='w-[7rem] text-[#BBBBBB] font-Inter font-extrabold leading-[100%]'>Your Journey Starts with us</h4>
                </div>
                <p className='leading-[120%] font-Inter text-xsm'>We are value driven result oriented and always ready to go that extra mile to ensure that our customer leverage the advances of technology for business success.</p>
                <div className='w-full h-auto flex items-center justify-between gap-6'>
                    <button className='w-full font-Space_Grotesk font-normal bg-[#F68333] shadow-custom_primary_button hover:shadow-custom_primary_button_hover active:shadow-custom_primary_button_active active:translate-y-1 transition-all duration-200 rounded-3xl py-2'>Let's Talk</button>
                    <div className='grid grid-cols-3 gap-3'>
                        <Image className="w-50 h-50 pointer-events-none" src="/footer/linkedin-icon.svg" alt="vector image of a guy standing" width={100} height={100} />
                        <Image className="w-50 h-50 pointer-events-none" src="/footer/twitter-icon.svg" alt="vector image of a guy standing" width={100} height={100} />
                        <Image className="w-50 h-50 pointer-events-none" src="/footer/instagram-icon.svg" alt="vector image of a guy standing" width={100} height={100} />
                    </div>
                </div>
            </div>
            <Image className="px-8 pointer-events-none" src="/footer/footer-image.png" alt="Footer Image" width={1000} height={1000} />
            <div className='w-full text-white'>
                <p className='font-Space_Grotesk font-light text-right mb-2 pr-1'>Privacy Policy</p>
                <Image className='w-full h- pointer-events-none' src="/footer/footer-image-2.png" alt="vector image of a guy standing" width={430} height={222} />
                <p className='font-Space_Grotesk font-light text-center px-8 mt-2'>All copyrights are reserved by @digitcrib</p>
            </div>
        </div>
      </div>
    </>

  )
}

export default Footer