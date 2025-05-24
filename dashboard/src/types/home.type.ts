export type ISkill = {
  id: string;
  name: string;
  icon: string;
  serial: number;
  createdAt: Date;
  updatedAt: Date;
};

export type IAddSkill = {
  name: string;
  icon: string;
  serial: number;
};

export type IPersonalInfo = {
  id: string;
  logo: string;
  email: string;
  phoneNumber: string;
  address: string;
  addressMapLocation: string;
  name: string;
  position: string;
  description: string;
  resumeLink: string;
  bannerImage: string;
  socialLinks: ISocialLink[];
};

export type ISocialLink = {
  id: string;
  name: string;
  link: string;
  icon: string;
};
