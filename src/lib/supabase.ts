import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


// ==============================
// TYPES
// ==============================
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  project_details?: string
  service_interest?: string[]
  source?: string
}

export interface NewsletterFormData {
  email: string
}


// ==============================
// CONTACT FORM
// ==============================
export async function submitContactForm(formData: ContactFormData) {
  try {
    console.log('🚀 Starting form submission with data:', formData)
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message,
        project_details: formData.project_details || null,
        service_interest: formData.service_interest || [],
        source: formData.source || "portfolio_contact_form"
      })
      .select()
      

    if (error) {
      console.error('❌ Supabase error:', JSON.stringify(error, null, 2))
      throw error
    }

    console.log('✅ Form submission successful:', data)
    return { success: true, data }

  } catch (error) {
    console.error('❌ Error submitting contact form:', error)
    return { success: false, error }
  }
}


// ==============================
// NEWSLETTER
// ==============================
export async function submitNewsletterForm(email: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_submissions')
      .insert([
        {
          email: email
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error FULL:', JSON.stringify(error, null, 2))
      throw error
    }

    return { success: true, data }

  } catch (error) {
    console.error('Error submitting newsletter form:', error)
    return { success: false, error }
  }
}


// ==============================
// FETCH DATA
// ==============================
export async function getContactSubmissions() {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error FULL:', JSON.stringify(error, null, 2))
      throw error
    }

    return { success: true, data }

  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return { success: false, error }
  }
}