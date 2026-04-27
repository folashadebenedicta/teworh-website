'use client'

import Image from 'next/image'
import { useState } from 'react'

/**
 * Images reuse your existing project assets:
 *  /images/project-1.png  — Indoor Sports Hall
 *  /images/project-2.png  — Youths Skills Center
 *  /images/project-3.png  — Aquatic Center / Football Field
 *  /images/project-4.png  — Main Training Ground
 */

type Status = 'COMPLETED' | 'ONGOING' | 'UPCOMING'

const projects = [
  {
    year: '2023',
    status: 'COMPLETED' as Status,
    title: 'Indoor Sports Hall Construction',
    description: 'Community Name: Serves 800+ athletes',
    image: '/images/project-3.png',
    alt: 'Indoor sports hall',
  },
  {
    year: '2024',
    status: 'COMPLETED' as Status,
    title: 'Youths Skills Center',
    description: 'Community Name: Serves 360+ youth engaged',
    image: '/images/project-2.png',
    alt: 'Youth skills center gym',
  },
  {
    year: '2025',
    status: 'ONGOING' as Status,
    title: 'Football Field Construction',
    description: 'Community Name: 60% complete',
    image: '/images/project-1.png',
    alt: 'Football field construction',
  },
  {
    year: '2025',
    status: 'ONGOING' as Status,
    title: 'Football Field Construction',
    description: 'Community Name: 60% complete',
    image: '/images/project-1.png',
    alt: 'Football field construction',
  },
  {
    year: '2026',
    status: 'UPCOMING' as Status,
    title: 'Main Training Ground Development',
    description: 'Community Name: Serves 800+ athletes',
    image: '/images/project-4.png',
    alt: 'Main training ground',
  },
  {
    year: '2026',
    status: 'UPCOMING' as Status,
    title: 'Main Training Ground Development',
    description: 'Community Name: Serves 800+ athletes',
    image: '/images/project-4.png',
    alt: 'Main training ground',
  },
]

const statusStyles: Record<
  Status,
  { badge: string; dot: string; year: string }
> = {
  COMPLETED: {
    badge: 'bg-[#DAFADF] text-[#009606]',
    dot: 'bg-[#009606]',
    year: 'text-[#DAF4DF]',
  },
  ONGOING: {
    badge: 'bg-[#FFF3EA] text-[#FF5714]',
    dot: 'bg-[#FF5714]',
    year: 'text-[#FFE8DF]',
  },
  UPCOMING: {
    badge: 'bg-[#FFF3EA] text-[#FF5714]',
    dot: 'bg-[#FF5714]',
    year: 'text-[#FFE8DF]',
  },
}

type Filter = 'All projects' | 'Completed' | 'Ongoing' | 'Upcoming'

const filters: Filter[] = ['All projects', 'Completed', 'Ongoing', 'Upcoming']

const filterMap: Record<Filter, Status | null> = {
  'All projects': null,
  Completed: 'COMPLETED',
  Ongoing: 'ONGOING',
  Upcoming: 'UPCOMING',
}

function ProjectCard({
  year,
  status,
  title,
  description,
  image,
  alt,
}: (typeof projects)[0]) {
  const styles = statusStyles[status]
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[20px] bg-white"
      style={{ boxShadow: '0 0 20px 0 rgba(169, 169, 169, 0.16)' }}
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl sm:h-56">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      {/* Meta + text */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
            {status}
          </span>
          <span className={`font-redrose text-4xl font-bold ${styles.year}`}>
            {year}
          </span>
        </div>
        <h3 className="font-redrose text-primary text-xl font-bold">{title}</h3>
        <p className="text-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>('All projects')

  const filtered = projects.filter(p =>
    filterMap[active] === null ? true : p.status === filterMap[active]
  )

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="mb-10 flex justify-center">
          <div
            className="flex flex-wrap items-center gap-2 rounded-[10px] bg-white px-3 py-2"
            style={{ boxShadow: '0 0 8px 0 rgba(108, 108, 108, 0.10)' }}
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  active === f
                    ? 'bg-[#009606] text-white'
                    : 'text-primary bg-transparent hover:bg-[#F0FAF1]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
