import React from 'react'
import Typewriter from "typewriter-effect";

import SplashImg1 from '/public/splash-icon-1.svg';

function SplashScreen() {
  return (
    
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-white text-black z-50 transition-all duration-300 ease-in-out">
          <div className="text-center">
            <SplashImg1 className="w-[6rem] h-auto animate-spin"/>
            <div className="mt-8 text-2xl font-Bebas_Neue flex items-center justify-center">Loading&ensp;{""}
              <Typewriter
                options={{
                  strings: ["...", "...", "..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        
    </>

  )
}

export default SplashScreen