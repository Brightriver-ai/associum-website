import React from 'react';
import { Container } from './Container';
import styles from './AboutWhoBuiltSection.module.scss';
import logoPanelBackground from '../assets/about/about-who-built-panel.webp?url';
import associumIcon from '../assets/about/about-associum-icon.webp?url';

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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AboutWhoBuiltSection() {
  return (
    <section className={styles.section} aria-labelledby="about-who-built-title">
      <Container>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className={styles.copy}>
            <motion.div className={styles.headingGroup} variants={itemVariants}>
              <p className={styles.eyebrow}>WHO BUILT THIS</p>
              <h2 id="about-who-built-title">Built by Practitioners, Not Observers.</h2>
            </motion.div>

            <motion.div className={styles.body} variants={itemVariants}>
              <p>
                We were the associates and consultants. We did all the manual data gathering,
                analysis, and crafting of final deliverables. The late nights, complicated
                questions, and last minute changes. And we did it across the spectrum - as analysts
                and managing directors. We built Associum to be better than we could do, while still
                allowing for our clients' final judgment to be reflected in institutional-quality
                outputs.
              </p>
            </motion.div>

            <motion.p className={styles.closing} variants={itemVariants}>
              Associum is what we wished we'd had.
            </motion.p>
          </div>

          <motion.div
            className={styles.brandPanel}
            aria-hidden="true"
            variants={panelVariants}
          >
            <div className={styles.brandPanelBackground}>
              <img src={logoPanelBackground} alt="" />
              <div className={styles.brandPanelOverlay} />
            </div>

            <div className={styles.brandLockup}>
              <img className={styles.brandIcon} src={associumIcon} alt="" />
              <span>Associum</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
