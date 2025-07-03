"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function RoadmapCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  )

  const slides = [
    {
      phase: "Phase 1",
      title: "Discovery & Consultation",
      description: "We start by understanding your goals, brand identity, and target audience to ensure we're aligned with your vision from the start.",
      points: [
        "Define project goals and challenges.",
        "Identify your target audience and brand essence.",
        "Align expectations and timelines.",
      ],
    },
    {
      phase: "Phase 2",
      title: "Strategy & Planning",
      description: "Together, we craft a detailed roadmap that outlines every step of the project, ensuring a seamless process tailored to your specific needs.",
      points: [
        "Map out the project milestones and deliverables.",
        "Create wireframes for structure and flow.",
        "Ensure alignment on priorities and features.",
      ],
    },
    {
      phase: "Phase 3",
      title: "Design & Development",
      description: "Our team combines creativity and technical expertise to design a visually stunning website that delivers exceptional functionality and UX.",
      points: [
        "Design user friendly UI/UX.",
        "Cross-platform compatibility.",
        "Robust, scalable solutions are implemented.",
      ],
    },
    {
      phase: "Phase 4",
      title: "Launch & Optimization",
      description: "From a flawless launch to ongoing optimization, we ensure your website continues to grow with your business needs.",
      points: [
        "Performance and functionality test.",
        "Training and post-launch support.",
        "Ongoing improvements and updates are optimized.",
      ],
    }    
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent>
                <span>
                  <blockquote className="w-full h-[17rem] bg-white border border-black rounded-2xl p-4 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className='text-[#F68333] font-Inter text-sm'>{slide.phase}</div>
                      <div>
                        <p className="font-Bebas_Neue text-black text-3xl uppercase">{slide.title}</p>
                        <p className="mt-4 font-Inter text-base text-gray-700">
                          {slide.description}
                        </p>
                      </div>
                      <hr className='my-2 w-1/2 h-[1px] border-none bg-black' />
                      <div className='pt-2 pl-4'>
                        <ul className='font-Inter text-[10px] list-disc'>
                          {slide.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </blockquote>
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
