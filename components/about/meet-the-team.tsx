import Image from 'next/image'

const team = [
  {
    name: 'Emeka Obi',
    role: 'Founder & CEO',
    bio: 'Former national-level athlete turned infrastructure entrepreneur. Has overseen delivery of 10+ facilities across Nigeria since founding TEWORH in 2018.',
    image: '/images/team-1.jpg',
  },
  {
    name: 'Emeka Obi',
    role: 'Founder & CEO',
    bio: 'Former national-level athlete turned infrastructure entrepreneur. Has overseen delivery of 10+ facilities across Nigeria since founding TEWORH in 2018.',
    image: '/images/team-2.jpg',
  },
  {
    name: 'Emeka Obi',
    role: 'Founder & CEO',
    bio: 'Former national-level athlete turned infrastructure entrepreneur. Has overseen delivery of 10+ facilities across Nigeria since founding TEWORH in 2018.',
    image: '/images/team-3.jpg',
  },
  {
    name: 'Emeka Obi',
    role: 'Founder & CEO',
    bio: 'Former national-level athlete turned infrastructure entrepreneur. Has overseen delivery of 10+ facilities across Nigeria since founding TEWORH in 2018.',
    image: '/images/team-1.jpg',
  },
  {
    name: 'Emeka Obi',
    role: 'Founder & CEO',
    bio: 'Former national-level athlete turned infrastructure entrepreneur. Has overseen delivery of 10+ facilities across Nigeria since founding TEWORH in 2018.',
    image: '/images/team-2.jpg',
  },
  {
    name: 'Emeka Obi',
    role: 'Founder & CEO',
    bio: 'Former national-level athlete turned infrastructure entrepreneur. Has overseen delivery of 10+ facilities across Nigeria since founding TEWORH in 2018.',
    image: '/images/team-3.jpg',
  },
]

export function MeetTheTeamSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1 w-15" />
            <span className="text-primary text-3xl font-bold">
              Meet the team
            </span>
            <span className="bg-accent h-1 w-15" />
          </div>
          <h2 className="font-redrose text-primary max-w-3xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            The people behind the work
          </h2>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(({ name, role, bio, image }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#EAEAEA]"
              style={{ boxShadow: '0 0 20px 0 rgba(169, 169, 169, 0.16)' }}
            >
              {/* Photo */}
              <div className="relative h-64 w-full sm:h-80">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-redrose text-primary text-xl font-bold">
                  {name}
                </h3>
                <p className="text-accent text-xs font-bold tracking-widest uppercase">
                  {role}
                </p>
                <p className="text-foreground text-sm leading-relaxed">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
