export interface PostType {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  image: string;
}

export interface PostPageParam {
  params: {
    slug: string;
  };
}
