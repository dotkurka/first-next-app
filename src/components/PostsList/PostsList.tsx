import { PostCard } from 'src/components';

import type { PostListProps } from 'src/components/PostsList/types';

export default function PostsList({ posts }: PostListProps) {
  return (
    <div className='flex flex-wrap justify-center'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
