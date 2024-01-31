'use client';

import Link from 'next/link';

import { Avatar } from 'src/components';

import type { UserDropDownProps } from 'src/components/UserDropDown/types';

export default function UserDropDown({ user, logOut }: UserDropDownProps) {
  return (
    <div className='dropdown dropdown-end'>
      <div className='btn btn-ghost btn-circle' role='button' tabIndex={0}>
        <Avatar className='w-15' imageUrl={user.image} />
      </div>
      <ul className='mt-5 z-[1] p-2 shadow menu menu-lg dropdown-content bg-primary rounded-box w-40'>
        <li>
          <Link className='no-underline text-white ' href='/profile'>
            Profile
          </Link>
        </li>
        <li>
          <button className='btn-ghost' onClick={logOut} type='button'>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}
