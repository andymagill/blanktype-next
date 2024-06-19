import React from 'react';
import Navbar, { NavItem } from './navbar';
import { siteConfig } from '../config/site';
import '../styles/components/header.scss';
import Link from 'next/link';

export default function Header() {
  const navItems: NavItem[] = [{ path: '/', title: 'Home' }];

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            {/* TODO: create logo component */}
            {siteConfig.title}
          </Link>
        </div>

        <Navbar navList={navItems} />
      </div>
    </header>
  );
}
