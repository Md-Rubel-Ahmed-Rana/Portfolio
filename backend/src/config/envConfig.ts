import { config } from "dotenv";

config();

export const envConfig = {
  app: {
    port: process.env.PORT || (5002 as number),
  },
  database: {
    url: process.env.DATABASE_URL as string,
  },
  origins: [
    process.env.LOCAL_ORIGIN as string,
    process.env.LIVE_ORIGIN as string,
    process.env.CMS_ORIGIN as string,
  ],
  gmail: {
    service: process.env.GMAIL_SERVICE as string,
    host: process.env.GMAIL_HOST as string,
    port: process.env.GMAIL_PORT as unknown as number,
    auth: {
      user: process.env.GOOGLE_USER as string,
      pass: process.env.GOOGLE_APP_PASSWORD as string,
    },
  },
  jwt: {
    accessTokenExpire: (process.env.JWT_ACCESS_TOKEN_EXPIRE || "7d") as string,
    refreshTokenExpire: (process.env.JWT_REFRESH_TOKEN_EXPIRE ||
      "30d") as string,
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET as string,
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET as string,
  },
  supabase: {
    supabaseUrl: process.env.SUPABASE_PROJECT_URL as string,
    supabaseKey: process.env.SUPABASE_ANON_KEY as string,
    bucket: process.env.SUPABASE_BUCKET as string,
    bucketBaseUrl: process.env.SUPABASE_BUCKET_BASE_URL as string,
  },
};
