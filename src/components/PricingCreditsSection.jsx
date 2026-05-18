import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import styles from './PricingCreditsSection.module.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const creditItems = [
  {
    title: 'Task Execution',
    rate: '3 credits for your average request',
    description:
      'A single request for research or analysis using our search, quantitative, and documentation agents.',
  },
  {
    title: 'Report Generation',
    rate: '40 credits for your average request',
    description: 'A fully structured and thoroughly researched deliverable.',
  },
  {
    title: 'File Processing',
    rate: '1 credit per 50 pages',
    description:
      'Upload and index documents, fully searchable and queryable across all tasks.',
  },
];

export function PricingCreditsSection() {
  return (
    <section className={styles.section} aria-labelledby="pricing-credits-title">
      <Container>
        <motion.div
          className={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2 id="pricing-credits-title" variants={itemVariants}>
            What Can You Do With Credits
          </motion.h2>

          <div className={styles.grid}>
            {creditItems.map((item, index) => (
              <motion.article
                key={item.title}
                className={`${styles.card} ${index < creditItems.length - 1 ? styles.withDivider : ''}`}
                variants={itemVariants}
              >
                <h3>{item.title}</h3>
                <p className={styles.rate}>{item.rate}</p>
                <p className={styles.description}>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
