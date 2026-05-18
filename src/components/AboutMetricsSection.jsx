import React from 'react';
import { Container } from './Container';
import styles from './AboutMetricsSection.module.scss';
import metricsTexture from '../assets/about/about-metrics-texture.webp';
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

const metrics = [
  {
    title: '8h → 10m',
    description: 'Hours of production become minutes of review.',
  },
  {
    title: 'Ready on day one',
    description: 'Open it. Use it. Review what comes back.',
  },
  {
    title: 'Accuracy-first',
    description: 'Every output sourced, cited, and defensible.',
  },
];

export function AboutMetricsSection() {
  return (
    <section className={styles.section} aria-label="About metrics">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.textureWrap}>
          <img src={metricsTexture} alt="" />
        </div>
        <div className={styles.gradient} />
      </div>

      <Container>
        <motion.div
          className={styles.tiles}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {metrics.map((metric) => (
            <motion.article key={metric.title} className={styles.tile} variants={itemVariants}>
              <h2>{metric.title}</h2>
              <p>{metric.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
