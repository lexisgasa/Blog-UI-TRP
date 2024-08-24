export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  date: Date;
}

export interface PostDto {
  id: string;
  title: string;
  author: string;
  date: number;
  imageUrl: string;
  alternativeText: string;
  content: string;
}
