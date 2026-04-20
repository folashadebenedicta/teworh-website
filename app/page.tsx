import { FeaturedProjectsSection } from '@/components/landing-page/featured-projects'
import { FootballAcademySection } from '@/components/landing-page/football-academy'
import { HeroSection } from '@/components/landing-page/hero'
import { OurImpactSection } from '@/components/landing-page/our-impact'
import { StatsSection } from '@/components/landing-page/stats-section'
import { SuccessStoriesSection } from '@/components/landing-page/success-stories'
import { WhatWeDoSection } from '@/components/landing-page/what-we-do'
import { WhoWeServeSection } from '@/components/landing-page/who-we-serve'
import { WhyTeworhSection } from '@/components/landing-page/why-teworh'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <WhatWeDoSection />
      <WhoWeServeSection />
      <FeaturedProjectsSection />
      <FootballAcademySection />
      <OurImpactSection />
      <SuccessStoriesSection />
      <WhyTeworhSection />
      <section>
        <h2>Programs</h2>
      </section>

      <section>
        <h2>Impact</h2>
      </section>

      <section>
        <h2>Get Started</h2>
      </section>

      <Footer />
    </main>
  )
}
