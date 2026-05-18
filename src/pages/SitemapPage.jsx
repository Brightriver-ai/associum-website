import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Container } from '../components/Container';
import { SEO } from '../components/SEO';
import styles from './SitemapPage.module.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sitemapColumns = [
  {
    title: 'Core Platform',
    links: [
      { label: 'Home Page', href: '/' },
      { label: 'Product', href: '/product' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Company & Connect',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

export function SitemapPage() {
  return (
    <PageTransition>
      <SEO 
        title="Sitemap — Associum"
        description="Directory of all Associum pages, security documents, and company resources."
        ogTitle="Sitemap — Associum"
        ogDescription="Directory of all Associum pages, security documents, and company resources."
        canonical="/sitemap"
      />
      <main className={styles.sitemapWrapper}>
        <Container>
          <motion.div
            className={styles.sitemapInner}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.header className={styles.header} variants={itemVariants}>
              <h1>Sitemap</h1>
              <p>Directory of pages, resources, and legal guidelines across the Associum platform.</p>
            </motion.header>

            <motion.div className={styles.grid} variants={itemVariants}>
              {sitemapColumns.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h2>{col.title}</h2>
                  <ul className={styles.linkList}>
                    {col.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        {link.external ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <span>{link.label}</span>
                            <span className={styles.externalIndicator} aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          <Link to={link.href} className={styles.linkItem}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </main>
    </PageTransition>
  );
}
