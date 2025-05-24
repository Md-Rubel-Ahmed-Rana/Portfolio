"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const envConfig_1 = require("./envConfig");
exports.supabase = (0, supabase_js_1.createClient)(envConfig_1.envConfig.supabase.supabaseUrl, envConfig_1.envConfig.supabase.supabaseKey);
