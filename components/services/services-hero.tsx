import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Facility Design, Build & Management',
    description:
      'End-to-end sports infrastructure from architectural concept to construction, commissioning, and ongoing management. Master planning, full construction, and day-to-day operations.',
    image: '/images/service-1.png',
    alt: 'Hard hat and blueprints',
  },
  {
    number: '02',
    title: 'Athelete Discovery & Development',
    description:
      'A Structured Pipeline From Grassroots Identification To Professional Placement. Scouting, Coaching, Welfare, Nutrition, Academic Support, And Agency Services.',
    image: '/images/service-2.png',
    alt: 'Footballer on pitch',
  },
  {
    number: '03',
    title: 'Sport Surfaces & Flooring',
    description:
      'Premium supply and installation of certified sports surfaces for indoor and outdoor facilities. Artificial turf, laminate, wood, acrylic courts, epoxy floors and tartan athletics tracks.',
    image: '/images/service-3.jpg',
    alt: 'Aerial stadium shot',
  },
  {
    number: '04',
    title: 'Sport Equipment & Gear',
    description:
      'Comprehensive supply of sports equipment and branded athletic gear for teams, academies, schools, and individual athletes. Bulk & institutional orders available.',
    image: '/images/service-4.png',
    alt: 'Sports equipment flatlay',
  },
]

export function ServicesHero() {
  return (
    <div>
      {/* ── Hero image with breadcrumb ── */}
      <div className="relative h-64 w-full sm:h-80 lg:h-105">
        <Image
          src="/images/services-hero.jpg"
          alt="Construction workers in safety gear"
          fill
          priority
          className="object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 flex items-center gap-1 bg-[#4CAF50]/60 px-4 py-2 pr-32 text-sm font-medium text-white [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)] md:pr-44 lg:pr-92">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span>Services</span>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-redrose text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our <span className="text-accent">Services</span>
          </h1>
        </div>
      </div>

      {/* ── Intro copy ── */}
      <div className="mx-auto max-w-360 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <h2 className="font-redrose text-primary text-4xl leading-tight font-bold sm:text-5xl lg:flex-1">
            From the ground up we build everything
          </h2>
          <p className="text-foreground text-lg leading-relaxed font-medium lg:flex-1 lg:pt-2">
            Every playground we build, every park we develop, every facility we
            construct and manage is an investment in the physical foundation of
            Nigerian sports and community wellbeing.
          </p>
        </div>

        {/* ── Service cards ── */}
        <div className="mt-16 flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services
              .slice(0, 2)
              .map(({ number, title, description, image, alt }) => (
                <ServiceCard
                  key={number}
                  number={number}
                  title={title}
                  description={description}
                  image={image}
                  alt={alt}
                />
              ))}
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services
              .slice(2, 4)
              .map(({ number, title, description, image, alt }) => (
                <ServiceCard
                  key={number}
                  number={number}
                  title={title}
                  description={description}
                  image={image}
                  alt={alt}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({
  number,
  title,
  description,
  image,
  alt,
}: {
  number: string
  title: string
  description: string
  image: string
  alt: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-[#EAEAEA] sm:max-h-80 sm:flex-row lg:max-h-none">
      {/* Text */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <span className="text-accent text-2xl font-bold">{number}</span>
        <h3 className="font-redrose text-2xl font-medium text-black sm:text-3xl">
          {title}
        </h3>
        <p className="text-foreground text-base">{description}</p>
      </div>
      {/* Image */}
      <div className="relative min-h-64 sm:min-h-0 sm:w-56 sm:shrink-0 lg:w-72">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 224px, 288px"
        />
      </div>
    </div>
  )
}
