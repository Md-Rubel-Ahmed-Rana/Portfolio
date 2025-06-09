"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.envConfig = {
    app: {
        port: process.env.PORT || 5002,
    },
    database: {
        url: process.env.DATABASE_URL,
    },
    origins: [
        process.env.LOCAL_ORIGIN,
        process.env.LIVE_ORIGIN,
        process.env.CMS_ORIGIN,
        process.env.FEEDBACK_DASHBOARD,
    ],
    gmail: {
        service: process.env.GMAIL_SERVICE,
        host: process.env.GMAIL_HOST,
        port: process.env.GMAIL_PORT,
        auth: {
            user: process.env.GOOGLE_USER,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    },
    jwt: {
        accessTokenExpire: (process.env.JWT_ACCESS_TOKEN_EXPIRE || "7d"),
        refreshTokenExpire: (process.env.JWT_REFRESH_TOKEN_EXPIRE ||
            "30d"),
        accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    },
    supabase: {
        supabaseUrl: process.env.SUPABASE_PROJECT_URL,
        supabaseKey: process.env.SUPABASE_ANON_KEY,
        bucket: process.env.SUPABASE_BUCKET,
        bucketBaseUrl: process.env.SUPABASE_BUCKET_BASE_URL,
    },
};
