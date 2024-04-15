export type IBlog = {
  id: string;
  title: string;
  type: string;
  image: string;
  body: string | TrustedHTML | any;
  createdAt: Date;
  updatedAt: Date;
  comments: number;
};
