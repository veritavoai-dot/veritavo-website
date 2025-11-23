
'use client'

import { useState } from 'react'
import { HelpCircle } from 'lucide-react'

interface MobileTooltipProps {
  content: string
}

export default function MobileTooltip({ content }: MobileTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleTooltip = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleTooltip}
        className="inline-flex items-center justify-center touch-manipulation"
        aria-label="More information"
        type="button"
      >
        <HelpCircle className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop - tap to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Tooltip content */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-64 sm:w-80 bg-white border-2 border-blue-200 rounded-lg shadow-xl p-4">
            <p className="text-sm text-gray-700">{content}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 border-8 border-transparent border-t-blue-200" />
          </div>
        </>
      )}
    </div>
  )
}
