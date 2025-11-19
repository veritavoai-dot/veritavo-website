
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Loader2, Search, Globe } from 'lucide-react'

const WebsiteScanForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    websiteUrl: '',
    phone: '',
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
      const response = await fetch('/api/website-scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Scan request submitted successfully! We\'ll send your report within 2-3 business days.')
        setFormData({
          name: '',
          email: '',
          company: '',
          websiteUrl: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit scan request')
      }
    } catch (error) {
      toast.error('Failed to submit request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="websiteUrl" className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-blue-600" />
          <span>Website URL *</span>
        </Label>
        <Input
          id="websiteUrl"
          name="websiteUrl"
          type="url"
          required
          value={formData.websiteUrl}
          onChange={handleChange}
          placeholder="https://yourwebsite.com"
          className="w-full pl-10"
        />
        <p className="text-xs text-gray-500">
          The website you'd like us to analyze for automation opportunities
        </p>
      </div>

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
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Business</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What type of financial services do you provide? What are your biggest operational challenges? Any specific areas you'd like us to focus on?"
          rows={4}
          className="w-full"
        />
        <p className="text-xs text-gray-500">
          Optional: Help us provide more targeted recommendations
        </p>
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
            Submitting Scan Request...
          </>
        ) : (
          <>
            <Search className="mr-2 h-5 w-5" />
            Get My Website Scan
          </>
        )}
      </Button>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Our AI experts will analyze your website and business operations</li>
          <li>• You'll receive a detailed report within 2-3 business days</li>
          <li>• The report includes specific automation recommendations and ROI projections</li>
          <li>• Optional: Schedule a consultation to discuss the findings</li>
        </ul>
      </div>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy. 
        We'll only use your information to provide your scan report and follow up if requested.
      </p>
    </form>
  )
}

export default WebsiteScanForm
