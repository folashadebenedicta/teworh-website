import Image from 'next/image'

const images = [
  { src: '/images/project-1.png', alt: 'Children playing on artificial turf' },
  { src: '/images/project-2.png', alt: 'Football pitch with school building' },
  { src: '/images/project-3.jpg', alt: 'Fenced football pitch' },
  { src: '/images/project-4.png', alt: 'Construction site with bulldozer' },
  { src: '/images/project-5.png', alt: 'Engineer inspecting stadium site' },
  { src: '/images/project-6.png', alt: 'Open construction ground' },
  { src: '/images/project-7.png', alt: 'Gravel and earthworks on site' },
  { src: '/images/project-8.png', alt: 'Marked pitch under construction' },
  { src: '/images/project-9.png', alt: 'Aerial view of sports complex' },
  { src: '/images/project-10.png', alt: 'Stadium with blue roof' },
  { src: '/images/project-11.png', alt: 'Stadium seating and pitch' },
  { src: '/images/project-12.png', alt: 'Team inspecting site in hard hats' },
  { src: '/images/project-13.jpeg', alt: 'Gravel and earthworks on site2' },
  { src: '/images/project-14.jpeg', alt: 'Marked pitch under construction2' },
  { src: '/images/project-15.jpeg', alt: 'Aerial view of sports complex2' },
  { src: '/images/project-16.jpeg', alt: 'Stadium with blue roof2' },
  { src: '/images/project-17.jpeg', alt: 'Stadium seating and pitch2' },
  { src: '/images/project-18.jpeg', alt: 'Team inspecting site in hard hats2' },
  { src: '/images/project-19.JPG', alt: 'Gravel and earthworks on site3' },
  { src: '/images/project-20.JPG', alt: 'Marked pitch under construction3' },
  { src: '/images/project-21.JPG', alt: 'Aerial view of sports complex3' },
]

export function ProjectsGallery() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {images.map(({ src, alt }) => (
            <div
              key={alt}
              className="relative aspect-4/3 overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
