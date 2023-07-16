import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.DATABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
