export type IProject = {
  id: string;
  name: string;
  subTitle: string;
  description: string;
  features: string[];
  techStack: string[];
  sourceCode: string;
  liveLink: string;
  projectStatus: string;
  category: string;
  screenshots: string[];
  thumbnail: string;
  projectLength: {
    startDate: Date;
    endDate: Date;
  };
  createAt: Date;
  updatedAt: Date;
};

export type ICreateProject = {
  name: string;
  subTitle: string;
  description: string;
  features: string[];
  techStack: string[];
  sourceCode: string;
  liveLink: string;
  projectStatus: string;
  category: string;
  screenshots: File[] | string[];
  thumbnail: File;
  projectLength: {
    startDate: Date;
    endDate: Date | null;
  };
};
