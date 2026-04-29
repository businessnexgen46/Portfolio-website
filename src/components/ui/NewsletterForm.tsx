import { useState } from 'react'
import { motion } from 'motion/react'
import { submitNewsletterForm } from '../../lib/supabase'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

interface NewsletterFormProps {
  title?: string
  subtitle?: string
  buttonText?: string
  placeholder?: string
  variant?: 'default' | 'minimal'
}

export function NewsletterForm({ 
  title = "Stay Updated",
  subtitle = "Get the latest updates on my projects and web development tips.",
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  variant = 'default'
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const result = await submitNewsletterForm(email)

      if (result.success) {
        setSubmitStatus('success')
        setEmail('')
      } else {
        setSubmitStatus('error')
        setErrorMessage('Failed to subscribe. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="flex-1 px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : buttonText}
        </motion.button>
      </form>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="text-center mb-6">
        <Mail className="text-primary mx-auto mb-4" size={32} />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle size={20} />
            <span>Successfully subscribed! Check your email for confirmation.</span>
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : buttonText}
        </motion.button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        No spam, unsubscribe at any time.
      </p>
    </div>
  )
}
