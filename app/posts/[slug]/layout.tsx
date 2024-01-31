import React from 'react';

import { getPostBySlug } from 'src/utils';

import type { PropsWithChildren } from 'react';
import type { PostPageParam } from 'src/types';

export async function generateMetadata({ params: { slug } }: PostPageParam) {
  const { title } = await getPostBySlug(slug);

  return {
    title: `Sport | ${title}`,
  };
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className='mt-5 w-full flex justify-center items-center px-5'>
      <div className='max-w-[900px]'>{children}</div>
    </main>
  );
}
