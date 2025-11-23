
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'
import MobileTooltip from '@/components/mobile-tooltip'

export const metadata = {
  title: 'Veritavo Growth Engine | Digital Product',
  description: 'One simple system that brings in enquiries, follows up automatically, and books appointments for your finance business.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Digital Products That Power Your Growth
            </h1>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch this 60-second explainer to see how the Veritavo Growth Engine captures leads, follows up automatically, and books appointments for your business.
            </p>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <video 
                controls 
                className="w-full h-full"
                poster="/assets/veritavo-growth-engine-logo.png"
              >
                <source src="/assets/veritavo-growth-engine-professional-upbeat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Single Product Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          
            <Card className="border-2 border-blue-600 shadow-xl">
              <CardHeader className="text-center pb-6 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="relative h-32 w-32 mx-auto mb-6">
                  <Image
                    src="/assets/veritavo-growth-engine-logo.png"
                    alt="Veritavo Growth Engine"
                    fill
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  Veritavo Growth Engine
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 p-8">
                {/* Clarity Sentence */}
                <p className="text-gray-800 text-center text-lg leading-relaxed">
                  A complete in-house system for finance businesses to capture leads, follow up instantly, and book appointments automatically.
                </p>

                {/* What This Solves */}
                <p className="text-gray-700 text-center leading-relaxed">
                  Helps your finance business stop losing leads and keeps your pipeline full without extra manual work.
                </p>

                {/* CTA Button */}
                <div className="text-center pt-2">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
                    asChild
                  >
                    <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">
                      Start Your 14-Day Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>

                {/* 14-Day Free Trial with Tooltip */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">14-Day Free Trial</span>
                    <MobileTooltip content="Access the full system, funnels, workflows, and dashboard. Nothing is connected, branded, or activated until the setup fee is paid." />
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Pricing</h3>
                  
                  <div className="space-y-3">
                    {/* Setup Fee */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900 font-medium">£3,000</span>
                        <span className="text-gray-600">• One time setup fee</span>
                        <MobileTooltip content="This covers full installation, branding, integrations, domain setup, calendar connection, email setup, and activation." />
                      </div>
                    </div>

                    {/* Monthly Subscription */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900 font-medium">£997/month</span>
                        <span className="text-gray-600">• Monthly subscription</span>
                        <MobileTooltip content="This includes system updates, maintenance, and access to all automations and improvements." />
                      </div>
                    </div>

                    {/* Annual Plan */}
                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-medium">£9,600</span>
                            <span className="text-gray-600">• Annual plan</span>
                            <MobileTooltip content="Pay once for 12 months and reduce your cost to £800/month. Saves £1,364 compared to monthly billing." />
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Equivalent to £800/month, save £1,364</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Smart lead-generation website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">AI chatbot for website visitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">AI phone agent for inbound and outbound calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Automated email, SMS, and WhatsApp followups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Booking calendar and funnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">CRM pipeline for finance leads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Review and testimonial automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Lead-qualification workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Ready-made messaging templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Setup and light ongoing optimisation</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Get More Clients Every Month?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            See how the Veritavo AI Client Growth System can bring you 20-50 qualified inquiries per month.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold text-lg px-10 py-6"
              asChild
            >
              <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">
                Book in the Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
