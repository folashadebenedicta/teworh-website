import Image from 'next/image'

const timeline = [
  {
    year: '2018',
    title: 'Foundation',
    description:
      'TEWORH Incorporated in Kaduna. First community pitch project breakdown',
  },
  {
    year: '2020',
    title: 'First Launch Academy',
    description:
      'Football academy programme established 40 youths enrolled in inaugural cohort.',
  },
  {
    year: '2022',
    title: 'Surfaces Division',
    description:
      'Sports & Surfaces & Flooring vertical launched. First artificial turf installation launch completed.',
  },
  {
    year: '2023',
    title: '500 Athletes',
    description:
      'Milestone reached. 500 athletes trained across all programs. Expanded to 3 states',
  },
  {
    year: '2025',
    title: '1000+ Lives',
    description:
      'Impact milestone hit. Active operations across 6 states. Aquatic center ongoing.',
  },
]

export function OurStorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* ── LEFT: image collage ── */}
          <div className="flex flex-col gap-4 lg:w-[30%] lg:shrink-0 xl:w-120">
            {/* Top: one tall image */}
            <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
              <Image
                src="/images/story-d.jpg"
                alt="Footballers celebrating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>

            {/* Middle: two side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src="/images/story-b.png"
                  alt="Aerial stadium track"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src="/images/story-c.png"
                  alt="Construction planning"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            </div>

            {/* Bottom: one tall image */}
            <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
              <Image
                src="/images/story-a.png"
                alt="Netball game in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>

          {/* ── RIGHT: copy + timeline ── */}
          <div className="flex min-w-0 flex-1 flex-col gap-8">
            {/* Section label */}
            <div className="flex items-center gap-3">
              <span className="text-primary text-3xl font-bold">Our story</span>
              <span className="bg-accent h-1 w-14" />
            </div>

            {/* Heading */}
            <h2 className="font-redrose text-primary text-4xl leading-tight font-bold sm:text-5xl">
              Born from a gap in African sports
            </h2>

            {/* Body copy */}
            <div className="text-foreground flex flex-col gap-4 text-[clamp(0.875rem,1.2vw,1.125rem)] leading-relaxed font-medium">
              <p>
                TEWORH was founded on a simple but urgent observation: Africa
                has extraordinary athletic talent, but chronically underfunded
                infrastructure and no single partner capable of closing that gap
                end-to-end.
              </p>
              <p>
                We started by building one pitch in a community that had none.
                There was no grandstand, no changing room just raw earth
                levelled, lined, and handed back to a generation of young people
                who had been training on rubble. That first project taught us
                everything we needed to know about what this work means.
              </p>
              <p>
                Today, we design facilities, install playing surfaces, supply
                equipment, and run the athlete development programs that fill
                those facilities with champions-in-the-making. Every project we
                deliver is driven by the belief that sports is not a luxury, it
                is a pathway to employment, discipline, community, and national
                pride.
              </p>
              <p>
                That belief is the foundation of everything we do. It is why we
                refuse to separate construction from coaching, or surfaces from
                skills. You cannot develop a world-class athlete in a
                sub-standard environment. And a world class facility without a
                pipeline of talent is just an empty building.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col divide-y divide-[#cccccc]">
              {timeline.map(({ year, title, description }) => (
                <div key={year} className="flex items-start gap-6 py-5">
                  <span className="font-redrose w-16 shrink-0 text-3xl font-bold text-[#DAFADF]">
                    {year}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-base font-bold">{title}</p>
                    <p className="text-foreground text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
