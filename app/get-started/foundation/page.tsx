

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'
import { loadStripe } from '@stripe/stripe-js'
import { getStripePublishableKey } from '@/lib/stripe'

const stripePromise = loadStripe(getStripePublishableKey())

export default function FoundationGetStartedPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [loading, setLoading] = useState(false)

  const plan = {
    name: 'Foundation Service',
    tagline: 'Be Found. Build Trust. Start Attracting Clients.',
    priceMonthly: 8000,
    priceAnnual: 86000,
    setupFee: '£500',
    note: 'The £500 setup fee is nonrefundable and covers initial setup work. Your subscription fee is charged after the 14 day cooling off period. Cancel within 14 days for a full refund of subscription fees only.',
    description: 'This package builds your digital foundation. We make sure your business stands out online with better search rankings, stronger credibility, and a system that turns visitors into inquiries.',
    whatYouGet: 'Within the first 30–60 days, you can potentially start generating 15 new potential clients per month through organic search and improved online visibility, no paid ads needed.',
    potentialClients: '15 clients/month',
    features: [
      'FREE 3-page template website',
      'SEO-optimized landing page that turns clicks into inquiries',
      'Google Business setup and optimization for higher search ranking',
      'Local backlinks and citations to strengthen authority',
      'Email marketing setup with autoresponder templates',
      'Review and reputation system to build trust',
      'Contact form connected to your CRM or email inbox',
      'Monthly visibility and performance reports'
    ]
  }

  const currentPrice = billingPeriod === 'annual' ? plan.priceAnnual : plan.priceMonthly
  const displayPrice = billingPeriod === 'annual' 
    ? `£${Math.round(plan.priceAnnual / 4).toLocaleString()} per quarter` 
    : `£${plan.priceMonthly.toLocaleString()}/month`
  const annualSavings = (plan.priceMonthly * 12) - plan.priceAnnual

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const stripe = await stripePromise

      if (!stripe) {
        throw new Error('Stripe failed to load')
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName: plan.name,
          billingPeriod,
          priceMonthly: plan.priceMonthly * 100, // Convert to pence
          priceAnnual: plan.priceAnnual * 100, // Convert to pence
        }),
      })

      const { url, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Your Registration
            </h1>
            <p className="text-xl text-gray-600">
              {plan.name} - {plan.tagline}
            </p>
          </div>

          {/* Main Card */}
          <Card className="mb-8 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="text-3xl">{plan.name}</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {/* Potential Results */}
              <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-gray-900 mb-2">What You Can Expect</h3>
                <p className="text-gray-700 mb-3">{plan.whatYouGet}</p>
                <div className="text-center">
                  <span className="font-bold text-2xl text-green-700">Potentially {plan.potentialClients}</span>
                  <p className="text-sm text-gray-600 mt-1">through organic search</p>
                </div>
              </div>

              {/* Billing Period Toggle */}
              <div className="mb-8 flex justify-center">
                <div className="bg-gray-100 rounded-lg p-2 inline-flex gap-2 w-full max-w-md">
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`flex-1 py-3 px-6 rounded-md font-semibold transition-all ${
                      billingPeriod === 'monthly'
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span>Monthly</span>
                      <span className="text-xs text-gray-500 mt-1">Pay monthly</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setBillingPeriod('annual')}
                    className={`flex-1 py-3 px-6 rounded-md font-semibold transition-all ${
                      billingPeriod === 'annual'
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span>Annual Plan</span>
                      <span className="text-xs text-gray-500 mt-1">4 quarterly payments</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full mt-1">
                        Save £{annualSavings}
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8 border-2 border-blue-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Required</h3>
                  
                  {billingPeriod === 'annual' ? (
                    <>
                      {/* Setup Fee */}
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-blue-600">{plan.setupFee}</span>
                        <p className="text-xs text-gray-600 mt-1">One time setup fee (deducted from annual total)</p>
                      </div>
                      
                      <div className="border-t-2 border-blue-300 pt-4 mb-4">
                        {/* Monthly Equivalent - BIG BOLD */}
                        <div className="bg-white rounded-lg p-4 mb-3 border-2 border-green-500">
                          <p className="text-sm text-gray-600 mb-2">Effective monthly rate when paying quarterly:</p>
                          <span className="text-5xl font-bold text-green-700">£7,125</span>
                          <p className="text-lg font-semibold text-gray-900 mt-1">/month</p>
                          <p className="text-xs text-green-600 font-semibold mt-2">
                            Pay every 3 months, spread cost over 12 months
                          </p>
                        </div>

                        {/* Quarterly Payment Details */}
                        <div className="bg-blue-100 rounded-lg p-3 mb-3">
                          <p className="text-sm text-gray-700 font-semibold mb-1">Quarterly Payment:</p>
                          <span className="text-2xl font-bold text-blue-700">£21,375</span>
                          <p className="text-xs text-gray-600 mt-1">Paid every 3 months (4 payments per year)</p>
                        </div>

                        {/* Total Annual */}
                        <div className="border-t pt-3">
                          <p className="text-xs text-gray-600">Total Annual Investment:</p>
                          <span className="text-xl font-bold text-gray-900">£{plan.priceAnnual.toLocaleString()}</span>
                          <p className="text-xs text-blue-600 font-semibold mt-2">
                            First payment charged after 14 day cooling off period
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Monthly Billing */}
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-blue-600">{plan.setupFee}</span>
                        <p className="text-xs text-gray-600 mt-2">One time setup fee</p>
                      </div>
                      <div className="border-t pt-4">
                        <span className="text-3xl font-bold text-gray-900">{displayPrice}</span>
                        <p className="text-sm text-blue-600 font-semibold mt-2">
                          Charged after 14 day cooling off period
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <p className="text-xs text-gray-700 text-center leading-relaxed">
                    <span className="font-semibold">Refund Policy:</span> The £500 setup fee is nonrefundable as it covers immediate setup work. 
                    Your subscription fee ({billingPeriod === 'monthly' ? 'monthly' : 'quarterly'}) is charged after 14 days. 
                    Cancel within 14 days for a full refund of subscription fees only (setup fee excluded).
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                <div className="grid gap-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple 4-Step Process */}
              <div className="mb-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Simple Onboarding Process</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold text-gray-900">Pay £500 Setup Fee (Non-Refundable)</p>
                      <p className="text-sm text-gray-600">Secures your project - we begin setup work immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold text-gray-900">Book Your Strategy Session</p>
                      <p className="text-sm text-gray-600">Schedule your first consultation to discuss your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold text-gray-900">14-Day Cooling-Off Period</p>
                      <p className="text-sm text-gray-600">Review everything - cancel for a refund of subscription fees only (£500 setup fee is non-refundable)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-semibold text-gray-900">Full Launch After 14 Days</p>
                      <p className="text-sm text-gray-600">First subscription payment is charged and we fully launch your campaign</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Proceed to Secure Payment
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-sm text-gray-600">
                  After payment, you'll be redirected to book your consultation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Switch Plans - Small Links at Bottom */}
          <div className="text-center py-8">
            <p className="text-sm text-gray-600 mb-3">Not the right fit? View other plans:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="/get-started/growth" 
                className="text-blue-600 hover:text-blue-700 text-sm underline"
              >
                Growth Service (£15,000/month)
              </Link>
              <Link 
                href="/get-started/elite" 
                className="text-blue-600 hover:text-blue-700 text-sm underline"
              >
                Elite Growth System (£30,000/month)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
