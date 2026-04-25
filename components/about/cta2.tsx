import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-360 flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <h2 className="font-redrose max-w-4xl text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-7xl">
          Lets build something lasting together
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            variant="accent"
            size="pill"
            className="px-8 py-3 text-base"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>

          <Button
            asChild
            size="pill"
            className="text-primary bg-white px-8 py-3 text-base font-semibold hover:bg-white/90"
          >
            <Link href="/projects">View our projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
