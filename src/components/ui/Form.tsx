import { useState } from 'react'
import { motion } from 'motion/react'
import { submitContactForm } from '../../lib/supabase'
import { Mail, Phone, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

interface FormField {
  name: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}

interface ContactFormProps {
  title?: string
  subtitle?: string
  buttonText?: string
  showPhone?: boolean
  showCompany?: boolean
  variant?: 'default' | 'minimal'
}

export function ContactForm({ 
  title = "Send me a message",
  subtitle = "Let's discuss your project and how I can help you achieve your goals.",
  buttonText = "Send Message",
  showPhone = true,
  showCompany = true,
  variant = 'default'
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    project_details: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      console.log('📤 Form component submitting with data:', formData)
      
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        message: formData.message,
        project_details: formData.project_details || undefined,
        service_interest: [],
        source: 'portfolio_contact_form'
      })

      console.log('📥 Form submission result:', result)

      if (result.success) {
        console.log('✅ Form submission successful in component')
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          project_details: ''
        })
      } else {
        console.log('❌ Form submission failed in component:', result.error)
        setSubmitStatus('error')
        setErrorMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.log('❌ Form submission exception in component:', error)
      setSubmitStatus('error')
      setErrorMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fields: FormField[] = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
    ...(showPhone ? [{ name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (234) 567-890' }] : []),
    ...(showCompany ? [{ name: 'company', label: 'Company', type: 'text', placeholder: 'Your company name' }] : []),
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project...', required: true }
  ]

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/20"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
            className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/20"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={4}
          required
          className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-[#4C1D95] text-white rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow disabled:opacity-50"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              {buttonText}
              <ArrowRight size={20} />
            </>
          )}
        </motion.button>
      </form>
    )
  }

  return (
    <div className="bg-background border border-border rounded-2xl p-8 md:p-12">
      <h3 className="text-2xl mb-6">{title}</h3>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle size={20} />
            <span>Message sent successfully! I'll get back to you within 24 hours.</span>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <div className="flex items-center gap-2 text-red-700">
            <AlertCircle size={20} />
            <span>{errorMessage}</span>
          </div>
        </motion.div>
      )}

      <p className="text-muted-foreground mb-8">{subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows={4}
                required={field.required}
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/20 resize-none"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#4C1D95]/20"
              />
            )}
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-[#4C1D95] text-white rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow disabled:opacity-50"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              {buttonText}
              <ArrowRight size={20} />
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-8 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+91 9940037968"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone size={20} />
            +91 9940037968
          </a>
          <a
            href="mailto:business.nexgen46@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={20} />
            business.nexgen46@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
