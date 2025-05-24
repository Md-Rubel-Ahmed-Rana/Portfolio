export type IExperience = {
  id: string;
  name: string;
  size: string;
  workType: string;
  designation: string;
  workLocation: string;
  location: string;
  startDate: Date;
  endDate: Date;
  website: string;
  linkedIn: string;
  responsibilities: string[];
  learnedNewTech: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type ICreateExperience = {
  name: string;
  size: string;
  workType: string;
  designation: string;
  workLocation: string;
  location: string;
  startDate: Date;
  endDate: Date;
  website: string;
  linkedIn: string;
  responsibilities: string[];
  learnedNewTech: string[];
};
