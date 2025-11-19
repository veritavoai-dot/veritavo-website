'use client'

import { useEffect, useState } from 'react'

export default function DraggableChatWidget() {
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    // Wait for GoHighLevel widget to load
    const checkWidget = setInterval(() => {
      const chatWidget = document.querySelector('iframe[id*="chat-widget"]')?.parentElement?.parentElement
      
      if (chatWidget && chatWidget instanceof HTMLElement) {
        clearInterval(checkWidget)
        
        // Make the widget draggable
        let isDragging = false
        let startX = 0
        let startY = 0
        let initialX = 0
        let initialY = 0

        const onMouseDown = (e: MouseEvent) => {
          // Only allow dragging from the top part of the widget
          const rect = chatWidget.getBoundingClientRect()
          if (e.clientY - rect.top < 60) {
            isDragging = true
            startX = e.clientX
            startY = e.clientY
            
            const transform = window.getComputedStyle(chatWidget).transform
            if (transform && transform !== 'none') {
              const matrix = new DOMMatrix(transform)
              initialX = matrix.m41
              initialY = matrix.m42
            } else {
              initialX = 0
              initialY = 0
            }
            
            chatWidget.style.cursor = 'grabbing'
          }
        }

        const onMouseMove = (e: MouseEvent) => {
          if (!isDragging) return
          
          const deltaX = e.clientX - startX
          const deltaY = e.clientY - startY
          
          chatWidget.style.transform = `translate(${initialX + deltaX}px, ${initialY + deltaY}px)`
          chatWidget.style.transition = 'none'
        }

        const onMouseUp = () => {
          if (isDragging) {
            isDragging = false
            chatWidget.style.cursor = 'grab'
          }
        }

        chatWidget.style.cursor = 'grab'
        chatWidget.addEventListener('mousedown', onMouseDown as any)
        document.addEventListener('mousemove', onMouseMove as any)
        document.addEventListener('mouseup', onMouseUp)

        // Show hint for 5 seconds
        setShowHint(true)
        setTimeout(() => setShowHint(false), 5000)

        return () => {
          chatWidget.removeEventListener('mousedown', onMouseDown as any)
          document.removeEventListener('mousemove', onMouseMove as any)
          document.removeEventListener('mouseup', onMouseUp)
        }
      }
    }, 500)

    // Clear interval after 10 seconds if widget not found
    setTimeout(() => clearInterval(checkWidget), 10000)

    return () => clearInterval(checkWidget)
  }, [])

  return (
    <>
      {showHint && (
        <div className="fixed bottom-24 right-6 z-[9999] bg-blue-600 text-white px-4 py-3 rounded-lg shadow-2xl animate-bounce">
          <p className="text-sm font-semibold">💬 Tip: You can drag the chat box!</p>
        </div>
      )}
    </>
  )
}
