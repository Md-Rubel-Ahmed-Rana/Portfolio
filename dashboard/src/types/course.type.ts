export type ICourse = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  institute: string;
  courseDetails: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type ICreateCourse = {
  name: string;
  startDate: Date;
  endDate: Date;
  institute: string;
  courseDetails: string[];
};
