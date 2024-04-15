export type IBlog = {
  id: number;
  title: string;
  type: string;
  image: string;
  body: string | TrustedHTML;
  createdAt: Date;
  updatedAt: Date;
  comments: number;
};
