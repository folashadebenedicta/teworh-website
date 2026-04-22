'use client'

import {
  ShieldCheck,
  CircleCheck,
  MapPin,
  Check,
  Users,
  ArrowUpRight,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'End-To-End Value',
    description:
      "We take a project from concept through to champion athletes who perform for it there's no handoff gap.",
  },
  {
    icon: CircleCheck,
    title: 'Single-Source Procurement',
    description:
      'Surfaces, equipment, construction, and athletes from one provider eliminating costly coordination between vendors.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description:
      'Deep knowledge of African sports infrastructure needs, climate, and market conditions that international firms miss.',
  },
  {
    icon: Check,
    title: 'Certified Quality',
    description:
      'Premium, internationally certified surfaces and equipment built to last and accountable to performance standards.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description:
      'Every project we deliver contributes lasting social value sports access for communities that need it most.',
  },
  {
    icon: ArrowUpRight,
    title: 'Result Driven',
    description:
      'Measurable outcomes for clients and investors. We are accountable to the results we promise and deliver.',
  },
]

export function WhyTeworhSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">Why Teworh</span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            One Partner, Everything Sports
          </h2>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 divide-y divide-[#D7D7D7] rounded-xl border border-[#D7D7D7] sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 [&>*:nth-child(-n+3)]:lg:border-b [&>*:nth-child(-n+3)]:lg:border-[#EAEAEA]">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`flex flex-col gap-5 p-8 sm:p-10 ${
                i % 2 === 0 ? 'sm:border-r sm:border-[#D7D7D7]' : ''
              } ${
                i % 3 !== 2
                  ? 'lg:border-r lg:border-[#D7D7D7]'
                  : 'lg:border-r-0'
              }`}
            >
              {/* Icon bubble */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEFFEF]">
                <Icon className="h-6 w-6 text-[#60C44D]" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-redrose text-primary text-xl font-bold">
                  {title}
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
