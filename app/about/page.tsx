import { AboutHero } from '@/components/about/about-hero'
import { CoreValuesSection } from '@/components/about/core-values'
import { CtaBannerSection } from '@/components/about/cta2'
import { MeetTheTeamSection } from '@/components/about/meet-the-team'
import { OurStorySection } from '@/components/about/our-story'
import { PurposeDirectionSection } from '@/components/about/purpose'
import { OurPartnersSection } from '@/components/landing-page/our-partners'

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStorySection />
      <PurposeDirectionSection />
      <CoreValuesSection />
      <MeetTheTeamSection />
      <OurPartnersSection />
      <CtaBannerSection />
    </main>
  )
}
