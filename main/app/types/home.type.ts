export type IHome = {
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
  socialLinks: [{ name: string; link: string; icon: string }];
  skills: [
    { name: string; percentage: number; serial: number; iconLink: string }
  ];
  skillIcons: any;
};
