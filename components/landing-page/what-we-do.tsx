'use client'

import Image from 'next/image'

const services = [
  {
    number: '01',
    title: 'Facility Design, Build & Management',
    description:
      'End-to-end sports infrastructure from architectural concept to construction, commissioning, and ongoing management. Master planning, full construction, and day-to-day operations.',
    image: '/images/service-1.png',
    alt: 'Construction hard hat and blueprints',
  },
  {
    number: '02',
    title: 'Athelete Discovery & Development',
    description:
      'A Structured Pipeline From Grassroots Identification To Professional Placement. Scouting, Coaching, Welfare, Nutrition, Academic Support, And Agency Services.',
    image: '/images/service-2.png',
    alt: 'Footballer on pitch',
  },
  {
    number: '03',
    title: 'Sport Surfaces & Flooring',
    description:
      'Premium supply and installation of certified sports surfaces for indoor and outdoor facilities. Artificial turf, laminate, wood, acrylic courts, epoxy floors and tartan athletics tracks.',
    image: '/images/service-3.jpg',
    alt: 'Aerial stadium shot',
  },
  {
    number: '04',
    title: 'Sport Equipment & Gear',
    description:
      'Comprehensive Supply Of Sports Equipment And Branded Athletic Gear For Teams, Academies, Schools, And Individual Athletes. Bulk & Institutional Orders Available.',
    image: '/images/service-4.png',
    alt: 'Sports equipment flatlay',
  },
]

function ServiceCard({
  number,
  title,
  description,
  image,
  alt,
}: (typeof services)[0]) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-[#EAEAEA] sm:flex-row">
      {/* Text */}
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-2">
        <span className="text-accent text-2xl font-bold">{number}</span>
        <h3 className="font-redrose text-2xl font-medium text-black sm:text-3xl">
          {title}
        </h3>
        <p className="text-foreground text-base">{description}</p>
      </div>

      {/* Image — flush, no gap */}
      <div className="relative min-h-64 flex-1 sm:min-h-0">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

export function WhatWeDoSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-xl font-bold md:text-3xl">
              What we do
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-xs text-3xl leading-tight font-bold sm:text-5xl md:max-w-2xl lg:text-6xl">
            From the ground up we build everything
          </h2>
        </div>

        {/* 2 rows × 2 cards */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ServiceCard {...services[2]} />
            <ServiceCard {...services[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}
