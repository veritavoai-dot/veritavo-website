
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Loader2, Calendar, CreditCard } from 'lucide-react'

const ConsultationBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    message: ''
  })

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

    try {
      // Create Stripe checkout session for consultation
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'consultation',
          customerInfo: formData,
          successUrl: `${window.location.origin}/book-consultation/success`,
          cancelUrl: `${window.location.origin}/book-consultation`,
        }),
      })

      if (response.ok) {
        const { url } = await response.json()
        // Redirect to Stripe checkout
        window.location.href = url
      } else {
        throw new Error('Failed to create checkout session')
      }
    } catch (error) {
      toast.error('Failed to process booking. Please try again or contact us directly.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7700 900000"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessType">Type of Financial Services *</Label>
        <Input
          id="businessType"
          name="businessType"
          type="text"
          required
          value={formData.businessType}
          onChange={handleChange}
          placeholder="e.g., Accounting, Mortgage Brokerage, Financial Planning"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">What would you like to discuss?</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business goals, current challenges, or specific questions you have..."
          rows={4}
          className="w-full"
        />
        <p className="text-xs text-gray-500">
          Optional: Help us prepare for your consultation
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
          <CreditCard className="h-4 w-4 mr-2" />
          Payment Information
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Consultation fee: £100 (one time payment)</li>
          <li>• Secure payment via Stripe</li>
          <li>• Full refund if you sign up for any plan within 30 days</li>
          <li>• You'll be redirected to our secure payment page</li>
        </ul>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Calendar className="mr-2 h-5 w-5" />
            Proceed to Payment (£100)
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy. 
        After payment, you'll receive an email to schedule your consultation at a time that works for you.
      </p>
    </form>
  )
}

export default ConsultationBookingForm
