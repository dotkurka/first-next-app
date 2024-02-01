'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SignInNavButton() {
  const pathname = usePathname();
  const path = '/sign-in';

  if (path === pathname) {
    return null;
  }
  return (
    <Link className='btn btn-outline btn-primary text-base' href={path}>
      Sign In
    </Link>
  );
}
