
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Calendar, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ConsultationSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for booking your strategic marketing consultation. 
              We're excited to help you grow your financial services business.
            </p>
          </div>

          <Card className="shadow-lg mb-8">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What Happens Next?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Step 1: Check Your Email
                    </h3>
                    <p className="text-gray-600 text-sm">
                      You'll receive a confirmation email within the next few minutes with your 
                      payment receipt and booking details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Step 2: Schedule Your Consultation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our team will contact you within 24 hours to schedule your 45-minute 
                      consultation at a time that works best for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <ArrowRight className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Step 3: Prepare for Your Call
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Before the consultation, we'll send you a brief questionnaire to help us 
                      understand your business better and maximize the value of your session.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-center">
                💡 Pro Tip: Maximize Your Consultation
              </h3>
              <p className="text-gray-700 text-sm text-center mb-4">
                Have your website analytics, current marketing materials, and key business goals 
                ready to discuss. This will help us provide more specific and actionable recommendations.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Questions before your consultation?
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
