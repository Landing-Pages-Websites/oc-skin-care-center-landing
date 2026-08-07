"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Facials } from "@/components/Facials";
import { Injectables } from "@/components/Injectables";
import { WhyUs } from "@/components/WhyUs";
import { YourVisit } from "@/components/YourVisit";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { BookSection } from "@/components/BookSection";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCTA } from "@/components/FloatingCTA";
import { TRACKING } from "@/lib/content";

export default function Page(): React.ReactElement {
  useTracking({
    siteKey: TRACKING.siteKey,
    siteId: TRACKING.siteId,
    gtmId: TRACKING.gtmId,
    pixelId: TRACKING.pixelId,
  });

  return (
    <main className="overflow-x-hidden bg-white">
      <QueryParamPersistence />
      <Header />
      <Hero />
      <TrustBar />
      <Facials />
      <Injectables />
      <WhyUs />
      <YourVisit />
      <Team />
      <Faq />
      <BookSection />
      <SiteFooter />
      <FloatingCTA />
    </main>
  );
}
