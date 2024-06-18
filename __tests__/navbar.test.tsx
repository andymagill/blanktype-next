import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Navbar, { NavItem } from '../components/navbar';

test('renders Navbar with navList', () => {
  const navItems: NavItem[] = [{ path: '/', title: 'Home' }];

  const { getByText } = render(<Navbar navList={navItems} />);

  navItems.forEach((item) => {
    const linkElement = getByText(item.title);
    expect(linkElement).not.toBeNull();
  });
});

test('does not render Navbar without navList', () => {
  const { container } = render(<Navbar />);
  expect(container.firstChild).toBeNull();
});
