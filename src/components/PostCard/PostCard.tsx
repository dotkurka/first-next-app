import Image from 'next/image';
import Link from 'next/link';

import { truncateText } from 'src/utils';

import type { PostCardProps } from 'src/components/PostCard/types';

export default function PostCard({ post }: PostCardProps) {
  const shortDescription = truncateText(post.content, 130);

  return (
    <div className='card md:card-side bg-base-100 shadow-xl m-5 max-w-[750px]'>
      <div className='h-[300px] w-full'>
        <Image
          alt='Poster'
          className='w-[350px] max-md:w-full h-full object-cover rounded-2xl'
          height={0}
          sizes='100%'
          src={post.image}
          width={0}
        />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{post.title}</h2>
        <p>{shortDescription}</p>
        <div className='card-actions justify-end'>
          <Link className='btn btn-primary' href={`posts/${post.slug}`}>
            Listen
          </Link>
        </div>
      </div>
    </div>
  );
}
