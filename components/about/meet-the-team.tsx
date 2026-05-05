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

        {/* 2-col grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {team.map(({ name, role, image }) => (
            <div
              key={name}
              className="relative overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 0 20px 0 rgba(169, 169, 169, 0.16)' }}
            >
              {/* Photo */}
              <div className="relative w-full" style={{ aspectRatio: '5/4' }}>
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* Text — bottom left */}
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
