
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Target, Award, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About 
              <span className="text-blue-600"> Veritavo AI</span>
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Veritavo means "the voice of truth."
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Truth cuts through noise. In business, it separates brands that grow from those that guess.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Anthony Wilson Photo - Small, Circular, Left Side */}
          <div className="mb-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-blue-600">
              <Image
                src="/anthony-wilson.png"
                alt="Anthony Wilson - Founder of Veritavo AI"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              I'm Anthony Wilson, founder of Veritavo AI.
            </h2>
            
            <p>
              I started in ecommerce and digital marketing, testing and building online systems 
              that turned ideas into profit. I learned how to create demand, scale traffic, and 
              turn clicks into clients. That experience shaped the foundation of Veritavo, a 
              company built on real results, not hype.
            </p>

            <p>
              Today, Veritavo AI helps established businesses and high performing entrepreneurs 
              scale with precision. We use AI automation, intelligent data, and advanced SEO 
              systems to position your brand as the leader in your space, not just visible but dominant.
            </p>

            <p>
              We don't chase vanity metrics. We build growth infrastructure that attracts premium 
              clients, multiplies conversions, and gives you leverage.
            </p>

            <p className="font-semibold text-gray-900">
              If your business is already moving and you're ready to scale fast, you're exactly 
              who we built this for.
            </p>

            <div className="pt-8 border-t border-gray-200 mt-8">
              <p className="text-xl font-bold text-blue-600">
                Veritavo AI. Clarity. Leverage. Scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Veritavo AI
                </h3>
                <p className="text-gray-600 mb-6">
                  Most businesses have traffic. But they lack the systems to convert that traffic 
                  into revenue. Veritavo AI was built to bridge that gap with AI automation, 
                  data intelligence, and SEO systems that actually drive growth.
                </p>
                <p className="text-gray-600">
                  We work with businesses that are already moving, the ones ready to scale with 
                  precision, not guesswork. If you're ready to dominate your market, we're ready 
                  to build the infrastructure that makes it happen.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/team-collaboration.jpg"
                  alt="Team collaboration at Veritavo AI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
