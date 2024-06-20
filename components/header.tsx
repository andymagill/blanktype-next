import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../config/site';
import Navbar, { NavItem } from './navbar';
import '../styles/components/header.scss';
import Logo from '/public/images/blanktype-logo-wide.svg';

export default function Header() {
  const navItems: NavItem[] = [{ path: '/', title: 'Home' }];

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <Logo alt={siteConfig.title} />
            <span className='visually-hidden'>{siteConfig.title}</span>
          </Link>
        </div>

        <Navbar navList={navItems} />
      </div>
    </header>
  );
}
