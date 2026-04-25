import { Target, Eye } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Build',
    description:
      'Construct world-class sports infrastructure for every level of sport from community pitches to elite performance centres.',
  },
  {
    number: '02',
    title: 'Develop',
    description:
      'Take athletes from grassroots identification all the way to professional placement through structured, multi-year programs.',
  },
  {
    number: '03',
    title: 'Empower',
    description:
      'Strengthen communities through sustainable sports ecosystems that create employment, discipline, and long-term social value.',
  },
  {
    number: '04',
    title: 'Champion',
    description:
      'Hold ourselves to excellence, integrity, and accountability in every project, partnership, and program we are part of.',
  },
]

export function PurposeDirectionSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">
              Purpose & Direction
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-2xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            What we stand for
          </h2>
        </div>

        {/* Mission + Vision cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mission */}
          <div className="flex flex-col gap-5 rounded-2xl bg-[#F6FFF7] p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5E9]">
              <Target className="h-5 w-5 text-[#3B924C]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-widest text-[#3B924C] uppercase">
                Our Mission
              </p>
              <h3 className="font-redrose text-primary text-2xl leading-snug font-bold sm:text-3xl">
                To build the infrastructure that transforms African sports from
                the ground up
              </h3>
              <p className="text-foreground text-base leading-relaxed">
                We exist to close the gap between raw African talent and
                world-class opportunity by constructing elite facilities,
                developing athletes with integrity, and supplying the tools
                communities need to compete at the highest level. Every project
                we deliver creates access where access did not exist before.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-5 rounded-2xl bg-[#F6FFF7] p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5E9]">
              <Eye className="h-5 w-5 text-[#3B924C]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-widest text-[#3B924C] uppercase">
                Our Vision
              </p>
              <h3 className="font-redrose text-primary text-2xl leading-snug font-bold sm:text-3xl">
                A continent where every community has the facilities to raise
                its own champions
              </h3>
              <p className="text-foreground text-base leading-relaxed">
                We envision an Africa where geography and income are no longer
                barriers to athletic excellence where a child growing up in any
                town has access to a certified pitch, professional coaching, and
                a clear pathway to professional sports. TEWORH will be the
                organisation that made that possible.
              </p>
            </div>
          </div>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ number, title, description }) => (
            <div
              key={number}
              className="flex flex-col gap-4 rounded-2xl bg-[#F6FFF7] p-6"
            >
              <span className="font-redrose text-3xl font-bold text-[#3B924C]/30">
                {number}
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="font-redrose text-primary text-xl font-bold">
                  {title}
                </h4>
                <p className="text-foreground text-sm leading-relaxed">
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
