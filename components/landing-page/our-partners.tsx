'use client'

import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

const partners = [
  { src: '/images/partner-1.png', alt: 'MBello Consult Nigeria Limited' },
  { src: '/images/partner-2.png', alt: 'Data Bros Tech' },
  { src: '/images/image2.png', alt: 'El-Tayib Energy Systems' },
  { src: '/images/partner-4b.png', alt: 'Kada Warriors Football Club' },
  { src: '/images/partner-5b.png', alt: 'Amstel Malta' },
  { src: '/images/partner-6b.png', alt: 'Clique Nigeria' },
  { src: '/images/partner-7.png', alt: 'Sports Supreme' },
]

export function OurPartnersSection() {
  const autoScroll = useRef(
    AutoScroll({ speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [autoScroll.current]
  )

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">
              Our Partners
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
        </div>
      </div>

      {/* Carousel — full width */}
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="flex items-center">
            {/* Duplicate for seamless loop */}
            {[...partners, ...partners].map(({ src, alt }, i) => (
              <div
                key={`${alt}-${i}`}
                className="mx-6 flex w-40 shrink-0 items-center justify-center"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    sizes="140px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <Button
          asChild
          variant="accent"
          size="pill"
          className="px-8 py-3 text-base"
        >
          <Link href="/contact">Partner with us</Link>
        </Button>
      </div>
    </section>
  )
}
