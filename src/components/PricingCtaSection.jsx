import React from 'react';
import { CtaBanner } from './CtaBanner';
import { ScrollReveal } from './ScrollReveal';

export function PricingCtaSection() {
  return (
    <ScrollReveal>
    <CtaBanner
      title="Associum delivers results that are ready to use, not reformat."
      description="Start working with your new AI associate for free."
      primaryLabel="Start for Free"
      primaryHref="https://app.associum.ai/signup"
      secondaryLabel="Talk with Sales"
      secondaryHref="/contact"
      footnote="No credit card required"
    />
    </ScrollReveal>
  );
}
