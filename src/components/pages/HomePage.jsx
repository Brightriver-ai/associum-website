import React from 'react';
import { PageTransition } from '../PageTransition';
import { Hero } from '../Hero';
import { WhatAssociumDoesSection } from '../WhatAssociumDoesSection';
import { IntegrationsSection } from '../IntegrationsSection';
import { HowItWorksSection } from '../HowItWorksSection';
import { SampleOutputsSection } from '../SampleOutputsSection';
import { IndustrySection } from '../IndustrySection';
import { DifferenceSection } from '../DifferenceSection';
import { SecuritySection } from '../SecuritySection';
import { PricingIntroSection } from '../PricingIntroSection';
import { PricingCtaSection } from '../PricingCtaSection';

export function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <main>
        <WhatAssociumDoesSection />
        <IntegrationsSection />
        <HowItWorksSection />
        <SampleOutputsSection />
        <IndustrySection />
        <DifferenceSection />
        <SecuritySection />
        {/* <PricingIntroSection /> */}
        <PricingCtaSection />
      </main>
    </PageTransition>
  );
}
