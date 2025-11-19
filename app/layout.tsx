
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Script from 'next/script'
import DraggableChatWidget from '@/components/draggable-chat-widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Veritavo AI - AI Automation for Finance, Accounting & Mortgage',
  description: 'Transform your financial services with cutting-edge AI automation. Streamline operations, reduce costs, and scale efficiently with Veritavo AI.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
          <DraggableChatWidget />
        </ThemeProvider>
        
        {/* GoHighLevel Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6910b8cdd1e01c3266740ebe"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
