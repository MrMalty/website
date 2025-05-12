// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://raajlejntsstdetobzeo.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhYWpsZWpudHNzdGRldG9iemVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5Mzk1MjgsImV4cCI6MjA2MjUxNTUyOH0.vLwsgn9tpDDxMjTdgImgiE2kutzVNn7fnly7zNDsRTU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
