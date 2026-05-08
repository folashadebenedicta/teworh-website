'use client'

import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { stories } from '@/data/success-stories'

const loopedStories = [...stories, ...stories]

const tagStyles = {
  green: { bg: '#F0FAF1', text: '#3B924C', dot: '#3B924C' },
  orange: { bg: '#FFF3EA', text: '#FF5714', dot: '#FF5714' },
}

export function SuccessStoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
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
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const activeStory = stories[selectedIndex]
  const activeColors = tagStyles[activeStory.tagColor]

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-xl font-bold md:text-3xl">
              Success stories
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-xs text-3xl leading-tight font-bold sm:text-5xl md:max-w-2xl lg:text-6xl">
            Read Our Success Stories
          </h2>
        </div>

        {/* Desktop carousel */}
        <div className="hidden overflow-hidden lg:block" ref={emblaRef}>
          <div className="flex">
            {loopedStories.map((s, i) => {
              const colors = tagStyles[s.tagColor]
              return (
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
                      <span
                        className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
                        style={{ background: colors.bg, color: colors.text }}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: colors.dot }}
                        />
                        {s.tag}
                      </span>
                      <h3 className="font-redrose text-primary text-3xl font-bold lg:text-4xl">
                        {s.name}
                      </h3>
                      <p className="text-foreground line-clamp-4 text-base leading-relaxed">
                        {s.body[0]}
                      </p>
                      <Button
                        asChild
                        variant="accent"
                        size="pill"
                        className="w-fit px-8 py-3"
                      >
                        <Link href="/success-stories">Read story</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
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
          <span
            className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
            style={{ background: activeColors.bg, color: activeColors.text }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: activeColors.dot }}
            />
            {activeStory.tag}
          </span>
          <h3 className="font-redrose text-primary text-2xl font-bold">
            {activeStory.name}
          </h3>
          <p className="text-foreground line-clamp-4 text-base leading-relaxed">
            {activeStory.body[0]}
          </p>
          <Button
            asChild
            variant="accent"
            size="pill"
            className="w-fit px-8 py-3"
          >
            <Link href="/success-stories">Read more</Link>
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
