import React from 'react';
import Logo from '../Logo';

import styles from './index.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.copyright}>
        © 2018 Andy Zhang 浙ICP备18054874号
        <a
          href="https://github.com/alibaba/ice"
          target="_blank"
          className={styles.copyrightLink}
          rel="noopener noreferrer"
        >
          ICE
        </a>
      </div>
    </div>
  );
}
