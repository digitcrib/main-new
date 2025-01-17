import React, { useEffect } from 'react'
import 'keen-slider/keen-slider.min.css'
import { keenSlider } from '/public/js/carousel';



function RoadmapCarousel() {

  useEffect(() => {
    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    if (keenSliderPrevious) {
      keenSliderPrevious.addEventListener('click', () => {
        keenSlider.prev();
      });

      return () => {
        keenSliderPrevious.removeEventListener('click', () => {
          keenSlider.prev();
        });
      };
    }
  }, []); 

  useEffect(() => {
    const keenSliderNext = document.getElementById('keen-slider-next');
    if (keenSliderNext) {
      keenSliderNext.addEventListener('click', () => {
        keenSlider.next();
      });

      return () => {
        keenSliderNext.removeEventListener('click', () => {
          keenSlider.next();
        });
      };
    }
  }, []); 

  return (
   
    <>
    	<div>
        <div className="mx-auto max-w-[1340px] py-6 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24 relative">
        

            <div className='w-fit absolute z-10 top-[48%] right-0'>
            {/* <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button> */}

            <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full p-3 bg-white/10 border border-black/40 backdrop-blur-lg text-black/40 shadow-lg hover:bg-white/20 transition"
            >
                <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
                </svg>
            </button>
            </div>
        

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
            <div className="keen-slider__slide">
                <blockquote
                  className="w-full h-[17rem] bg-white border border-black rounded-3xl p-4 shadow-sm sm:p-8 lg:p-12"
                  >
                  <div>
                      <div className='text-[#F68333] font-Inter text-sm'>Phase 1</div>
                      <div>
                        <p className="font-Bebas_Neue text-black text-3xl uppercase">Discovery & Consultation</p>
                        <p className="mt-4 font-Inter text-base text-gray-700">
                        We start by understanding your goals, brand identity, and target audience to ensure we’re aligned with your vision from the start.
                        </p>
                      </div>
                      <hr className='my-2 w-1/2 h-[1px] border-none bg-black' />
                      <div className='pt-2 pl-4'>
                        <ul className='font-Inter text-[10px] list-disc'>
                          <li>Define project goals and challenges.</li>
                          <li>Identify your target audience and brand essence.</li>
                          <li>Align expectations and timelines.</li>
                        </ul>
                      </div>
                  </div>
                </blockquote>
            </div>

            <div className="keen-slider__slide">
              <blockquote
                  className="w-full h-[17rem] bg-white border border-black rounded-3xl p-4 shadow-sm sm:p-8 lg:p-12"
                  >
                  <div>
                      <div className='text-[#F68333] font-Inter text-sm'>Phase 2</div>
                      <div>
                        <p className="font-Bebas_Neue text-black text-3xl uppercase">Strategy & Planning</p>
                        <p className="mt-4 font-Inter text-base text-gray-700">
                        Together, we craft a detailed roadmap that outlines every step of the project, ensuring a seamless process tailored to your specific needs.
                        </p>
                      </div>
                      <hr className='my-2 w-1/2 h-[1px] border-none bg-black' />
                      <div className='pt-2 pl-4'>
                        <ul className='font-Inter text-[10px] list-disc'>
                          <li>Map out the project milestones and deliverables.</li>
                          <li>Create wireframes for structure and flow.</li>
                          <li>Ensure alignment on priorities and features.</li>
                        </ul>
                      </div>
                  </div>
              </blockquote>
            </div>

            <div className="keen-slider__slide">
              <blockquote
                  className="w-full h-[17rem] bg-white border border-black rounded-3xl p-4 shadow-sm sm:p-8 lg:p-12"
                  >
                  <div>
                      <div className='text-[#F68333] font-Inter text-sm'>Phase 3</div>
                      <div>
                        <p className="font-Bebas_Neue text-black text-3xl uppercase">Design & Development</p>
                        <p className="mt-4 font-Inter text-base text-gray-700">
                        Our team combines creativity and technical expertise to design a visually stunning website that delivers exceptional functionality and UX.
                        </p>
                      </div>
                      <hr className='my-2 w-1/2 h-[1px] border-none bg-black' />
                      <div className='pt-2 pl-4'>
                        <ul className='font-Inter text-[10px] list-disc'>
                          <li>Design user friendly UI/UX</li>
                          <li>Cross-platform compatibility.</li>
                          <li>Robust, scalable solutions are implemented.</li>
                        </ul>
                      </div>
                  </div>
              </blockquote>
            </div>

            <div className="keen-slider__slide">
              <blockquote
                  className="w-full h-[17rem] bg-white border border-black rounded-3xl p-4 shadow-sm sm:p-8 lg:p-12"
                  >
                  <div>
                      <div className='text-[#F68333] font-Inter text-sm'>Phase 4</div>
                      <div>
                        <p className="font-Bebas_Neue text-black text-3xl uppercase">Launch & Optimization</p>
                        <p className="mt-4 font-Inter text-base text-gray-700">
                        From a flawless launch to ongoing optimization, we ensure your website continues to grow with your business needs.
                        </p>
                      </div>
                      <hr className='my-2 w-1/2 h-[1px] border-none bg-black' />
                      <div className='pt-2 pl-4'>
                        <ul className='font-Inter text-[10px] list-disc'>
                          <li>Performance and functionality test.</li>
                          <li>Training and post-launch support.</li>
                          <li>Ongoing improvements and updates are optimized.</li>
                        </ul>
                      </div>
                  </div>
              </blockquote>
            </div>
            </div>
        </div>
        </div>
    	</div>
    </>

  )
}

export default RoadmapCarousel