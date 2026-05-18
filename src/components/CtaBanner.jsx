import React from 'react';
import { Container } from './Container';
import { ButtonLink } from './ButtonLink';
import styles from './CtaBanner.module.scss';
import { motion } from 'framer-motion';

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

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref = '#',
  primaryVariant = 'primary',
  secondaryLabel,
  secondaryHref = '#',
  footnote,
  meta,
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <motion.div
          className={styles.panel}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2>{title}</h2>
            <p>{description}</p>
          </motion.div>

          <motion.div className={styles.actions} variants={itemVariants}>
            <div className={styles.primaryActionGroup}>
              <ButtonLink href={primaryHref} variant={primaryVariant} size="heroPrimary">
                {primaryLabel}
              </ButtonLink>
              {footnote ? <span className={styles.footnote}>{footnote}</span> : null}
            </div>
            
            {secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="outline" size="heroSecondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </motion.div>

          {meta ? (
            <motion.span className={styles.meta} variants={itemVariants}>
              {meta}
            </motion.span>
          ) : null}
        </motion.div>
      </Container>
    </section>
  );
}
