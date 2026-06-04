import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import styles from './PricingFaqSection.module.scss';
import { ScrollReveal } from './ScrollReveal';
import { pricingFaqGroups as faqGroups } from '../data/pricingFaq.js';

const firstOpenKey = `${faqGroups[0].title}-0`;

function PlusIcon({ open }) {
  return (
    <span className={styles.icon} aria-hidden="true">
      <span className={styles.iconHorizontal} />
      <motion.span
        className={styles.iconVertical}
        initial={false}
        animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </span>
  );
}

export function PricingFaqSection() {
  const [openKey, setOpenKey] = useState(firstOpenKey);

  const flattened = useMemo(
    () =>
      faqGroups.map((group) => ({
        ...group,
        items: group.items.map((item, index) => ({
          ...item,
          key: `${group.title}-${index}`,
        })),
      })),
    [],
  );

  const toggleItem = (key) => {
    setOpenKey((current) => (current === key ? '' : key));
  };

  return (
    <ScrollReveal>
    <section className={styles.section} aria-labelledby="pricing-faq-title">
      <Container>
        <div className={styles.inner}>
          <h2 id="pricing-faq-title">Frequently Asked Questions</h2>

          <div className={styles.groups}>
            {flattened.map((group) => (
              <div key={group.title} className={styles.group}>
                <h3>{group.title}</h3>

                <div className={styles.items}>
                  {group.items.map((item) => {
                    const isOpen = openKey === item.key;

                    return (
                      <div key={item.key} className={styles.item}>
                        <button
                          type="button"
                          className={styles.trigger}
                          onClick={() => toggleItem(item.key)}
                          aria-expanded={isOpen}
                        >
                          <p className={styles.question}>{item.question}</p>
                          <PlusIcon open={isOpen} />
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
                              <div className={styles.answerInner}>
                                <p className={styles.answer}>{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
    </ScrollReveal>
  );
}
