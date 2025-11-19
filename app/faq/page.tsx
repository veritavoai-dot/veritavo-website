
import Header from '@/components/header'
import Footer from '@/components/footer'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | Veritavo AI',
  description: 'Get answers to common questions about Veritavo AI services, pricing, setup, and how we help businesses grow with automation and digital marketing.',
}

const faqs = [
  {
    question: 'What is Veritavo AI?',
    answer: (
      <>
        <p className="mb-4">
          Veritavo AI helps businesses grow using smart tools and simple systems. We focus on three main things:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Automation</strong> – setting up tools that do the busy work for you (like followup emails or messages).</li>
          <li><strong>Lead generation</strong> – helping you find and attract real customers who are ready to buy.</li>
          <li><strong>Digital marketing</strong> – using online ads, SEO, and content to make sure people can find your business easily.</li>
        </ul>
        <p>
          Our goal is to help you get more clients, be seen online, and save hours of work every week.
        </p>
      </>
    )
  },
  {
    question: 'Who is Veritavo AI for?',
    answer: 'Veritavo AI is for professional businesses that want real growth, especially in finance, insurance, real estate, and consulting. Whether you\'re a solo entrepreneur or part of a growing team, our systems help you get more clients without needing a full marketing department.'
  },
  {
    question: 'What kind of results do you help businesses get?',
    answer: (
      <>
        <p className="mb-4">
          If you need <strong>quick responses</strong>, our tools (like chatbots and automation) help you connect with leads instantly.
        </p>
        <p className="mb-4">
          If you want <strong>long-term organic growth</strong>, our SEO and content systems help your business rank higher on Google so customers find you naturally.
        </p>
        <p>
          Many clients use both: quick-response systems to close sales fast, and organic growth for lasting visibility.
        </p>
      </>
    )
  },
  {
    question: 'Do I need to know anything technical?',
    answer: (
      <>
        <p className="mb-4">Not at all. We've made everything simple.</p>
        <p className="mb-4">
          If you buy a <strong>digital product</strong> (like our chatbots or lead tools), you'll get a <strong>step-by-step help manual</strong> that shows you how to set it up yourself. And if you'd prefer, <strong>we can set it up for you</strong> — just let us know and we'll handle everything.
        </p>
        <p className="mb-4">
          If you buy a <strong>service package</strong>, we'll handle everything for you and even call you to make sure it's all working perfectly.
        </p>
        <p>
          Either way, our team is always available to help by phone or email whenever you need us.
        </p>
      </>
    )
  },
  {
    question: 'How do I get started?',
    answer: (
      <>
        <p className="mb-4">
          <strong>Step 1: Book a consultation first.</strong> We'll discuss your business goals and recommend the right solution for you.
        </p>
        <p className="mb-4">
          <strong>Step 2: After the consultation, we'll send you payment details</strong> if you decide to move forward.
        </p>
        <p>
          <strong>Step 3: Once payment is confirmed,</strong> you'll get an email with clear setup steps and we'll start building your system within 24 hours.
        </p>
      </>
    )
  },
  {
    question: 'How do I pay for products or services?',
    answer: (
      <>
        <p className="mb-4">
          <strong>You must book a consultation first before making any payment.</strong>
        </p>
        <p className="mb-4">
          During your consultation call, we'll:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Understand your business needs and goals</li>
          <li>Recommend the best product or service package for you</li>
          <li>Answer all your questions about pricing and setup</li>
        </ul>
        <p className="mb-4">
          <strong>After the consultation,</strong> if you decide to move forward, we'll send you payment instructions via email or provide a secure checkout link.
        </p>
        <p>
          We never take payment before understanding your needs first.
        </p>
      </>
    )
  },
  {
    question: 'What happens after I sign up?',
    answer: (
      <>
        <p className="mb-4">
          Every client gets a <strong>14 day cooling off period</strong>. During that time, we'll build or set up your system and show you what it looks like.
        </p>
        <p>
          After 14 days, your service or product goes live automatically unless you cancel.
        </p>
      </>
    )
  },
  {
    question: 'Do you offer refunds?',
    answer: (
      <>
        <p className="mb-4">
          The <strong>setup fee of £1,000 is nonrefundable</strong> because it covers the time and tools needed to prepare your account and get your system running.
        </p>
        <p>
          If you cancel within 14 days, your plan won't activate and no further monthly charges will be made.
        </p>
      </>
    )
  },
  {
    question: 'What makes Veritavo AI different from other agencies?',
    answer: (
      <>
        <p className="mb-4">
          Most agencies sell you big promises and complicated plans.
        </p>
        <p className="mb-4">
          Veritavo AI gives you <strong>clear steps, simple systems, and measurable results</strong>, powered by AI and real data.
        </p>
        <p>
          We focus on doing what actually works, not what sounds fancy.
        </p>
      </>
    )
  },
  {
    question: 'How soon will I see results?',
    answer: (
      <>
        <p className="mb-4">
          You'll start seeing changes fast. Some clients notice more leads in the first 30 days.
        </p>
        <p>
          SEO and organic results take longer, usually 60–90 days, but the growth keeps building over time.
        </p>
      </>
    )
  },
  {
    question: 'Do you work with clients outside the UK?',
    answer: (
      <>
        <p className="mb-4">
          Yes. Veritavo AI works worldwide, including the UK, Europe, the USA, Australia, and the Middle East.
        </p>
        <p>
          All services and calls can be done online.
        </p>
      </>
    )
  },
  {
    question: 'Can I change or upgrade my plan later?',
    answer: 'Yes, you can upgrade, downgrade, or add new services anytime. We\'ll adjust your payments automatically and keep everything running smoothly.'
  },
  {
    question: 'How is AI used in your services?',
    answer: (
      <>
        <p className="mb-4">We use AI to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Find what's working (and what's not) on your website</li>
          <li>Automate your replies and followups</li>
          <li>Help you rank higher on Google</li>
          <li>Give you simple reports showing real progress</li>
        </ul>
        <p>
          AI helps us work smarter so your business grows faster.
        </p>
      </>
    )
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                <HelpCircle className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about Veritavo AI services, pricing, and how we help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-2 border-gray-200 rounded-lg px-6 hover:border-blue-500 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {index + 1}. {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                  {typeof faq.answer === 'string' ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help. Get in touch and we'll answer any questions you have about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8"
              asChild
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8"
              asChild
            >
              <Link href="/products">
                View Our Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
