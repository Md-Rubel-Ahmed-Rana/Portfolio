export type IEducation = {
  id: string;
  degree: string;
  field_of_study: string;
  institution: string;
  location?: string;
  start_date: string;
  end_date?: string;
  grade?: string;
  description?: string;
  is_current?: boolean;
};
