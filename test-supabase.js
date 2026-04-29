// Simple test to verify Supabase connection
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hqnaljuiwlhkebwgobhb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxbmFsanVpd2xoa2Vid2dvYmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNjk1MjgsImV4cCI6MjA5Mjk0NTUyOH0.y4pgOq-5olYgkrRz6deSZzL3mZBr2ZNNezNQ5eN0Nc0'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  try {
    console.log('Testing connection...')
    
    // Test 1: Check if table exists
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Table access error:', error)
    } else {
      console.log('Table exists and is accessible')
    }
    
    // Test 2: Minimal insert
    const { data: insertData, error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: 'Test User',
        email: `test-${Date.now()}@example.com`,
        message: 'Test message'
      })
      .select()
    
    if (insertError) {
      console.error('Insert error:', insertError)
    } else {
      console.log('Insert successful:', insertData)
    }
    
  } catch (err) {
    console.error('Connection error:', err)
  }
}

testConnection()
