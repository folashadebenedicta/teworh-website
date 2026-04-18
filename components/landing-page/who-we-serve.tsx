'use client'

import Image from 'next/image'

const audiences = [
  {
    title: 'Government & Public Sector',
    sub: 'Infrastructure & national program',
    image: '/images/serve-1.png',
    alt: 'Government and public sector',
  },
  {
    title: 'Schools & Universities',
    sub: 'Campus facilities & student programs',
    image: '/images/serve-2.png',
    alt: 'Schools and universities',
  },
  {
    title: 'Private Sports Club',
    sub: 'Turnkey club development',
    image: '/images/serve-3.png',
    alt: 'Private sports club',
  },
  {
    title: 'Real Estate Developers',
    sub: 'Integrated sports amenities',
    image: '/images/serve-4.png',
    alt: 'Real estate developers',
  },
  {
    title: "Corporates & NGO's",
    sub: 'CSR and community sports investment',
    image: '/images/serve-5.png',
    alt: 'Corporates and NGOs',
  },
  {
    title: 'Athletes & Families',
    sub: 'Personal development pathways',
    image: '/images/serve-6.png',
    alt: 'Athletes and families',
  },
]

function AudienceCard({ title, sub, image, alt }: (typeof audiences)[0]) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* Image */}
      <div className="relative h-64 w-full sm:h-72 lg:h-80">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Gradient overlay + text pinned to bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <p className="text-2xl leading-snug font-bold text-white">{title}</p>
        <p className="mt-1 text-lg font-normal text-white">{sub}</p>
      </div>
    </div>
  )
}

export function WhoWeServeSection() {
  return (
    <section className="bg-[#F6FFF7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">
              Who we serve
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-2xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Built for every <br />
            level of sports
          </h2>
        </div>

        {/* 3 × 2 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(card => (
            <AudienceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
