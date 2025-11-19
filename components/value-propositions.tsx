
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DollarSign, Clock, BarChart3, Shield, Zap, Users, ArrowRight } from 'lucide-react'

const ValuePropositions = () => {
  const propositions = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: 'Rank Higher on Google',
      description: 'Build authority with local SEO and on page fixes so ideal clients find you first.',
      metric: 'SEO Optimization'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Fill Your Calendar',
      description: 'Consistent LinkedIn and email outreach that books qualified consultations.',
      metric: 'Lead Generation'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: 'Warm Up Your Audience',
      description: 'Retargeting ads that bring back website visitors until they convert.',
      metric: 'Paid Advertising'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'AI Automations',
      description: 'Quietly streamline followups, handoffs, and reporting so nothing slips.',
      metric: 'Smart Automation'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'DIY Courses',
      description: 'Step by step playbooks and templates to run the system yourself.',
      metric: 'Self Service'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Clear Reporting',
      description: 'One simple dashboard for leads, bookings, and cost with no fluff.',
      metric: 'Full Transparency'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Grow Online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From SEO and outreach to automation and reporting, we help financial professionals 
            attract more clients and close more deals with AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {prop.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {prop.description}
                  </p>
                  <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full self-start">
                    {prop.metric}
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

export default ValuePropositions
