import { FeaturedProjectsSection } from '@/components/landing-page/featured-projects'
import { FootballAcademySection } from '@/components/landing-page/football-academy'
import { HeroSection } from '@/components/landing-page/hero'
import { OurImpactSection } from '@/components/landing-page/our-impact'
import { StatsSection } from '@/components/landing-page/stats-section'
import { WhatWeDoSection } from '@/components/landing-page/what-we-do'
import { WhoWeServeSection } from '@/components/landing-page/who-we-serve'
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
