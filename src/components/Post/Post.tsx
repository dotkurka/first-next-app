import Image from 'next/image';

import { convertDateISO } from 'src/utils';

import type { PostProps } from 'src/components/Post/types';

export default function Post({ post }: PostProps) {
  const published = convertDateISO(post.createdAt);

  return (
    <div className='flex flex-col items-center'>
      <div className='indicator bg-base-100 w-full justify-center rounded-2xl px-4'>
        <span className='indicator-item indicator-bottom indicator-center badge badge-primary'>
          Published: {published}
        </span>
        <h1>{post.title}</h1>
      </div>
      <div className='divider' />
      <div className='join join-vertical rounded-2xl'>
        <Image
          alt='post image'
          className='w-full h-full join-item object-cover'
          height={0}
          priority
          sizes='100%'
          src={post.image}
          width={0}
        />
        <div className='bg-base-100 w-full text-center rounded-2xl p-4 join-item'>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}
