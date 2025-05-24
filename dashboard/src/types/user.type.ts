export type ICreateUser = {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role?: "Admin" | "Editor" | "User" | "Developer" | string;
  isVerified?: boolean;
};
