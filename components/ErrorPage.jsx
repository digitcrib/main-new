import React from 'react'
import FullLogo from '/public/logo-with-text.svg';

function ErrorPage() {
  return (
    
    <>

      <div className='hidden md:block h-screen w-full relative'>
        <a href="/" >
          <FullLogo className="absolute top-8 left-8 cursor-pointer w-[8rem] h-auto "/>
        </a>
        <div className='w-full h-screen flex justify-center items-center gap-20'>
          <img className="w-[24rem] h-auto pointer-events-none" src="/home/hero-image.svg" alt="Hero Image"/>
          <div>
            <p className='uppercase font-Bebas_Neue text-5xl leading-[120%] mb-8'>Sorry for the trouble we are <br/> working on our desktop Site. </p>
            <p className='uppercase font-Bebas_Neue text-[92px] leading-[100%]'>Please Check our <br/> <span className='text-[#F68333]'>mobile</span> version of <br/> the site till then.</p>
          </div>
        </div>
      </div>

    </>

  )
}

export default ErrorPage