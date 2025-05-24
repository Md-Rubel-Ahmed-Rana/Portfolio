declare namespace Express {
  interface Request {
    user: any;
    file?: Express.Multer.File;
    files?:
      | Express.Multer.File[]
      | {
          [fieldName]: Express.Multer.File | Express.Multer.File[];
        };
    [fieldName]: string | string[];
  }
}
