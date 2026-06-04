import React from 'react';
import { Container } from './Container';
import styles from './ContactFaqSection.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { contactFaqItems as faqItems } from '../data/contactFaq.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = React.useState(-1);

  return (
    <section className={styles.section} aria-labelledby="contact-faq-title">
      <Container>
        <motion.div
          className={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 id="contact-faq-title">In case you missed anything</h2>

          </motion.div>

          <div className={styles.list}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div key={item.question} className={styles.item} variants={itemVariants}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className={styles.question}>{item.question}</span>
                    <motion.span
                      className={styles.icon}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.answerWrap}
                      >
                        <div className={styles.answer}>{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.p className={styles.footer} variants={itemVariants}>
          Still have a question? Use the contact form above and we’ll be in touch within one business day.
        </motion.p>
      </Container>
    </section>
  );
}
