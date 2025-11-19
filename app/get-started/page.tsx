'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'

export default function GetStartedPage() {
  const plans = [
    {
      name: 'Foundation Plan',
      tagline: 'Be Found. Build Trust. Start Attracting Clients.',
      priceMonthly: '£8,000/month',
      setupFee: '£1,000',
      potentialClients: '15 inquiries',
      url: '/get-started/foundation',
      bgColor: 'bg-white',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      popular: false
    },
    {
      name: 'Growth Plan',
      tagline: 'Turn Online Attention Into Predictable Revenue',
      priceMonthly: '£15,000/month',
      setupFee: '£1,000',
      potentialClients: '25 inquiries',
      url: '/get-started/growth',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Elite Growth System',
      tagline: 'Scale Fast. Dominate Your Market.',
      priceMonthly: '£30,000/month',
      setupFee: '£1,995',
      potentialClients: '50+ inquiries',
      url: '/get-started/elite',
      bgColor: 'bg-white',
      borderColor: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: false
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Growth Plan
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              One time nonrefundable setup fees apply
            </p>
            <p className="text-base text-gray-500">
              14 day cooling off period • Cancel anytime after month one
            </p>
          </div>

          {/* Plan Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.bgColor} ${plan.borderColor} border-2 shadow-lg hover:shadow-xl transition-all ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-900" />
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{plan.tagline}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{plan.priceMonthly}</div>
                      <div className="text-xs text-gray-500">+ {plan.setupFee} setup fee</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                      <div className="text-sm font-bold text-gray-900">Potentially {plan.potentialClients}/month</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <Button 
                    size="lg" 
                    className={`w-full ${plan.buttonColor} text-white`}
                    asChild
                  >
                    <Link href={plan.url}>
                      Select Plan
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Why Choose Veritavo AI?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">14-Day Cooling-Off Period</p>
                  <p className="text-sm text-gray-600">Full refund available if you change your mind</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Cancel Anytime</p>
                  <p className="text-sm text-gray-600">No long-term contracts after month one</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Proven Results</p>
                  <p className="text-sm text-gray-600">AI driven strategies that generate real leads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Expert Support</p>
                  <p className="text-sm text-gray-600">Dedicated team to help you succeed</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need help choosing the right plan?</p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
