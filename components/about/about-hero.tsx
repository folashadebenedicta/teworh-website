import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: '2018', label: 'Year Founded' },
  { value: '1000+', label: 'Lives Impacted' },
  { value: '10+', label: 'Facilities Delivered' },
  { value: '6+', label: 'States Reached' },
]

export function AboutHero() {
  return (
    <div>
      {/* ── Hero image with breadcrumb ── */}
      <div className="relative h-64 w-full sm:h-80 lg:h-105">
        <Image
          src="/images/about-hero.jpg"
          alt="Aerial view of a stadium"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Breadcrumb — top left */}
        <div className="absolute top-0 left-0 flex items-center gap-1 bg-[#3B924C]/80 px-4 py-2 text-sm font-medium text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span>About</span>
        </div>

        {/* Title — centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-redrose text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Teworh <span className="text-accent">Sports</span>
          </h1>
        </div>
      </div>

      {/* ── Copy + stats ── */}
      <div className="mx-auto max-w-360 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Top row: headline left, copy right */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <h2 className="font-redrose text-primary text-4xl leading-tight font-bold sm:text-5xl lg:flex-1">
            Changing sports in Africa
          </h2>
          <p className="text-foreground text-base leading-relaxed lg:flex-1 lg:pt-2">
            We are builders, developers, and believers. TEWORH exists to create
            the infrastructure, talent pipelines, and ecosystems that give
            African sports what it has always deserved a world-class foundation.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-[#EAEAEA] border border-[#EAEAEA] lg:grid-cols-4 lg:divide-y-0">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 px-6 py-8 text-center"
            >
              <p className="font-redrose text-4xl font-bold text-[#3B924C]/30 sm:text-5xl">
                {value}
              </p>
              <p className="text-primary text-base font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
