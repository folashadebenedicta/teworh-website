import Image from 'next/image'
import Link from 'next/link'

const panels = [
  { src: '/images/projects-hero-1.png', alt: 'Netball game' },
  { src: '/images/projects-hero-2.png', alt: 'Football on pitch' },
  { src: '/images/projects-hero-3.png', alt: 'Swimmer in pool' },
  { src: '/images/projects-hero-4.png', alt: 'Volleyball team celebrating' },
]

export function ProjectsHero() {
  return (
    <div>
      {/* ── Hero: 4-panel collage ── */}
      <div className="relative h-64 w-full sm:h-80 lg:h-105">
        {/* Breadcrumb — sits above the panels */}
        <div className="absolute top-0 left-0 z-10 flex items-center gap-1 bg-[#4CAF50]/60 px-4 py-2 pr-32 text-sm font-medium text-white [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)] md:pr-44 lg:pr-92">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span>Projects</span>
        </div>

        {/* 4 equal panels side by side */}
        <div className="flex h-full w-full">
          {panels.map(({ src, alt }, i) => (
            <div key={alt} className="relative flex-1 overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="25vw"
              />
              {/* Dark overlay per panel */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        {/* Title — centered over all panels */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-redrose text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our <span className="text-accent">Projects</span>
          </h1>
        </div>
      </div>

      {/* ── Intro copy ── */}
      <div className="mx-auto max-w-360 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <h2 className="font-redrose text-primary text-4xl leading-tight font-bold sm:text-5xl lg:flex-1">
            Our work in action
          </h2>
          <p className="text-foreground text-lg leading-relaxed font-medium lg:flex-1 lg:pt-2">
            Beyond managing existing spaces, Teworh actively develops new
            facilities and community sports infrastructure. Here is a look at
            what we have delivered and what is currently underway.
          </p>
        </div>
      </div>
    </div>
  )
}
