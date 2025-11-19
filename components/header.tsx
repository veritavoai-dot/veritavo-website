// Updated: Burger menu now hidden on desktop (lg breakpoint)
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b overflow-x-hidden">
      <div className="w-full px-3 lg:px-6">
        <div className="flex h-20 md:h-28 items-center justify-between gap-2 lg:gap-4">
          {/* Logo - Visible on ALL devices - EXTRA LARGE */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-20 w-[340px] sm:w-[440px] md:h-28 md:w-[520px] lg:w-[480px] xl:w-[560px]">
                <Image
                  src="/assets/veritavo-ai-logo.png"
                  alt="Veritavo AI - Navigate Home"
                  fill
                  className="object-contain object-left"
                  priority
                  data-testid="header-logo"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - ONLY visible on desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3 flex-shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs xl:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap px-1 xl:px-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons - visible on desktop only */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 flex-shrink-0">
            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-xs whitespace-nowrap px-3 h-8"
            >
              <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button - ONLY visible on mobile/tablet (hidden on desktop) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden shrink-0 p-3 md:p-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 md:h-7 md:w-7" strokeWidth={3} />
            ) : (
              <Menu className="h-6 w-6 md:h-7 md:w-7" strokeWidth={3} />
            )}
          </button>
        </div>

        {/* Navigation Menu - Available on ALL screen sizes */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t bg-white py-6 shadow-lg">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 mt-4 border-t px-4">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 w-full text-base py-6"
                >
                  <a href="https://veritavo.ai/home" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    Book Consultation
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 w-full text-base py-6"
                >
                  <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 w-full text-base py-6"
                >
                  <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                    View Pricing
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
