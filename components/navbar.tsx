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

const renderNavItems = (navList: NavItem[]) => {
  return navList.map((navItem, index) => (
    <li key={`nav-${index}`}>
      <Link href={navItem.path}>{navItem.title}</Link>
    </li>
  ));
};

const Navbar: React.FC<NavbarProps> = ({ navList = [] }) => {
  if (navList.length > 0) {
    return (
      <nav role='navigation' aria-label='menu'>
        <input
          type='checkbox'
          id='toggle'
          role='button'
          style={{ display: 'none' }}
        />
        <label htmlFor='toggle'>
          <span className='visually-hidden'>Menu</span>
        </label>
        <ul>{renderNavItems(navList)}</ul>
      </nav>
    );
  } else {
    return null;
  }
};

export default Navbar;
