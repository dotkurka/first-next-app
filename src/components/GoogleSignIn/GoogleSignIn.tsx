'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

import googleIcon from 'public/icon-google.svg';

export default function GoogleSignIn() {
  return (
    <button
      className='btn btn-primary flex relative'
      onClick={() => signIn('google')}
      type='button'
    >
      <Image
        alt='google'
        className='w-8 h-8 absolute left-3'
        height={0}
        sizes='100%'
        src={googleIcon}
        width={0}
      />
      Sign in with Google
    </button>
  );
}
