import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import styles from './PricingTopUpSection.module.scss';

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

const topUpPacks = [
  {
    credits: '250',
    price: '$100',
    unitPrice: '$0.40 per credit',
  },
  {
    credits: '600',
    price: '$200',
    unitPrice: '$0.33 per credit',
    savings: 'Save 17%',
  },
  {
    credits: '1,200',
    price: '$300',
    unitPrice: '$0.25 per credit',
    savings: 'Save 37%',
  },
];

export function PricingTopUpSection({ variant = 'dark' }) {
  return (
    <section className={`${styles.section} ${variant === 'light' ? styles.light : ''}`} aria-labelledby="pricing-top-up-title">
      <Container>
        <motion.div
          className={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 id="pricing-top-up-title">Need More Credits?</h2>
            <p>Top up at any time. Add-on packs never expire and are available on all paid plans.</p>
          </motion.div>

          <div className={styles.grid}>
            {topUpPacks.map((pack) => (
              <motion.article key={pack.credits} className={styles.card} variants={itemVariants}>
                {pack.savings ? <div className={styles.savingsTag}>{pack.savings}</div> : null}

                <div className={styles.cardContent}>
                  <p className={styles.creditsLine}>
                    <span className={styles.creditNumber}>
                      {pack.credits}
                    </span>
                    <span className={styles.creditLabel}>credits</span>
                  </p>
                  <p className={styles.price}>{pack.price}</p>
                  <p className={styles.unitPrice}>{pack.unitPrice}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
