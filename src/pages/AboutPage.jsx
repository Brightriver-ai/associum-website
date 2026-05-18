import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { AboutFeatureRequestSection } from '../components/AboutFeatureRequestSection';
import { Container } from '../components/Container';
import { AboutMetricsSection } from '../components/AboutMetricsSection';
import { AboutPrinciplesSection } from '../components/AboutPrinciplesSection';
import { AboutTeamSection } from '../components/AboutTeamSection';
import { AboutWhoBuiltSection } from '../components/AboutWhoBuiltSection';
import styles from './AboutPage.module.scss';
import heroTexture from '../assets/about/about-hero-texture.webp';
import heroGlow from '../assets/about/about-hero-glow.webp';
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

export function AboutPage() {
  return (
    <PageTransition>
      <SEO 
        title="About Us — Associum"
        description="Meet the team behind Associum. We build tools to remove the production bottleneck for finance, consulting, accounting, and legal professionals."
        ogTitle="About Us — Associum"
        ogDescription="Meet the team behind Associum. We build tools to remove the production bottleneck for finance, consulting, accounting, and legal professionals."
        canonical="/about"
      />
      <main>
      <section className={styles.hero} aria-labelledby="about-page-title">
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
            <motion.h1 id="about-page-title" variants={itemVariants}>
              We built the tool we wished we'd had.
            </motion.h1>
            <motion.p variants={itemVariants}>
              Years spent in data rooms, client decks, and late-night memos taught us one thing:
              the bottleneck was never intelligence. It was the infrastructure to pull data from
              multiple sources and integrate into analysis and deliverables.
            </motion.p>
          </motion.div>
        </Container>
      </section>
      <AboutWhoBuiltSection />
      <AboutPrinciplesSection />
      <AboutMetricsSection />
      <AboutTeamSection />
      <AboutFeatureRequestSection />
    </main>
    </PageTransition>
  );
}
