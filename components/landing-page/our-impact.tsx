'use client'

import Image from 'next/image'

const stats = [
  {
    value: '85%',
    label:
      'Of Skills Program Graduates\nEmployed or Self-Employed\nWithin 6 Months',
  },
  { value: '1,000+', label: 'Youth Reached\nThrough Skills Programs' },
  { value: '6', label: 'World-Class\nFacilities Built & Managed' },
  { value: '10+', label: 'Sports Events\nOrganised' },
  { value: '500+', label: 'Athletes Trained\nAcross All Disciplines' },
  { value: '3+', label: 'Communities\nDirectly Impacted' },
]

export function OurImpactSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">Our impact</span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-2xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Real people, Real Change
          </h2>
        </div>

        {/* Diamond grid — desktop */}
        <div className="hidden lg:block">
          <div className="relative mx-auto" style={{ width: 740, height: 620 }}>
            {/* Row 1 */}
            <DiamondStat
              value="85%"
              label={
                'Of Skills Program Graduates\nEmployed or Self-Employed\nWithin 6 Months'
              }
              style={{ top: 0, left: 70 }}
            />
            <DiamondStat
              value="1,000+"
              label={'Youth Reached\nThrough Skills Programs'}
              style={{ top: 0, left: 350 }}
            />

            {/* Row 2 */}
            <DiamondStat
              value="6"
              label={'World-Class\nFacilities Built & Managed'}
              style={{ top: 200, left: -70 }}
            />
            <DiamondLogo style={{ top: 200, left: 210 }} />
            <DiamondStat
              value="10+"
              label={'Sports Events\nOrganised'}
              style={{ top: 200, left: 490 }}
            />

            {/* Row 3 */}
            <DiamondStat
              value="500+"
              label={'Athletes Trained\nAcross All Disciplines'}
              style={{ top: 400, left: 70 }}
            />
            <DiamondStat
              value="3+"
              label={'Communities\nDirectly Impacted'}
              style={{ top: 400, left: 350 }}
            />
          </div>
        </div>

        {/* Mobile / tablet fallback */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:hidden">
          {stats.map(({ value, label }) => (
            <div
              key={value}
              className="flex flex-col items-center gap-2 rounded-2xl bg-[#F0FAF1] px-4 py-6 text-center"
            >
              <p className="font-redrose text-3xl font-bold text-[#1B5E2E]">
                {value}
              </p>
              <p className="text-sm leading-snug font-medium text-[#2d4a35]">
                {label.replace(/\n/g, ' ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiamondStat({
  value,
  label,
  style,
}: {
  value: string
  label: string
  style: React.CSSProperties
}) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ width: 210, height: 210, ...style }}
    >
      {/* Rotated rounded square = rounded diamond */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '30px',
          transform: 'rotate(45deg)',
          backgroundColor: '#E8F5E9',
        }}
      />
      {/* Content — z-index keeps it above the rotated bg */}
      <div className="relative z-10 flex flex-col items-center gap-1 px-8 text-center">
        <p className="font-redrose text-4xl font-bold text-[#1B5E2E]">
          {value}
        </p>
        <p className="text-xs leading-snug font-medium text-[#2d5a3a]">
          {label.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

function DiamondLogo({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ width: 210, height: 210, ...style }}
    >
      <div className="relative z-10 flex flex-col items-center gap-1">
        <div className="relative h-14 w-14">
          <Image
            src="/images/logo.png"
            alt="Teworh"
            fill
            className="object-contain"
          />
        </div>
        <p className="font-redrose text-sm font-bold tracking-wide text-[#1B5E2E]">
          TEWORH
        </p>
        <p className="text-[10px] font-medium tracking-widest text-[#3B924C] uppercase">
          Sports & Skills Center
        </p>
      </div>
    </div>
  )
}
