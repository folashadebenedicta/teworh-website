import Image from 'next/image'

const team = [
  {
    name: 'Dr Surajdeen Olaniyi Abdulwahab',
    role: 'Founder & CEO',
    image: '/images/Surajdeen.png',
  },
  {
    name: 'Team Members',
    role: 'Team Members',
    image: '/images/team.png',
  },
  {
    name: 'Team Members',
    role: 'Team Members',
    image: '/images/team2.jpeg',
  },
  {
    name: 'Team Members',
    role: 'Team Members',
    image: '/images/team3.JPG',
  },
]

const pillars = [
  'Teworh Foundation',
  'Teworh Rockstars Academy',
  'Teworh Sports and Skills Centre',
]

export function MeetTheTeamSection() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-xl font-bold md:text-3xl">
              Meet the team
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-xs text-3xl leading-tight font-bold sm:text-5xl md:max-w-2xl lg:text-6xl">
            The people behind the work
          </h2>
        </div>

        {/* ── Founder Bio ── */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-[#F6FFF7]">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="relative h-80 w-full shrink-0 lg:h-auto lg:w-105">
              <Image
                src="/images/Surajdeen.png"
                alt="Dr Surajdeen Olaniyi Abdulwahab"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              {/* Fade into bg on mobile */}
              <div className="absolute inset-0 bg-linear-to-t from-[#F6FFF7] via-transparent to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="bg-accent h-1 w-8" />
                <span className="text-xs font-bold tracking-widest text-[#3B924C] uppercase">
                  Founder&apos;s Story
                </span>
              </div>

              {/* Name + role */}
              <div className="flex flex-col gap-1">
                <h3 className="font-redrose text-primary text-3xl leading-tight font-bold sm:text-4xl">
                  Dr. Surajdeen Olaniyi Abdulwahab
                </h3>
                <p className="text-accent text-xs font-bold tracking-widest uppercase">
                  Founder - Teworh Foundation · Rockstars Academy · Sports &
                  Skills Centre
                </p>
              </div>

              {/* Bio */}
              <div className="text-foreground flex flex-col gap-4 text-base leading-relaxed">
                <p>
                  Dr. Surajdeen is a visionary leader, entrepreneur, and
                  relentless advocate for youth empowerment, a man who believes
                  that every young person, regardless of background, carries
                  untapped potential waiting to be unlocked.
                </p>
                <p>
                  Driven by that conviction, he founded three interconnected
                  platforms, each one a vehicle for discovery, development, and
                  transformation. Through these institutions, he has built
                  pathways for young people to grow through sport, education,
                  entrepreneurship, and leadership.
                </p>
                <p>
                  His work goes beyond building organisations. Dr. Surajdeen
                  builds people, mentoring the next generation of athletes,
                  leaders, and changemakers, and creating environments where
                  talent is seen, nurtured, and scaled to its fullest
                  expression.
                </p>
              </div>

              {/* Pillar tags */}
              <div className="flex flex-wrap gap-2">
                {pillars.map(p => (
                  <span
                    key={p}
                    className="rounded-full bg-[#E8F5E9] px-4 py-1.5 text-sm font-semibold text-[#1B5E2E]"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-accent text-foreground border-l-4 pl-4 italic">
                &quot;Inspiring hope. Unlocking potential. Building the next
                generation.&quot;
              </blockquote>
            </div>
          </div>
        </div>

        {/* ── Team grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {team.map(({ name, role, image }) => (
            <div
              key={image}
              className="relative overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 0 20px 0 rgba(169, 169, 169, 0.16)' }}
            >
              <div className="relative w-full" style={{ aspectRatio: '5/4' }}>
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-redrose text-lg font-bold text-white sm:text-xl">
                  {name}
                </p>
                <p className="text-accent text-xs font-bold tracking-widest uppercase">
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
