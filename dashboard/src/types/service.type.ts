export type IService = {
  id: string;
  name: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type IAddNewService = {
  name: string;
  image: File | string;
  description: string;
};
