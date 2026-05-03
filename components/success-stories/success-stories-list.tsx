'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { stories } from '@/data/success-stories'

const tagStyles: Record<string, string> = {
  green: 'bg-[#DAFADF] text-[#009606]',
  orange: 'bg-[#FFF3EA] text-[#FF5714]',
}

const dotStyles: Record<string, string> = {
  green: 'bg-[#009606]',
  orange: 'bg-[#FF5714]',
}

const PER_PAGE = 6

export function SuccessStoriesList() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(stories.length / PER_PAGE)
  const paginated = stories.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function goTo(p: number) {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stories */}
        <div className="flex flex-col">
          {paginated.map((story, i) => (
            <div
              key={`${story.name}-${i}`}
              className="flex flex-col gap-6 py-12 sm:flex-row sm:items-start sm:gap-10"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 sm:w-96 sm:shrink-0">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="flex max-w-2xl flex-1 flex-col gap-4">
                <h2 className="font-redrose text-primary text-2xl font-bold sm:text-3xl">
                  {story.name}
                </h2>

                {/* Tag */}
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${tagStyles[story.tagColor]}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${dotStyles[story.tagColor]}`}
                  />
                  {story.tag}
                </span>

                {/* Body paragraphs */}
                <div className="flex flex-col gap-3">
                  {story.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-foreground text-base leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="text-primary flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-[#F0FAF1] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                  p === page
                    ? 'bg-[#3B924C] text-white'
                    : 'text-primary hover:bg-[#F0FAF1]'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="text-primary flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-[#F0FAF1] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
