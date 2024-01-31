import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { postsData } from 'app/api/posts/posts';

export function GET(req: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug;

  const postBySlug = postsData.find((post) => post.slug === slug);

  if (!postBySlug) redirect('/');

  return NextResponse.json(postBySlug);
}
