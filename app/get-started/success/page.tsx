
'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Calendar } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('session_id')
  const plan = searchParams?.get('plan')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, you would verify the session with Stripe
    // and update your database here
    setTimeout(() => setLoading(false), 1000)
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Confirming your payment...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to Veritavo AI - {plan}
            </p>
          </div>

          {/* Confirmation Card */}
          <Card className="mb-8 shadow-xl border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardTitle className="text-2xl">What Happens Next</CardTitle>
              <CardDescription className="text-green-100">
                Your journey to growth starts here
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {/* Next Steps */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Book Your Strategy Session</h3>
                    <p className="text-gray-600 text-sm">
                      Schedule your first consultation call below. Choose a time that works best for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Receive Confirmation Email</h3>
                    <p className="text-gray-600 text-sm">
                      Check your inbox for a payment confirmation and appointment details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">14-Day Cooling-Off Period</h3>
                    <p className="text-gray-600 text-sm">
                      You have 14 days to review our service. Full refund available if you change your mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Launch Your Campaign</h3>
                    <p className="text-gray-600 text-sm">
                      After 14 days, we begin building your growth system and delivering results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Booking Section */}
              <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Book Your Consultation Now</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Schedule your strategy session with our team. We'll discuss your business goals and create your custom growth plan.
                </p>
                
                {/* Calendly or Booking Link */}
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
                  asChild
                >
                  <Link href="https://calendly.com/your-calendly-link" target="_blank">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Your Strategy Session
                  </Link>
                </Button>
                <p className="text-xs text-gray-600 text-center mt-3">
                  You can also schedule this later from your confirmation email
                </p>
              </div>

              {/* Important Information */}
              <div className="mt-8 bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-900 mb-2">Important Information</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Your setup fee of £500 has been processed and is nonrefundable</li>
                  <li>• Your first subscription payment will be charged after the 14 day cooling off period</li>
                  <li>• You can cancel anytime after the first month</li>
                  <li>• Check your email for payment confirmation and next steps</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Additional Support */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Have questions? Need help?</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
