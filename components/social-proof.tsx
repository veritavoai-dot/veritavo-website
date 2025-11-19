
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Financial Advisor',
      company: 'Independent Practice',
      content: 'The SEO work got us ranking on page one for our local area. We\'re getting qualified leads calling us directly now instead of having to chase them.',
      rating: 5,
      image: '/assets/sarah-mitchell.png'
    },
    {
      name: 'Michael Chen',
      role: 'Mortgage Broker',
      company: 'Local Brokerage',
      content: 'The LinkedIn outreach strategy fills our calendar with consultations. The follow-up automation means we never lose track of potential clients.',
      rating: 5,
      image: '/assets/michael-chen.png'
    },
    {
      name: 'Priya Patel',
      role: 'CPA',
      company: 'Tax & Accounting Firm',
      content: 'The retargeting ads bring back website visitors who weren\'t ready at first. The dashboard makes it easy to see where every lead comes from.',
      rating: 5,
      image: '/assets/priya-patel.png'
    }
  ]

  const stats = [
    { value: 'SEO', label: 'Google Rankings' },
    { value: 'LinkedIn', label: 'Outreach Campaigns' },
    { value: 'Ads', label: 'Retargeting Strategy' },
    { value: 'AI', label: 'Smart Automation' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how financial professionals are growing their practices with 
            targeted digital marketing and automation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-200" />
                    <p className="text-gray-700 italic pl-4">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-blue-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
