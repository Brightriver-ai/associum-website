import React from 'react';
import { Container } from './Container';
import styles from './AboutPrinciplesSection.module.scss';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const principleCards = [
  {
    title: 'Analytical output quality need not be limited by time or team size.',
    description: "The best work shouldn't require the biggest team.",
  },
  {
    title: 'Professionals should spend their hours on judgment, not logistics.',
    description:
      'Basic research, synthesis, and formatting are not the key value drivers of important decisions.',
  },
  {
    title: 'AI infrastructure should be purpose-built for the work it supports.',
    description:
      'Generic tools produce generic output. We build for specific, high-stakes, judgment-intensive.',
  },
  {
    title: 'Pay for what you use, not fixed seat fees.',
    description: 'You pay for what you use. Nothing more.',
  },
];

export function AboutPrinciplesSection() {
  return (
    <section className={styles.section} aria-labelledby="about-principles-title">
      <Container>
        <div className={styles.inner}>
          <motion.div
            className={styles.header}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.span className={styles.eyebrow} variants={itemVariants}>
              Our Principles
            </motion.span>
            <motion.h2 id="about-principles-title" variants={itemVariants}>
              How We Think About AI for Professionals
            </motion.h2>
            <motion.p variants={itemVariants}>
              We believe the best analytical work shouldn't be gated by time, team size, or tools.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {principleCards.map((card) => (
              <motion.article key={card.title} className={styles.card} variants={itemVariants}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
