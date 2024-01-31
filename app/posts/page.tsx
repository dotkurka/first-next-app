import React from 'react';

import { PostsList } from 'src/components';
import { getAllPost } from 'src/utils';

export default async function PostsPage() {
  const posts = await getAllPost();

  return <PostsList posts={posts} />;
}
