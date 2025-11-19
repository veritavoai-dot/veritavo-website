
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="/assets/Generated Image October 01, 2025 - 1_03PM (1).png"
            alt="Professional AI automation background"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-white/90" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {/* Badge and Book Consultation Button on same line */}
              <div className="flex items-center justify-between gap-4">
                <motion.div
                  className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  🚀 Digital Growth for Financial Professionals
                </motion.div>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                  asChild
                >
                  <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">
                    Book Consultation
                  </a>
                </Button>
              </div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                AI Automation for{' '}
                <span className="text-blue-600">Financial Services</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transform your finance, accounting, and mortgage firm with AI driven online growth that boosts Google rankings, amplifies your presence across LinkedIn and Facebook, and drives consistent leads through email outreach.
              </motion.p>
            </div>

          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative w-full max-w-full overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl w-full">
              <Image
                src="/assets/Generated Image October 01, 2025 - 1_07PM.png"
                alt="Digital marketing dashboard"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
