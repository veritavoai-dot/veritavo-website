
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 -ml-4">
              <div className="relative h-36 w-[650px]">
                <Image
                  src="/assets/veritavo-ai-logo-footer.png"
                  alt="Veritavo AI - Company Information"
                  fill
                  className="object-contain object-left filter brightness-0 invert"
                  data-testid="footer-logo"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm max-w-md mb-6">
              Transform your financial services with cutting-edge AI automation. 
              We help finance, accounting, and mortgage companies streamline operations 
              and scale efficiently.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <Link 
                href="https://youtube.com/@veritavoai?si=EtcZ6Rn4z7BAY8QO" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-2.5 rounded-full transition-colors duration-200"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=61550831964243" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2.5 rounded-full transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/veritavoai" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-2.5 rounded-full transition-colors duration-200"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/anthony-wilson-1969a92a1" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-700 p-2.5 rounded-full transition-colors duration-200"
                aria-label="Visit our LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:support@veritavo.com" className="text-gray-300 hover:text-white transition-colors block">
                  support@veritavo.com
                </a>
              </li>
              <li>
                <a href="tel:+447378444798" className="text-gray-300 hover:text-white transition-colors block">
                  +44 7378 444798
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=72+Lynton+Rd,+Chesham+HP5+2BS" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  72 Lynton Rd, Chesham<br />HP5 2BS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Veritavo AI. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              Professional AI automation for financial services
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
