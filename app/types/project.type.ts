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
    endDate: Date | null;
  };
};
