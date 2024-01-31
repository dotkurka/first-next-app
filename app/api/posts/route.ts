import { NextResponse } from 'next/server';

import { postsData } from 'app/api/posts/posts';

export function GET(_req: Request) {
  return NextResponse.json(postsData);
}
