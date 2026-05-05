import { CtaBannerSection } from '@/components/about/cta2'
import { ProjectsGallery } from '@/components/projects/projects-grid'
import { ProjectsHero } from '@/components/projects/projects-hero'

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGallery />
      <CtaBannerSection
        heading={
          <>
            Be a part of the
            <br />
            story
          </>
        }
        secondaryButton={{ label: 'Apply today', href: '/apply' }}
      />
    </main>
  )
}
