
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ValuePropositions from '@/components/value-propositions'
import SocialProof from '@/components/social-proof'
import VideoPlayer from '@/components/video-player'
import { ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection />
      
      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Veritavo AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how we help financial professionals grow their online presence and generate quality leads.
            </p>
          </div>
          <VideoPlayer />
        </div>
      </section>
      
      {/* Value Propositions */}
      <ValuePropositions />
      
      {/* Social Proof */}
      <SocialProof />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Financial Professionals Choose Veritavo AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine digital marketing expertise with industry-specific knowledge 
              to help you grow your practice online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: 'Quick Setup',
                description: 'Get started fast with our streamlined onboarding process'
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: 'Industry Expertise',
                description: 'Specialized strategies for finance, accounting, and mortgage sectors'
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: 'Measurable Results',
                description: 'Track every lead, booking, and campaign with clear reporting'
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Dedicated Support',
                description: 'Personal guidance from digital marketing specialists'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Ebook Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              COMING SOON
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Ebook: 10 Quick Wins
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              10 quick wins you can apply today to climb Google without spending a penny.
            </p>
            <div className="text-gray-500 text-sm">
              Be the first to know when it's available! Follow us or check back soon.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your Practice Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get more visibility on Google, fill your calendar with qualified consultations, 
            and automate your followups so nothing slips through the cracks.
          </p>
          <div className="w-full max-w-2xl mx-auto px-4">
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 w-full sm:w-auto"
                asChild
              >
                <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
