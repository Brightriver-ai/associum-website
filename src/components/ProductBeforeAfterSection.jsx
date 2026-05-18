import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import styles from './ProductBeforeAfterSection.module.scss';
import { ScrollReveal } from './ScrollReveal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const rowVariants = {
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

const cellVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
};

const rows = [
  {
    before: '3 hours studying a 60-page report',
    after: 'Key insights extracted, sourced, and structured in minutes',
  },
  {
    before: 'A rough draft you spend an hour rebuilding',
    after: 'A formatted memo, sign-off ready',
  },
  {
    before: '4 tabs open, copy-pasting between documents',
    after: 'One workspace. One finished output.',
  },
  {
    before: '"Let me get back to you on that"',
    after: 'The deliverable ready before the meeting starts.',
  },
];

export function ProductBeforeAfterSection() {
  return (
    <section className={styles.section} aria-labelledby="before-after-title">
      <Container>
        <motion.div
          className={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <p className={styles.eyebrow}>The Last Mile</p>
            <h2 id="before-after-title">Before Associum. After Associum.</h2>
          </motion.div>

          <motion.div
            className={styles.tableWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className={styles.tableHeader}>
              <div className={styles.beforeHeader}>Before</div>
              <div className={styles.afterHeader}>After</div>
            </div>

            <motion.div className={styles.tableBody} variants={containerVariants}>
              {rows.map((row) => (
                <motion.div key={row.before} className={styles.row} variants={rowVariants}>
                  <div className={styles.beforeCell}>
                    <span className={styles.cellLabel}>Before</span>
                    {row.before}
                  </div>
                  <div className={styles.afterCell}>
                    <span className={styles.cellLabel}>After</span>
                    <motion.div variants={cellVariants}>{row.after}</motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.p className={styles.footerText} variants={itemVariants}>
            <span>Associum doesn&apos;t change the knowledge and skills you bring to the work.</span>
            <span>It enables you to embed them easily in a unified, AI-driven workflow.</span>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
