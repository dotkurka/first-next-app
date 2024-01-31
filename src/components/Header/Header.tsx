import { Navigation } from 'src/components';

import type { NavItemType } from 'src/components/Navigation/types';

const navItem: NavItemType[] = [
  { value: 'Home', path: '/' },
  { value: 'Posts', path: '/posts' },
];

export default function Header() {
  return <Navigation navItem={navItem} />;
}
