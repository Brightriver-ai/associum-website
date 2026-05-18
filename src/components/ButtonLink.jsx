import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ');
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
}) {
  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:'));
  
  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cx(styles.buttonLink, styles[variant], styles[size], className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  const to = href && href.startsWith('#') ? `/${href}` : href;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cx(styles.buttonLink, styles[variant], styles[size], className)}
    >
      {children}
    </Link>
  );
}
