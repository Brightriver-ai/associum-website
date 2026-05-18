import React from 'react';
import { CtaBanner } from './CtaBanner';
import { ScrollReveal } from './ScrollReveal';

export function ProductCtaSection() {
  return (
    <ScrollReveal>
      <CtaBanner
        title="Your next deliverable starts here."
        description="Free to start. No credit card. No onboarding required."
        primaryLabel="Start for Free"
        primaryHref="https://app.associum.ai/signup"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
        footnote="No credit card required"
        meta="From zero to done · One step from sign-off · SOC 2 & ISO 27001 certified"
      />
    </ScrollReveal>
  );
}
