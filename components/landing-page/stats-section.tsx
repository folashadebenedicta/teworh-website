'use client'

import Image from 'next/image'

const stats = [
  {
    icon: '/icons/trophy.svg',
    value: '1,000+',
    label: 'Youth Empowered',
    sub: 'Through our skill programs',
  },
  {
    icon: '/icons/football-bold.svg',
    value: '500+',
    label: 'Athletes Trained',
    sub: 'Through our skill programs',
  },
  {
    icon: '/icons/office.svg',
    value: '10+',
    label: 'Facilities Built & Managed',
    sub: 'Through our skill programs',
  },
  {
    icon: '/icons/location.svg',
    value: '10+',
    label: 'Community Impacted',
    sub: 'Through our skill programs',
  },
]

export function StatsSection() {
  return (
    <section className="bg-[#F6FFF7]">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-[#ccc] lg:grid-cols-4 lg:divide-y-0">
          {stats.map(({ icon, value, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 px-6 py-10 text-center sm:px-8 sm:py-12"
            >
              {/* Icon */}
              <div className="relative h-10 w-10 sm:h-13 sm:w-13">
                <Image src={icon} alt="" fill className="object-contain" />
              </div>

              {/* Number */}
              <p className="font-redrose text-secondary-foreground text-[clamp(2.5rem,5vw,4rem)] leading-none font-bold">
                {value}
              </p>

              {/* Label */}
              <p className="text-lg font-bold text-[#353535] sm:text-xl">
                {label}
              </p>

              {/* Sub */}
              <p className="text-base font-normal text-[#505254]">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
