import React from 'react';
import { Container } from './Container';
import styles from './WhatAssociumDoesSection.module.scss';
import { motion } from 'framer-motion';

import reportAutomationImage from '../assets/homepage/what-associum-does-report-automation.webp';
import quantitativeAnalysisImage from '../assets/homepage/what-associum-does-quantitative-analysis.webp';
import deepResearchImage from '../assets/homepage/what-associum-does-deep-research.webp';
import knowledgeBaseImage from '../assets/homepage/what-associum-does-knowledge-base.webp';

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

const cards = [
  {
    title: 'Quantitative Analysis',
    description:
      'Analyse data, build models, and produce structured outputs from raw inputs. One environment, no need to switch apps.',
    image: quantitativeAnalysisImage,
    background: '#ffffff',
    imageClassName: styles.quantitativeAnalysisImage,
  },
  {
    title: 'Deep Research',
    description:
      'Commission research across any topic. Get structured, accurate, cross-referenced theses — ready to sign off, not rebuild.',
    image: deepResearchImage,
    background: '#f8faf9',
    imageClassName: styles.deepResearchImage,
  },
  {
    title: 'Knowledge Base',
    description:
      'Every document you process becomes part of your private, searchable knowledge base. Surface prior analysis, precedents, and firm context from past engagements in seconds.',
    image: knowledgeBaseImage,
    background: '#fbfafa',
    imageClassName: styles.knowledgeBaseImage,
  },
  {
    title: 'Report Automation',
    description:
      "Generate IC memos, board packs, compliance reports, and client briefs using our templates or plain language prompt. Output to your firm's exact standard.",
    image: reportAutomationImage,
    background: '#fbfbfb',
    imageClassName: styles.reportAutomationImage,
  },
];

function Card({ title, description, image, background, imageClassName }) {
  return (
    <article className={styles.card} style={{ background }}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={`${styles.cardVisual} ${imageClassName}`}>
        <img src={image} alt="" />
      </div>
    </article>
  );
}

export function WhatAssociumDoesSection() {
  return (
    <section className={styles.section} aria-labelledby="what-associum-does-title">
      <Container>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.eyebrowRow} variants={itemVariants}>
            <p className={styles.eyebrow}>What Associum Does BETTER</p>
          </motion.div>
          <motion.div className={styles.titleBlock} variants={itemVariants}>
            <h2 id="what-associum-does-title">The Quality Your Clients Expect. In Minutes, Not Hours.</h2>
          </motion.div>
          <motion.p className={styles.description} variants={itemVariants}>
            From data to finished document - sourced, structured, and accurate. Delivered for your final review by Associum.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={itemVariants}>
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
