import React from 'react';
import Navbar, { NavItem } from './navbar';
import { siteConfig } from '../config/site';
import '../styles/components/header.scss';

export default function Header() {
  const navItems: NavItem[] = [{ path: '/', title: 'Home' }];

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          {/* TODO: create logo component */}
          {siteConfig.title}
        </div>

        <Navbar navList={navItems} />
      </div>
    </header>
  );
}
