import React from 'react';
import { Container } from './Container';
import styles from './IntegrationsSection.module.scss';
import { motion } from 'framer-motion';

// Icon imports (User will upload these)
import googleIcon from '../assets/integrations/google.svg';
import gmailIcon from '../assets/integrations/gmail.svg';
import calendarIcon from '../assets/integrations/calendar.svg';
import slackIcon from '../assets/integrations/slack.svg';
import notionIcon from '../assets/integrations/notion.svg';
import linearIcon from '../assets/integrations/linear.svg';

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
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const integrationIcons = [
  { src: googleIcon, alt: 'Google' },
  { src: gmailIcon, alt: 'Gmail' },
  { src: calendarIcon, alt: 'Google Calendar' },
  { src: slackIcon, alt: 'Slack' },
  { src: notionIcon, alt: 'Notion' },
  { src: linearIcon, alt: 'Linear' },
];

export function IntegrationsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <motion.div 
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className={styles.textSide}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              Integrations
            </motion.h2>
            <motion.p className={styles.subheading} variants={itemVariants}>
              Associum integrates with your preferred data sources and applications via their Model Context Protocol ("MCP") servers. Choose from our existing integrations or easily add your own.
            </motion.p>
          </div>

          <div className={styles.iconSide}>
            <motion.div className={styles.iconGrid} variants={itemVariants}>
              {integrationIcons.map((icon, index) => (
                <div key={index} className={styles.iconWrapper}>
                  <img src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </motion.div>
            <motion.p className={styles.andMore} variants={itemVariants}>
              and more
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
