'use client'

import { useEffect } from 'react'
import Header from '@/components/header'

export default function WebsiteScanPage() {
  useEffect(() => {
    window.location.href = 'https://veritavo.ai/home'
  }, [])
  
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to booking page...</p>
        </div>
      </div>
    </>
  )
}
