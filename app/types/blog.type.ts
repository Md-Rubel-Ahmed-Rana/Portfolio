export type IBlog = {
  id: string;
  title: string;
  type: string;
  tags: string[];
  thumbnail: string;
  body: IArticleSection[];
  createdAt: Date;
  updatedAt: Date;
};

export type IArticleSection = {
  id: string;
  title: string;
  images: string[];
  description: string;
};
