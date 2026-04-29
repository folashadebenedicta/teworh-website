import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const stories = [
  {
    title: 'The footballer who almost gave up',
    name: 'Chukwuemeka Obi',
    tag: 'Selected for the state team',
    tagColor: 'green',
    excerpt:
      "Before Teworh, I didn't think someone like me could be taken seriously as a footballer. I thought professional football was for people from Lagos or Abuja not from where I'm from. Teworh changed how I see myself.\"",
    image: '/images/successstory-1.png',
    alt: 'Footballer running on pitch',
    href: '/success-stories/chukwuemeka-obi',
  },
  {
    title: 'From the track to the podium',
    name: 'Blessing Adesope',
    tag: 'National youth competition qualifier',
    tagColor: 'green',
    excerpt:
      "Blessing joined Teworh's Athletics program at 13 with no formal training  just raw speed and a will to win that her secondary school PE teacher couldn't ignore. Within eighteen months of structured coaching, she clocked a personal...",
    image: '/images/successstory-2.png',
    alt: 'Female athlete at stadium',
    href: '/success-stories/blessing-adesope',
  },
  {
    title: 'The developer who started from zero',
    name: 'Abdul Rasheed',
    tag: 'Selected for the state team',
    tagColor: 'green',
    excerpt:
      'Abdul had never touched a computer with any serious intent until she enrolled in Teworh\'s Software Engineering program at 19. She had heard about coding from a cousin in Abuja but assumed it was "not for someone like her...',
    image: '/images/successstory-3.png',
    alt: 'Developer working at computer',
    href: '/success-stories/abdul-rasheed',
  },
  {
    title: 'The footballer who almost gave up',
    name: 'Chukwuemeka Obi',
    tag: 'Selected for the state team',
    tagColor: 'green',
    excerpt:
      "Before Teworh, I didn't think someone like me could be taken seriously as a footballer. I thought professional football was for people from Lagos or Abuja not from where I'm from. Teworh changed how I see myself.\"",
    image: '/images/successstory-1.png',
    alt: 'Footballer running on pitch',
    href: '/success-stories/chukwuemeka-obi-2',
  },
]

const tagStyles: Record<string, string> = {
  green: 'bg-[#DAFADF] text-[#009606]',
  orange: 'bg-[#FFF3EA] text-[#FF5714]',
}

const dotStyles: Record<string, string> = {
  green: 'bg-[#009606]',
  orange: 'bg-[#FF5714]',
}

export function SuccessStoriesList() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {stories.map((story, i) => (
            <div
              key={`${story.href}-${i}`}
              className="flex flex-col gap-6 py-12 sm:flex-row sm:items-start sm:gap-10"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72 sm:w-90 sm:shrink-0">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 360px"
                />
              </div>

              {/* Content */}
              <div className="flex max-w-2xl flex-1 flex-col gap-4">
                <h2 className="font-redrose text-primary text-3xl leading-snug font-bold sm:text-4xl">
                  {story.title}
                </h2>
                <p className="text-primary text-base font-medium">
                  {story.name}
                </p>

                {/* Tag */}
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${tagStyles[story.tagColor]}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${dotStyles[story.tagColor]}`}
                  />
                  {story.tag}
                </span>

                <p className="text-foreground text-base leading-relaxed">
                  {story.excerpt}
                </p>

                <Button
                  asChild
                  variant="accent"
                  size="pill"
                  className="w-fit px-6 py-2.5"
                >
                  <Link href={story.href}>Read story</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
