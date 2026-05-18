import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Container } from '../components/Container';
import { ButtonLink } from '../components/ButtonLink';
import { ProductWorkflowSection } from '../components/ProductWorkflowSection';
import { ProductComparisonSection } from '../components/ProductComparisonSection';
import { ProductBeforeAfterSection } from '../components/ProductBeforeAfterSection';
import { ProductCtaSection } from '../components/ProductCtaSection';
import styles from './ProductPage.module.scss';
import heroBackground from '../assets/product/product-hero-background.webp';
import heroVisual from '../assets/product/product-hero-visual.webp';

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

const previewVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

import { SEO } from '../components/SEO';

export function ProductPage() {
  return (
    <PageTransition>
      <SEO 
        title="Associum — AI Associate That Completes the Full Professional Production Cycle"
        description="Document intelligence, analytical task execution, report generation, and collaboration — built for finance, consulting, accounting, and legal professionals."
        ogTitle="Associum — Your AI Associate for Professional Work"
        ogDescription="Document intelligence, analytical task execution, report generation, and collaboration — built for finance, consulting, accounting, and legal professionals."
        ogImage="/associo-og-product.jpg"
        ogImageAlt="Associum product — AI that completes the full professional production cycle"
        canonical="/product"
      />
      <main>
        <section className={styles.hero} aria-labelledby="product-hero-title">
          <div className={styles.backdrop} aria-hidden="true">
            <img src={heroBackground} alt="" />
          </div>

          <Container>
            <motion.div
              className={styles.heroInner}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className={styles.copy}>
                <motion.h1 id="product-hero-title" variants={itemVariants}>
                  Most AI gets you to a draft.
                  <br />
                  Associum gets you to done.
                </motion.h1>

                <motion.p className={styles.description} variants={itemVariants}>
                  From raw data to finished documents, Associum takes you end-to-end with high quality
                  research, analysis, and report generation.
                </motion.p>

                <motion.div className={styles.actions} variants={itemVariants}>
                  <ButtonLink href="https://app.associum.ai/signup" variant="primary" size="heroPrimary">
                    Start for Free
                  </ButtonLink>
                  <ButtonLink href="/pricing" variant="outline" size="heroSecondary">
                    See Pricing
                  </ButtonLink>
                </motion.div>
              </div>

              <motion.div className={styles.previewShell} aria-hidden="true" variants={previewVariants}>
                <img src={heroVisual} alt="Associum Platform Preview" className={styles.heroImage} />
              </motion.div>
            </motion.div>
          </Container>
        </section>
        <ProductWorkflowSection />
        <ProductComparisonSection />
        {/* <ProductBeforeAfterSection /> */}
        <ProductCtaSection />
      </main>
    </PageTransition>
  );
}
