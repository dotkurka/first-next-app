'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

import { SignInNavButton, UserDropDown } from 'src/components';

import type { NavigationProps } from 'src/components/Navigation/types';

export default function Navigation({ navItem }: NavigationProps) {
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className='navbar bg-base-100 h-[80px] justify-between px-5'>
      <div className='join join-horizontal'>
        {navItem.map(({ value, path }) => {
          const activePath = pathname === path ? 'btn-primary' : 'btn-ghost';
          return (
            <Link className={`btn join-item text-xl ${activePath}`} href={path} key={path}>
              {value}
            </Link>
          );
        })}
      </div>
      {session.data?.user ? (
        <UserDropDown logOut={() => signOut()} user={session.data.user} />
      ) : (
        <SignInNavButton />
      )}
    </div>
  );
}
