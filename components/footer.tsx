import React from 'react';
import Navbar, { NavItem } from './navbar';
import '../styles/components/footer.css';

export default function Footer() {
  const navItems: NavItem[] = [{ path: '/privacy', title: 'Privacy Policy' }];

  return (
    <footer>
      <Navbar navList={navItems} />
      <p>
        Original work by <a href='https://magill.dev/'>Andrew Magill</a>.<br />
        Copyright @ 2024. All rights reserved.
      </p>
    </footer>
  );
}
