import { GetInTouchSection } from '@/components/landing-page/cta'
import { FeaturedProjectsSection } from '@/components/landing-page/featured-projects'
import { FootballAcademySection } from '@/components/landing-page/football-academy'
import { HeroSection } from '@/components/landing-page/hero'
import { OurImpactSection } from '@/components/landing-page/our-impact'
import { OurPartnersSection } from '@/components/landing-page/our-partners'
import { StatsSection } from '@/components/landing-page/stats-section'
import { SuccessStoriesSection } from '@/components/landing-page/success-stories'
import { WhatWeDoSection } from '@/components/landing-page/what-we-do'
import { WhoWeServeSection } from '@/components/landing-page/who-we-serve'
import { WhyTeworhSection } from '@/components/landing-page/why-teworh'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <WhatWeDoSection />
      <WhoWeServeSection />
      <FeaturedProjectsSection />
      <FootballAcademySection />
      <OurImpactSection />
      <SuccessStoriesSection />
      <WhyTeworhSection />
      <OurPartnersSection />
      <GetInTouchSection />
    </main>
  )
}
