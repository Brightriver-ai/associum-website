import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../PageTransition';
import { Container } from '../Container';
import { ButtonLink } from '../ButtonLink';
import { ProductWorkflowSection } from '../ProductWorkflowSection';
import { ProductComparisonSection } from '../ProductComparisonSection';
import { ProductBeforeAfterSection } from '../ProductBeforeAfterSection';
import { ProductCtaSection } from '../ProductCtaSection';
import styles from './ProductPage.module.scss';
import heroBackground from '../../assets/product/product-hero-background.webp?url';
import heroVisual from '../../assets/product/product-hero-visual.webp?url';

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

export function ProductPage() {
  return (
    <PageTransition>
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
