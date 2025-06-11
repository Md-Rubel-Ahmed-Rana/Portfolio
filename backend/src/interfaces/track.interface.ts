export type IUserTrack = {
  visitorId: string;
  path: string;
  ip: string;
  location: string;
  locationCoordinates: {
    latitude: number;
    longitude: number;
  };
  userAgent: string;
};
