import React from 'react';
import Navbar, { NavItem } from './navbar';
import styles from '../styles/components/footer.module.scss';

export default function Footer() {
  const navItems: NavItem[] = [
    { path: '/', title: 'Home' },
    { path: '/privacy', title: 'Privacy Policy' },
  ];

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <Navbar navList={navItems} />
        <p>
          Original work by <a href='https://magill.dev/'>Andrew Magill</a>.
          <br />
          Copyright @ 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
