"use client"

import { ContentWrapper } from "@/components/content-wrapper"
import { useState } from "react"
import { Music } from "lucide-react"

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <>
      <footer className="bg-muted py-8 relative">
        <ContentWrapper>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-red-500 text-xl">✶</span>
              <span className="text-red-500 text-xl">✶</span>
              <span className="text-red-500 text-xl">✶</span>
              <span className="text-red-500 text-xl">✶</span>
            </div>

            <div className="text-center space-y-2">
              <p className="font-sans text-foreground font-medium">{`{ Ashwin Aggarwal }`}</p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ashwin Aggarwal. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">I sometimes take on one-off web contracts, drop me an email if you&apos;d like to collaborate!</p>
            </div>
          </div>
        </ContentWrapper>
        
        {/* Music Icon Easter Egg */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-6 right-6 p-3 bg-accent/10 hover:bg-accent/20 rounded-full transition-all duration-300 ease-in-out cursor-pointer z-40"
          aria-label="Play music"
        >
          <div className="flex items-end gap-1 h-4">
            <div 
              className="w-1 bg-accent rounded-full origin-bottom"
              style={{ 
                height: '16px',
                animation: 'equalizer 1s ease-in-out infinite',
                animationDelay: '0ms'
              }}
            ></div>
            <div 
              className="w-1 bg-accent rounded-full origin-bottom"
              style={{ 
                height: '16px',
                animation: 'equalizer 1s ease-in-out infinite',
                animationDelay: '150ms'
              }}
            ></div>
            <div 
              className="w-1 bg-accent rounded-full origin-bottom"
              style={{ 
                height: '16px',
                animation: 'equalizer 1s ease-in-out infinite',
                animationDelay: '300ms'
              }}
            ></div>
            <div 
              className="w-1 bg-accent rounded-full origin-bottom"
              style={{ 
                height: '16px',
                animation: 'equalizer 1s ease-in-out infinite',
                animationDelay: '450ms'
              }}
            ></div>
          </div>
        </button>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-background rounded-lg p-6 max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">what ashwin is listening to rn</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/65DbTqJKhbwqYbZ1Okr0rc?utm_source=generator"
              width="100%"
              height="256"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}