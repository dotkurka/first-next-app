import type { PostType } from 'src/types';

export const getAllPost = async () => {
  const response = await fetch('http://localhost:3000/api/posts');

  if (!response.ok) throw new Error('Fail to fecth post');

  return response.json() as Promise<PostType[]>;
};

export const getPostBySlug = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/api/posts/${slug}`);

  if (!response.ok) throw new Error('Not found');

  return response.json() as Promise<PostType>;
};
