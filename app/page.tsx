import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { PartnersSection } from '@/components/partners-section';
import { TeamSection } from '@/components/team-section';
import { ServicesSection } from '@/components/services-section';
import { InsightsSection } from '@/components/insights-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import { getOrganizationSchema, getServicesSchema, getBreadcrumbSchema } from '@/lib/json-ld';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServicesSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema()) }}
      />

      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <TeamSection />
        <ServicesSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
