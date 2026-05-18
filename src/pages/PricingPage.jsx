import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Container } from '../components/Container';
import { PricingCompareBanner } from '../components/PricingCompareBanner';
import { PricingComparisonTableSection } from '../components/PricingComparisonTableSection';
import { PricingCreditsSection } from '../components/PricingCreditsSection';
import { PricingFaqSection } from '../components/PricingFaqSection';
import { PricingPlansSection } from '../components/PricingPlansSection';
import { PricingTopUpSection } from '../components/PricingTopUpSection';
import styles from './PricingPage.module.scss';

import heroTexture from '../assets/pricing/pricing-hero-texture.webp';
import heroGlow from '../assets/pricing/pricing-hero-glow.webp';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function PricingPage() {
  return (
    <PageTransition>
      <SEO 
        title="Pricing — Associum"
        description="Simple, output-based pricing with no seat limits. Pay only for the actual research, reports, and analytical work you run."
        ogTitle="Pricing — Associum"
        ogDescription="Simple, output-based pricing with no seat limits. Pay only for the actual research, reports, and analytical work you run."
        canonical="/pricing"
      />
      <main>
        <section className={styles.hero} aria-labelledby="pricing-page-title">
          <div className={styles.backdrop} aria-hidden="true">
            <div className={styles.baseGradient} />
            <div className={styles.textureWrap}>
              <img src={heroTexture} alt="" />
            </div>
            <img className={styles.glow} src={heroGlow} alt="" />
          </div>

          <Container>
            <motion.div
              className={styles.heroInner}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className={styles.copy}>
                <motion.h1 id="pricing-page-title" variants={itemVariants}>
                  Pay for Output. Get More.
                </motion.h1>
                <motion.p className={styles.description} variants={itemVariants}>
                  Every credit goes toward real work like research, reports, or document processing. No per-user charges.
                </motion.p>
                <motion.p className={styles.meta} variants={itemVariants}>
                  SOC 2 Compliant &nbsp;·&nbsp; ISO 27001 &nbsp;·&nbsp; Your data never trains our models
                </motion.p>
              </div>
            </motion.div>
          </Container>
        </section>

        <PricingCreditsSection />
        <PricingPlansSection />
        <PricingComparisonTableSection />
        <PricingTopUpSection variant="light" />
        <PricingFaqSection />
      </main>
    </PageTransition>
  );
}
