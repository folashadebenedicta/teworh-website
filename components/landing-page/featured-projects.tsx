'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useRef } from 'react'

const projects = [
  { src: '/images/project-1.png', alt: 'Children playing on artificial turf' },
  { src: '/images/project-2.png', alt: 'Football pitch with school building' },
  { src: '/images/project-3.jpg', alt: 'Fenced football pitch' },
  { src: '/images/project-4.png', alt: 'Construction site with bulldozer' },
  { src: '/images/project-5.png', alt: 'Engineer inspecting stadium site' },
  { src: '/images/project-6.png', alt: 'Open construction ground' },
  { src: '/images/project-7.png', alt: 'Gravel and earthworks on site' },
  { src: '/images/project-8.png', alt: 'Marked pitch under construction' },
  { src: '/images/project-9.png', alt: 'Aerial view of sports complex' },
  { src: '/images/project-10.png', alt: 'Stadium with blue roof' },
  { src: '/images/project-11.png', alt: 'Stadium seating and pitch' },
  { src: '/images/project-12.png', alt: 'Team inspecting site in hard hats' },
]

export function FeaturedProjectsSection() {
  const autoScroll = useRef(
    AutoScroll({ speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [autoScroll.current]
  )

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">
              Featured projects
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-2xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Our work in action
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {projects.map(({ src, alt }) => (
              <div
                key={alt}
                className="relative min-w-0 flex-[0_0_80%] overflow-hidden rounded-2xl sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
