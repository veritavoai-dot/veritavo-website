
import Header from '@/components/header'
import Footer from '@/components/footer'
import ConsultationBookingForm from '@/components/consultation-booking-form'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Video, Clock, Target, Award } from 'lucide-react'

export default function BookConsultationPage() {
  const consultationFeatures = [
    {
      icon: <Video className="h-6 w-6 text-blue-600" />,
      title: 'Virtual Consultation',
      description: '45-minute video call with our digital marketing experts'
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: 'Strategy Review',
      description: 'Detailed analysis of your current marketing and growth opportunities'
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: 'Custom Recommendations',
      description: 'Tailored action plan for your financial services business'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for your busy schedule'
    }
  ]

  const benefits = [
    'Comprehensive review of your online presence',
    'Identification of immediate growth opportunities',
    'Custom digital marketing strategy recommendations',
    'Clear roadmap for implementation',
    'Answer all your questions about our services',
    'No pressure, educational consultation'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              💼 AI Strategy Call • £49 Refundable
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Book Your AI Strategy Call
              <span className="text-blue-600"> – £49</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We'll review your website, audience, and goals, then show you how Veritavo AI can bring you 20–50 qualified leads every month.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 font-semibold">
              (£49 is refunded if you sign up.)
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Consultation Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What's Included
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our strategic consultation provides you with expert insights and 
                    a custom action plan to grow your financial services business online.
                  </p>
                </div>

                <div className="space-y-6">
                  {consultationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      You'll Receive:
                    </h3>
                    <div className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Consultation Fee</p>
                      <p className="text-4xl font-bold text-blue-600 mb-2">£100</p>
                      <p className="text-xs text-gray-600">One time payment • Fully refundable if you sign up for any plan within 30 days</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Reserve Your Consultation
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below to schedule your strategic marketing consultation. 
                    Payment of £100 is required to secure your booking.
                  </p>
                  <ConsultationBookingForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 3-step process to get your personalized marketing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Book & Pay',
                description: 'Complete the booking form and secure your slot with a £100 payment.',
                timeline: '2 minutes'
              },
              {
                step: '2',
                title: 'Consultation Call',
                description: 'Join a 45-minute video call with our marketing experts to discuss your business.',
                timeline: '45 minutes'
              },
              {
                step: '3',
                title: 'Receive Strategy',
                description: 'Get your custom action plan and recommendations for growth.',
                timeline: 'During call'
              }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {process.description}
                  </p>
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">
                    {process.timeline}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
