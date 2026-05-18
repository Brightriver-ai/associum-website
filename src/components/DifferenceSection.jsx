import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import styles from './DifferenceSection.module.scss';
import metricsBackground from '../assets/homepage/difference-metrics-background.webp';

const metricCards = [
  {
    id: 'hours-production',
    title: <>8 hours →<br />10 minutes</>,
    description: 'Hours of production become minutes of review.',
  },
  {
    id: 'accuracy',
    title: 'Accuracy first',
    description: 'Every output sourced, cited, and defensible.',
  },
  {
    id: 'ready',
    title: 'Ready on day one',
    description: 'Open it. Use it. No complicated set-up required.',
  },
  {
    id: 'scalable',
    title: <>Scalable<br />data</>,
    description: 'Upload and access all of your docs.',
  },
];

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

export function DifferenceSection() {
  return (
    <section className={styles.section} aria-labelledby="difference-title">
      <div className={styles.background} aria-hidden="true">
        <img src={metricsBackground} alt="" className={styles.bgImage} />
        <div className={styles.gradientLayer} />
      </div>

      <Container>
        <motion.div 
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <p className={styles.eyebrow}>The Associum Difference</p>
            <h2 id="difference-title">
              <span>Associate creates the deliverable.</span>
              <span>You make it your own.</span>
            </h2>
          </motion.div>

          <div className={styles.metricsGrid}>
            {metricCards.map((card) => (
              <motion.article 
                key={card.id} 
                className={styles.metricCard}
                variants={itemVariants}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
