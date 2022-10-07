export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentProps = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type ImageProps = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
