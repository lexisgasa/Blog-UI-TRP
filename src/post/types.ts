export interface PostBase {
  id: string;
  title: string;
  author: string;
  content: string;
  imageUrl: string;
  alternativeText: string;
}

export interface Post extends PostBase {
  date: Date;
}

export interface PostDto extends PostBase {
  date: number;
}

export type PostData = Omit<Post, "id">;
