import Image from 'next/image'
import Link from 'next/link'

export function SuccessStoriesHero() {
  return (
    <div>
      {/* ── Hero image with breadcrumb ── */}
      <div className="relative h-64 w-full sm:h-80 lg:h-105">
        <Image
          src="/images/stories-hero.png"
          alt="Volleyball team celebrating"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 flex items-center gap-1 bg-[#4CAF50]/60 px-4 py-2 pr-32 text-sm font-medium text-white [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)] md:pr-44 lg:pr-92">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span>Success stories</span>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-redrose text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Success <span className="text-accent">Stories</span>
          </h1>
        </div>
      </div>

      {/* ── Intro copy ── */}
      <div className="mx-auto max-w-360 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <h2 className="font-redrose text-primary text-4xl leading-tight font-bold sm:text-5xl lg:flex-1">
            Read About Our Impact
          </h2>
          <p className="text-foreground text-lg leading-relaxed font-medium lg:flex-1 lg:pt-2">
            Every month, new stories like these are being written at Teworh
          </p>
        </div>
      </div>
    </div>
  )
}
