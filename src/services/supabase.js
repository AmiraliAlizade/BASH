import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rshvopobmfuretiakfat.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzaHZvcG9ibWZ1cmV0aWFrZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMjk4NzAsImV4cCI6MjA2OTcwNTg3MH0.eFQkUdccRN_iRp2GPwr0qzVSz8Xquf1OCRNXwj9BDBg";
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
