'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const cards = [
  {
    icon: '/icons/age-group.svg',
    label: 'Age Group',
    value: '8 - 25 years',
  },
  {
    icon: '/icons/calendar.svg',
    label: 'Ongoing',
    value: 'Termly agreement',
  },
  {
    icon: '/icons/level.svg',
    label: 'Level',
    value: 'Beginner',
  },
]

export function FootballAcademySection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/academy-bg.png"
          alt="Football players in action"
          fill
          priority
          className="object-cover object-[50%_38%]"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-360 flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        {/* Ball icon */}
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          <Image
            src="/images/academy-ball2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="font-redrose text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Football Academy
        </h2>

        {/* Sub-copy */}
        <p className="max-w-4xl text-lg leading-relaxed font-normal text-white sm:text-2xl">
          All football programs focuses on developing technically, skilled and
          discipline players through a structured training sessions, tactical
          education and competitive matches
        </p>

        {/* Info cards */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          {cards.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex w-44 flex-col items-center gap-3 rounded-2xl px-6 py-5 text-white"
              style={{
                background: 'rgba(255, 255, 255, 0.40)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Icon */}
              <div className="relative h-9 w-9">
                <Image src={icon} alt="" fill className="object-contain" />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <p className="font-redrose text-xl font-semibold text-white">
                  {label}
                </p>
                <p className="text-base font-normal text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          asChild
          variant="accent"
          size="pill"
          className="px-8 py-3 text-base"
        >
          <Link href="/training/football">Apply for football</Link>
        </Button>
      </div>
    </section>
  )
}
