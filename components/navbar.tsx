import React from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';
import '../styles/components/navbar.css';

export interface NavItem {
  path: string | UrlObject;
  title: string;
}

interface NavbarProps {
  navList?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navList = [] }) => {
  if (navList.length > 0) {
    return (
      <nav>
        <ul>
          {navList.map((navItem, index) => (
            <li key={`nav-${index}`}>
              <Link href={navItem.path}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  } else {
    return null;
  }
};

export default Navbar;
