export type IUserTrack = {
  visitorId: string;
  path: string;
  timestamp: Date;
  ip: string;
  location: {
    city: string;
    region: string;
    country: string;
    postal: string;
    latitude: Number;
    longitude: Number;
  };
  userAgent: string;
};
