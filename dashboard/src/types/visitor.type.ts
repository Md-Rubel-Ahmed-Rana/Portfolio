export type IVisitor = {
  id: string;
  visitorId: string;
  path: string;
  ip: string;
  location: string;
  locationCoordinates: {
    latitude: number;
    longitude: number;
  };
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
};
