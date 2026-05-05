'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-10 px-4 pb-16 sm:px-6 lg:flex-row lg:items-center lg:gap-0 lg:px-8">
        {/* LEFT: copy */}
        <div className="flex flex-1 flex-col items-center gap-3 text-center lg:items-start lg:pr-8 lg:text-left">
          <div className="flex flex-col items-center select-none lg:items-start">
            {/* Row 1: Go Sports — always on one line */}
            <div className="flex items-center justify-center gap-x-2 lg:justify-start">
              {' '}
              <span className="text-secondary-foreground font-redrose text-[clamp(2rem,5.5vw,4.6875rem)] leading-none font-bold">
                Go
              </span>
              <span className="font-redrose inline-flex items-center text-[clamp(3.5rem,10.5vw,9.375rem)] leading-none font-bold text-[#3B924C]">
                Sp
                <span
                  className="relative inline-block"
                  style={{ width: '0.50em', height: '0.7em' }}
                >
                  <Image
                    src="/images/balls2.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </span>
                rts
              </span>
            </div>

            {/* Row 2: Go Teworh — always on one line */}
            <div className="flex items-center justify-center gap-x-2 lg:justify-start">
              <span className="text-secondary-foreground font-redrose text-[clamp(2rem,5.5vw,4.6875rem)] leading-none font-bold">
                Go
              </span>
              <span className="font-redrose text-[clamp(3.5rem,10.5vw,9.375rem)] leading-none font-bold text-[#3B924C]">
                Teworh
              </span>
            </div>
          </div>

          {/* Sub-copy */}
          <p className="text-foreground max-w-sm text-base leading-relaxed font-medium sm:text-2xl md:max-w-lg lg:max-w-xl">
            Building facilities, developing entrepreneurs and athletes,
            empowering communities
          </p>

          {/* CTAs */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              asChild
              variant="accent"
              size="pill"
              className="w-full p-6 sm:w-auto"
            >
              <Link href="/partner">Partner with us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="pill"
              className="w-full p-6 sm:w-auto"
            >
              <Link href="/apply">Apply for training</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT: collage — hidden on tablet and below */}
        <div className="relative hidden max-h-160 flex-1 items-start lg:flex">
          <div className="relative h-105 w-full lg:h-160">
            <Image
              src="/images/hero-img.png"
              alt="Sports and infrastructure collage"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
