import React from 'react';
import { Container } from './Container';
import styles from './AboutTeamSection.module.scss';
import linkedinIcon from '../assets/about/about-linkedin.webp';
import wesImage from '../assets/about/Wes.webp';
import visImage from '../assets/about/Vis.webp';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const teamMembers = [
  {
    name: 'Wesley Barnes',
    role: 'CEO',
    image: wesImage,
    imageClassName: styles.wesleyImage,
    description:
      'Former private equity executive. Built Brightriver to bring AI to PE deal teams. Background spanning AIF Capital, Deloitte, and investing across Asia.',
    emphasis: 'Built Associum to solve a workflow problem he lived for years.',
    linkedinHref: 'https://www.linkedin.com/in/wesleybarnes2',
  },
  {
    name: 'Vishal Bhargava',
    role: 'Head of AI Products',
    image: visImage,
    imageClassName: styles.vishalImage,
    description:
      'Built AI infrastructure for private equity at Brightriver. Previously built NLP products for high-performance teams where output quality was non-negotiable.',
    emphasis: 'At Associum, he owns the product from model to UX.',
    linkedinHref: 'https://www.linkedin.com/in/bhrgvishal/',
  },
];

export function AboutTeamSection() {
  return (
    <section className={styles.section} aria-labelledby="about-team-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 id="about-team-title">The Team</h2>
          </div>

          <motion.div
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {teamMembers.map((member) => (
              <motion.article key={member.name} className={styles.card} variants={itemVariants}>
                <div className={styles.imageFrame}>
                  <img className={member.imageClassName} src={member.image} alt={member.name} />
                </div>

                <div className={styles.content}>
                  <div className={styles.identity}>
                    <h3>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                  </div>

                  <div className={styles.copy}>
                    <p>{member.description}</p>
                    <p className={styles.emphasis}>{member.emphasis}</p>
                  </div>

                  <a className={styles.linkedin} href={member.linkedinHref}>
                    <img src={linkedinIcon} alt="" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
