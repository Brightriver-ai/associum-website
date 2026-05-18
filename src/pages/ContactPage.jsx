import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ContactFaqSection } from '../components/ContactFaqSection';
import { ContactSupportSection } from '../components/ContactSupportSection';
import { Container } from '../components/Container';
import { CtaBanner } from '../components/CtaBanner';
import styles from './ContactPage.module.scss';
import { SEO } from '../components/SEO';
import heroTexture from '../assets/about/about-hero-texture.webp';
import heroGlow from '../assets/about/about-hero-glow.webp';
import { motion } from 'framer-motion';

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

export function ContactPage() {
  return (
    <PageTransition>
      <SEO 
        title="Contact Us — Associum"
        description="Get in touch with the Associum team for enterprise plans, partnerships, support, or security documentation."
        ogTitle="Contact Us — Associum"
        ogDescription="Get in touch with the Associum team for enterprise plans, partnerships, support, or security documentation."
        canonical="/contact"
      />
      <main>
      <section className={styles.hero} aria-labelledby="contact-page-title">
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
            <motion.h1 id="contact-page-title" variants={itemVariants}>
              Connect with Associum
            </motion.h1>
            <motion.p variants={itemVariants}>
              Contact us for more information on Associum, our enterprise plans, partnership opportunities,
              press inquiries, and security documentation.
            </motion.p>
          </motion.div>
        </Container>
      </section>
      <ContactSupportSection />
      <ContactFaqSection />
      <CtaBanner
        title={
          <>
            Your first 100 credits are free. No card
            <br />
            needed.
          </>
        }
        primaryLabel="Start for Free"
        primaryHref="https://app.associum.ai/signup"
        primaryVariant="primary"
        className={styles.contactCta}
      />
    </main>
    </PageTransition>
  );
}
