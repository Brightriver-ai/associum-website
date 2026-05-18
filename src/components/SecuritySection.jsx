import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import styles from './SecuritySection.module.scss';
import noTrainingIcon from '../assets/homepage/security-no-model-training.svg';
import encryptedIcon from '../assets/homepage/security-encrypted.svg';
import zeroRetentionIcon from '../assets/homepage/security-zero-retention.svg';
import accessControlIcon from '../assets/homepage/security-access-control.svg';
import isoLogo from '../assets/homepage/iso.webp';
import socLogo from '../assets/homepage/soc.webp';

const securityCards = [
  {
    chip: 'Privacy Guaranteed',
    title: 'No Model Training',
    description:
      'Nothing you upload is ever used to train any AI model — including ours and our providers. This applies to every plan, including free.',
    icon: noTrainingIcon,
  },
  {
    chip: 'Security by Design',
    title: 'Encrypted at Rest and in Transit',
    description:
      'All data protected end-to-end with AES-256 encryption at rest and TLS 1.2+ in transit. Encryption keys managed independently — no unauthorized access.',
    icon: encryptedIcon,
  },
  {
    chip: 'Zero Retention',
    title: 'Your Data Stays Yours',
    description:
      "Zero data retention policy wherever possible. Your documents, questions, and outputs do not persist on any provider's infrastructure after processing.",
    icon: zeroRetentionIcon,
  },
  {
    chip: 'Access Control',
    title: 'Granular Role-Based Permissions',
    description:
      'Define exactly who can see, edit, or export within your workspace. Enterprise-grade firewall and cloud security across all plans.',
    icon: accessControlIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function SecuritySection() {
  return (
    <section className={styles.section} aria-labelledby="security-title">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className={styles.header}>
            <motion.p className={styles.eyebrow} variants={itemVariants}>Security &amp; Compliance</motion.p>
            <motion.h2 id="security-title" variants={itemVariants}>Security at Enterprise Standards</motion.h2>
            <motion.p className={styles.description} variants={itemVariants}>
              We never train our models on your data. Everything is encrypted, permissioned, and
              monitored — across every plan, from day one.
            </motion.p>
          </div>

          <div className={styles.grid}>
            {securityCards.map((card, index) => (
              <motion.article
                key={card.title}
                className={`${styles.card} ${index < securityCards.length - 1 ? styles.cardWithDivider : ''}`}
                variants={itemVariants}
              >
                <span className={styles.chip}>{card.chip}</span>
                <div className={styles.cardTitleRow}>
                  <img src={card.icon} alt="" aria-hidden="true" className={styles.cardIcon} />
                  <h3>{card.title}</h3>
                </div>
                <p>{card.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.div className={styles.badgesContainer} variants={itemVariants}>
            <div className={styles.badge}>
              <img src={isoLogo} alt="ISO 27001 Certified" className={styles.badgeImage} />
              <p className={styles.badgeText}>ISO 27001</p>
            </div>
            <div className={styles.badge}>
              <img src={socLogo} alt="SOC 2 Type II Certified" className={styles.badgeImage} />
              <p className={styles.badgeText}>SOC2 Type II</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
