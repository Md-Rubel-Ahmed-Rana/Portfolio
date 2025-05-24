export type IBlog = {
  id: string;
  title: string;
  type: string;
  tags: string[];
  thumbnail: string | File;
  body: IArticleSection[];
  comments?: number;
  createdAt: Date;
  updatedAt: Date;
};

export type IArticleSection = {
  id: string;
  title: string;
  images: File[] | string[];
  description: string;
};
