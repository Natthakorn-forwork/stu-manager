import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qdtvwzcnyzhazyosrviq.supabase.co'
const supabaseKey = "sb_publishable_qUHYOrnrJU27LFjlKmIo5Q_6O3nCJSP"
console.log("URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY);

const supabase = createClient(supabaseUrl, supabaseKey)
export { supabase } 