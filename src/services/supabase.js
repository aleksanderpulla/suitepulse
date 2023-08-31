import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iwzxglvmdthyhkrowudi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3enhnbHZtZHRoeWhrcm93dWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNDA3MzgsImV4cCI6MjAwNzYxNjczOH0.SuWwM9dcWKJuufGf_-hAX7FiFIh66cvRcMREvo2N9ek";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
