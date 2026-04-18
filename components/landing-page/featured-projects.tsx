'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useRef } from 'react'

const projects = [
  {
    year: '2022',
    status: 'COMPLETED',
    statusColor: 'green',
    title: 'Outdoor Football Pitch',
    description: 'Community Name: Serves 600+ youth engaged',
    image: '/images/project-1.png',
    alt: 'Outdoor football pitch',
  },
  {
    year: '2023',
    status: 'COMPLETED',
    statusColor: 'green',
    title: 'Indoor Sports Hall Construction',
    description: 'Community Name: Serves 800+ athletes',
    image: '/images/project-2.png',
    alt: 'Indoor sports hall',
  },
  {
    year: '2024',
    status: 'COMPLETED',
    statusColor: 'green',
    title: 'Youths Skills Center',
    description: 'Community Name: Serves 360+ youth engaged',
    image: '/images/project-3.png',
    alt: 'Youth skills center gym',
  },
  {
    year: '2025',
    status: 'ONGOING',
    statusColor: 'orange',
    title: 'Aquatic Center Upgrade',
    description: 'Community Name: Serves 360+ youth engaged',
    image: '/images/project-4.png',
    alt: 'Aquatic center pool',
  },
]

const statusStyles: Record<string, string> = {
  green: 'bg-[#DAFADF] text-[#009606]',
  orange: 'bg-[#FFF3EA] text-[#FF5714]',
}

const dotStyles: Record<string, string> = {
  green: 'bg-[#009606]',
  orange: 'bg-[#FF5714]',
}

const yearStyles: Record<string, string> = {
  green: 'text-[#DAF4DF]',
  orange: 'text-[#FFE8DF]',
}

function ProjectCard({
  year,
  status,
  statusColor,
  title,
  description,
  image,
  alt,
}: (typeof projects)[0]) {
  return (
    <div className="min-w-0 flex-[0_0_85%] pr-5 sm:flex-[0_0_55%] lg:flex-[0_0_38%]">
      <div
        className="flex cursor-pointer flex-col gap-4 rounded-2xl bg-white p-4"
        style={{ boxShadow: '0 0 20px 0 rgba(169, 169, 169, 0.16)' }}
      >
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden rounded-xl sm:h-64">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 38vw"
          />
        </div>

        {/* Meta row: status badge + year watermark */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[statusColor]}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${dotStyles[statusColor]}`}
            />
            {status}
          </span>
          <span
            className={`font-redrose text-5xl font-bold ${yearStyles[statusColor]}`}
          >
            {year}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <h3 className="font-redrose text-primary text-xl font-bold sm:text-2xl">
            {title}
          </h3>
          <p className="text-foreground text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProjectsSection() {
  const autoScroll = useRef(
    AutoScroll({ speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [autoScroll.current]
  )

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
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

      {/* Carousel — centered within max-w-360, clipped */}
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map(project => (
              <ProjectCard key={project.year} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
