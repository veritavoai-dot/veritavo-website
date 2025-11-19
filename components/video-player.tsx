
'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, X, Maximize2, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'

const VideoPlayer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null)

  const handleSmallVideoClick = () => {
    setIsFullscreen(true)
    setIsMuted(false)
    // Start playing the fullscreen video
    setTimeout(() => {
      if (fullscreenVideoRef.current) {
        fullscreenVideoRef.current.play()
        setIsPlaying(true)
      }
    }, 100)
  }

  const handleClose = () => {
    setIsFullscreen(false)
    setIsMuted(true)
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause()
    }
    // Resume small video
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const togglePlayPause = () => {
    if (fullscreenVideoRef.current) {
      if (isPlaying) {
        fullscreenVideoRef.current.pause()
      } else {
        fullscreenVideoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    // Auto-play small video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error)
      })
    }
  }, [])

  return (
    <>
      {/* Small Video Box */}
      <div 
        className="relative w-full max-w-md mx-auto cursor-pointer group"
        onClick={handleSmallVideoClick}
      >
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border-4 border-blue-600">
          <video
            ref={videoRef}
            src="/assets/veritavo-promo-video.mp4"
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Play overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4">
              <Maximize2 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>
        <p className="text-center mt-2 text-sm text-gray-600">
          Click to watch with sound
        </p>
      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <Button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3"
              size="icon"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Video Container */}
            <div className="relative w-full max-w-6xl">
              <video
                ref={fullscreenVideoRef}
                src="/assets/veritavo-promo-video.mp4"
                loop
                muted={isMuted}
                playsInline
                className="w-full rounded-lg shadow-2xl"
              />

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-center space-x-4">
                  {/* Play/Pause Button */}
                  <Button
                    onClick={togglePlayPause}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4"
                    size="icon"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>

                  {/* Mute/Unmute Button */}
                  <Button
                    onClick={toggleMute}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4"
                    size="icon"
                  >
                    {isMuted ? (
                      <VolumeX className="h-6 w-6" />
                    ) : (
                      <Volume2 className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VideoPlayer
