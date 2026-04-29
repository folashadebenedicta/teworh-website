import { CtaBannerSection } from '@/components/about/cta2'
import { SuccessStoriesHero } from '@/components/success-stories/success-stories-hero'
import { SuccessStoriesList } from '@/components/success-stories/success-stories-list'

export default function SuccessStoriesPage() {
  return (
    <main>
      <SuccessStoriesHero />
      <SuccessStoriesList />
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
