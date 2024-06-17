import React from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';
import '../styles/components/navbar.css';

interface NavItem {
  path: string | UrlObject;
  title: string;
}

interface NavbarProps {
  navList?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navList = [] }) => {
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
};

export default Navbar;
