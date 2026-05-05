'use client'

import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const stories = [
  {
    category: 'FOOTBALLER',
    title: 'The footballer who almost gave up',
    excerpt:
      "Emeka was 15 when he first walked through Teworh's gates barefoot, carrying a deflated ball, and convinced that football was just something to do after school. Three years later, he was signing his first professional contract with a club in Portugal...",
    image: '/images/story-1.png',
    alt: 'Young footballers training',
    href: '/success-stories/emeka',
  },
  {
    category: 'BASKETBALL',
    title: 'From the streets to the national team',
    excerpt:
      'Chidi had never played on a proper court before Teworh. Today he represents Nigeria at the U-23 level and credits the coaching staff for everything...',
    image: '/images/story-2.png',
    alt: 'Basketball player dunking',
    href: '/success-stories/chidi',
  },
]

// Duplicate so Embla loop has enough slides to work seamlessly
const loopedStories = [...stories, ...stories]

export function SuccessStoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    // Map back to real story index
    setSelectedIndex(emblaApi.selectedScrollSnap() % stories.length)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    Promise.resolve().then(onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi]
  )

  const activeStory = stories[selectedIndex]

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">
              Success stories
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-3xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Read Our Success Stories
          </h2>
        </div>

        {/* Desktop carousel */}
        <div className="hidden overflow-hidden lg:block" ref={emblaRef}>
          <div className="flex">
            {loopedStories.map((s, i) => (
              <div
                key={i}
                className="w-full shrink-0 pr-8 lg:w-full xl:w-4/5 2xl:w-4/5"
              >
                <div className="flex items-center gap-10">
                  {/* Image */}
                  <div className="relative h-80 w-105 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center 25%' }}
                      sizes="420px"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-5">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-[#FFF3EA] px-4 py-1.5 text-sm font-semibold text-[#FF5714]">
                      <span className="h-2 w-2 rounded-full bg-[#FF5714]" />
                      {s.category}
                    </span>
                    <h3 className="font-redrose text-primary text-3xl font-bold lg:text-4xl">
                      {s.title}
                    </h3>
                    <p className="text-foreground text-base leading-relaxed">
                      {s.excerpt}
                    </p>
                    <Button
                      asChild
                      variant="accent"
                      size="pill"
                      className="w-fit px-8 py-3"
                    >
                      <Link href={s.href}>Read story</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single active card */}
        <div className="flex flex-col gap-5 lg:hidden">
          <div className="relative h-96 w-full overflow-hidden rounded-2xl">
            <Image
              src={activeStory.image}
              alt={activeStory.alt}
              fill
              className="object-cover"
              style={{ objectPosition: 'center 20%' }}
              sizes="100vw"
            />
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E8622A]/30 bg-[#FFF3EA] px-4 py-1.5 text-sm font-semibold text-[#E8622A]">
            <span className="h-2 w-2 rounded-full bg-[#E8622A]" />
            {activeStory.category}
          </span>
          <h3 className="font-redrose text-primary text-2xl font-bold">
            {activeStory.title}
          </h3>
          <p className="text-foreground text-base leading-relaxed">
            {activeStory.excerpt}
          </p>
          <Button
            asChild
            variant="accent"
            size="pill"
            className="w-fit px-8 py-3"
          >
            <Link href={activeStory.href}>Read story</Link>
          </Button>
        </div>

        {/* Dot navigation */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to story ${i + 1}`}
              style={{
                height: 10,
                width: i === selectedIndex ? 32 : 10,
                borderRadius: 9999,
                background: i === selectedIndex ? '#3B924C' : '#D1D5DB',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
