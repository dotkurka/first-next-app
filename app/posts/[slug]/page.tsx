import React from 'react';

import { Post } from 'src/components';
import { getPostBySlug } from 'src/utils';

import type { PostPageParam } from 'src/types';

export default async function PostPage({ params: { slug } }: PostPageParam) {
  const post = await getPostBySlug(slug);

  return <Post post={post} />;
}
