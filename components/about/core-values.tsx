import {
  Shield,
  Users,
  CircleCheck,
  Clock,
  Infinity,
  ArrowUpRight,
} from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity in Every Brick',
    description:
      'We build to international standards, not local shortcuts. Our facilities, programs, and partnerships are accountable to measurable outcomes not just promises made in a proposal.',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'Every facility we build must leave the surrounding community better off. We measure success not just in structures completed, but in livelihoods created and lives changed around them.',
  },
  {
    icon: CircleCheck,
    title: 'Excellence',
    description:
      'We refuse to accept "good enough" on behalf of African athletes. From the surfaces we install to the coaches we deploy, we hold ourselves to the same standards as the world\'s best sporting organisations.',
  },
  {
    icon: Clock,
    title: 'Long-Term Thinking',
    description:
      "We don't build for the ribbon-cutting ceremony. We design facilities to last 20 years, develop athletes over multi-year programs, and structure partnerships for sustained impact not quick wins.",
  },
  {
    icon: Infinity,
    title: 'Inclusive Access to Sports',
    description:
      'Talent is evenly distributed; opportunity is not. We actively design programs and pricing that ensure the most talented young people regardless of background can access what we build.',
  },
  {
    icon: ArrowUpRight,
    title: 'Accountability',
    description:
      'We track, measure, and report on the outcomes we deliver athlete placements, facilities managed, communities served. We are only as good as what we can demonstrate.',
  },
]

export function CoreValuesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">Core values</span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-3xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            The principle that drive every decision
          </h2>
        </div>

        {/* 3×2 grid — same pattern as WhyTeworhSection */}
        <div className="grid grid-cols-1 divide-y divide-[#EAEAEA] rounded-xl border border-[#EAEAEA] sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 [&>*:nth-child(-n+3)]:lg:border-b [&>*:nth-child(-n+3)]:lg:border-[#EAEAEA]">
          {values.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`flex flex-col gap-5 p-8 sm:p-10 ${
                i % 2 === 0 ? 'sm:border-r sm:border-[#EAEAEA]' : ''
              } ${
                i % 3 !== 2
                  ? 'lg:border-r lg:border-[#EAEAEA]'
                  : 'lg:border-r-0'
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5E9]">
                <Icon className="h-5 w-5 text-[#3B924C]" strokeWidth={1.5} />
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
