export type IBlog = {
  id: number;
  title: string;
  type: string;
  image: string;
  body: string | TrustedHTML;
  createdAt: Date;
  comments: number;
};
