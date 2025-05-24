import { createClient } from "@supabase/supabase-js";
import { envConfig } from "./envConfig";

export const supabase = createClient(
  envConfig.supabase.supabaseUrl,
  envConfig.supabase.supabaseKey
);
