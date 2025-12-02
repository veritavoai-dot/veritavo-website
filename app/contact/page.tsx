
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      details: 'support@veritavo.com',
      description: 'Get in touch for any questions or support needs',
      link: 'mailto:support@veritavo.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Call Us',
      details: '+44 7378 444798',
      description: 'Speak directly with our AI automation experts',
      link: 'tel:+447378444798'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Visit Us',
      details: '72 Lynton Rd, Chesham HP5 2BS',
      description: 'Click to open in maps',
      link: 'https://www.google.com/maps/search/?api=1&query=72+Lynton+Rd,+Chesham+HP5+2BS'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Business Hours',
      details: 'Mon-Fri 9AM-6PM GMT',
      description: '24/7 technical support available',
      link: null
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Let's Transform Your
              <span className="text-blue-600"> Financial Operations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to get started with AI automation? Our team of experts is here 
              to help you streamline operations and achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Whether you're ready to start your automation journey or just 
                    have questions, we're here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-blue-600 font-medium mb-1 block hover:text-blue-700 hover:underline transition-colors cursor-pointer"
                            {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          >
                            {info.details}
                          </a>
                        ) : (
                          <div className="text-blue-600 font-medium mb-1">
                            {info.details}
                          </div>
                        )}
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Prefer to Talk First?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Book a call to discuss your specific needs 
                      and see if Veritavo AI is right for your business.
                    </p>
                    <a 
                      href="https://veritavo.ai/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Schedule Your Call →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
