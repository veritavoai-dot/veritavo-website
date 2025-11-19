'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { CheckCircle, ArrowRight, Zap, Info } from 'lucide-react'

export default function ServicesPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  
  // Pricing calculations
  const monthlyPrice = 4995
  const monthlyTotal = monthlyPrice * 6 // £29,970
  const annualPrice = 24000 // 20% discount applied, rounded
  const annualMonthlyEquivalent = 4000 // £24,000 / 6 months
  const savings = monthlyTotal - annualPrice // £5,970
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Veritavo AI Client Growth System
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              We help finance companies get more clients every month using AI powered websites, smart chatbots, digital marketing, and automated follow up systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* What's Included */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What's Included
            </h2>
            
            <TooltipProvider>
              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-700">Custom lead-generation website</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="inline-flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4 bg-white border-2 border-blue-200 shadow-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-600">Custom Website</strong> means we build a professional website designed specifically for your business. It's created to attract visitors and turn them into clients by making it easy for people to contact you, book appointments, or request your services—all without you needing any technical skills.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-700">AI chatbot that replies 24/7</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="inline-flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4 bg-white border-2 border-blue-200 shadow-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-600">AI Chatbot</strong> is like having a virtual assistant on your website that never sleeps. It automatically answers visitor questions, provides information about your services, and captures contact details—even when you're busy or outside business hours. It's powered by artificial intelligence to give helpful, natural responses.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-700">Google, Facebook, YouTube ads</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="inline-flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4 bg-white border-2 border-blue-200 shadow-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-600">Online Advertising</strong> means we create and run ads for your business on Google (when people search for your services), Facebook (in people's news feeds), and YouTube (before or during videos). These ads help more potential clients discover your business and bring qualified leads directly to you.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-700">SEO setup and ranking</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="inline-flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4 bg-white border-2 border-blue-200 shadow-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-600">SEO (Search Engine Optimization)</strong> helps your website appear higher in Google search results. When potential clients search for services like yours, they'll find your business first—bringing you more organic traffic and qualified leads without paying for ads.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-700">AI generated automated email and WhatsApp followups</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="inline-flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4 bg-white border-2 border-blue-200 shadow-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-600">Automated Followups</strong> means our AI system automatically sends personalized emails and WhatsApp messages to your leads at the right time. It keeps your potential clients engaged without you having to remember to follow up manually, saving you time and ensuring no opportunity is missed.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </TooltipProvider>

            {/* Pricing */}
            <div className="bg-blue-50 rounded-xl p-8 mb-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing</h3>
              
              {/* Billing Period Toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-lg border-2 border-blue-300 bg-white p-1">
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                      billingPeriod === 'monthly'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Pay Monthly
                  </button>
                  <button
                    onClick={() => setBillingPeriod('annual')}
                    className={`px-6 py-3 rounded-md text-sm font-semibold transition-all relative ${
                      billingPeriod === 'annual'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Pay for 6 Months
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save £{savings.toLocaleString()}
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">£1,000</div>
                  <p className="text-gray-600">One time setup fee</p>
                </div>
                <div className="text-center">
                  {billingPeriod === 'monthly' ? (
                    <>
                      <div className="text-4xl font-bold text-blue-600 mb-2">£{monthlyPrice.toLocaleString()}</div>
                      <p className="text-gray-600">/month</p>
                      <p className="text-sm text-gray-500 mt-1">(minimum 6-month term)</p>
                      <p className="text-sm font-semibold text-gray-700 mt-2">
                        Total: £{monthlyTotal.toLocaleString()} for 6 months
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-green-600 mb-2">£{annualMonthlyEquivalent.toLocaleString()}</div>
                      <p className="text-green-600 font-semibold">/month</p>
                      <p className="text-sm text-gray-600 mt-1">
                        (£{annualPrice.toLocaleString()} total for 6 months)
                      </p>
                      <div className="mt-3 inline-block bg-green-100 border border-green-500 rounded-lg px-4 py-2">
                        <p className="text-sm font-bold text-green-700">
                          Save £{savings.toLocaleString()} vs monthly
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Expected Results */}
              <div className="bg-white rounded-lg p-6 border-2 border-green-500">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Zap className="h-6 w-6 text-green-600" />
                  <h4 className="text-xl font-bold text-gray-900">Expected Results</h4>
                </div>
                <p className="text-center text-2xl font-bold text-green-700">
                  20–50 new qualified inquiries per month
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-12 py-6 h-auto"
                asChild
              >
                <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call – £49
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                £49 refunded if you sign up
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
