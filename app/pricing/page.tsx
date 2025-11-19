'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/header'

const services = [
  {
    name: 'Foundation Plan',
    monthlyPrice: '8,000',
    annualPrice: '7,167',
    annualTotal: '86,000',
    monthlySavings: '10,000',
    setupFee: '1,000',
    potentialClients: '15 inquiries',
    description: 'Perfect for established professionals ready to boost their online presence and generate consistent leads.',
    features: [
      'FREE 3-page template website',
      'Google My Business optimization with regular posting',
      'Strategic local ad campaigns (ad spend not included)',
      'Social media setup on LinkedIn and Facebook with content posted 3x/week',
      'Regular email marketing campaigns with lead nurturing',
      'Sales funnel setup and optimization',
      'Calendar booking system for seamless appointment scheduling',
      'Monthly analytics and performance reports'
    ],
    color: 'blue',
    stripeMonthlyLink: '#', // Replace with actual Stripe link
    stripeAnnualLink: '#'   // Replace with actual Stripe link
  },
  {
    name: 'Growth Plan',
    monthlyPrice: '15,000',
    annualPrice: '13,333',
    annualTotal: '160,000',
    monthlySavings: '20,000',
    setupFee: '1,000',
    potentialClients: '25 inquiries',
    popular: true,
    description: 'Ideal for ambitious firms wanting to dominate their local market with advanced automation and broader reach.',
    features: [
      'Everything in the Foundation Plan',
      'FREE 3-page template website',
      'Expand to regional ad campaigns with advanced targeting',
      'Enhanced social posting with engagement strategies',
      'Multi-channel email campaigns with advanced automation',
      'Advanced sales funnel with A/B testing and conversion optimization',
      'Integrated calendar booking system with automated reminders',
      'Review generation and reputation management system',
      'Bi-weekly strategy calls and priority support'
    ],
    color: 'purple',
    stripeMonthlyLink: '#', // Replace with actual Stripe link
    stripeAnnualLink: '#'   // Replace with actual Stripe link
  },
  {
    name: 'Elite Growth System',
    monthlyPrice: '30,000',
    annualPrice: '26,667',
    annualTotal: '320,000',
    monthlySavings: '40,000',
    setupFee: '1,995',
    potentialClients: '50+ inquiries',
    description: 'For ambitious firms ready to dominate their market with full marketing automation and nationwide reach.',
    features: [
      'Everything in the Growth Plan',
      'FREE 3-page template website PLUS a premium custom-built website tailored to your business',
      'Nationwide ad campaigns across multiple platforms (plus ad spend)',
      'YouTube Advertisement campaigns to reach premium clients',
      'AI powered CRM and chatbot handling leads 24/7',
      'Strategic email marketing campaigns and automation sequences',
      'Premium sales funnel with multi-step nurture sequences and dynamic retargeting',
      'Advanced calendar booking with team scheduling and CRM integration',
      'Premium backlinks, PR mentions, and SEO enhancements',
      'In-depth analytics, quarterly reports, and a dedicated growth strategist'
    ],
    color: 'green',
    stripeMonthlyLink: '#', // Replace with actual Stripe link
    stripeAnnualLink: '#'   // Replace with actual Stripe link
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            💰 Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Choose Your <span className="text-blue-600">Growth Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select monthly or annual billing. Annual plans save you up to 2 months of fees.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-3 rounded-md text-base font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-3 rounded-md text-base font-medium transition-all flex items-center justify-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual Billing
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Save up to £40,000
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.name}
              className={`relative ${service.popular ? 'border-2 border-purple-600 shadow-xl' : 'border border-gray-200 shadow-lg'}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-4">{service.name}</CardTitle>
                
                {/* Setup Fee - BOLD and Prominent */}
                <div className="mb-3 pb-3 border-b border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">One-Time Setup Fee</div>
                  <div className="text-5xl font-extrabold text-gray-900 mb-1">
                    £{service.setupFee}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">Then 14-day cooling-off period</div>
                </div>

                {/* Monthly Price - Smaller */}
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Then monthly payments</div>
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-gray-900">
                      £{billingCycle === 'monthly' ? service.monthlyPrice : service.annualPrice}
                    </span>
                    <span className="text-gray-600 text-base">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <>
                      <div className="text-xs text-gray-600 mb-2">
                        Billed annually at £{service.annualTotal}
                      </div>
                      <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Save £{service.monthlySavings}/year 🎉
                      </div>
                    </>
                  )}
                </div>

                {/* Potential Clients Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">
                    🎯 Potential {service.potentialClients}
                  </div>
                </div>

                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 space-y-3">
                  <Link href={billingCycle === 'monthly' ? service.stripeMonthlyLink : service.stripeAnnualLink}>
                    <Button 
                      className={`w-full h-12 ${service.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                    >
                      Get Started - {billingCycle === 'monthly' ? 'Monthly' : 'Annual'}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full h-10">
                      <Calendar className="mr-2 w-4 h-4" />
                      Book Consultation Instead
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">14 Day Cooling Off Period</h4>
              <p className="text-gray-600 text-sm">
                Try any service risk free for 14 days. Not satisfied? Get a full refund.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Secure Payment</h4>
              <p className="text-gray-600 text-sm">
                All payments are processed securely through Stripe with bank-level encryption.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Cancel Anytime</h4>
              <p className="text-gray-600 text-sm">
                No long-term contracts. Cancel your subscription anytime with 30 days notice.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions About Pricing?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Check out our FAQ or book a consultation to discuss your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/faq">
              <Button variant="outline" size="lg">
                View FAQ
              </Button>
            </Link>
            <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
