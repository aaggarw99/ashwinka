"use client"

import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContentWrapper } from "@/components/content-wrapper"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide navbar when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Account for fixed navbar
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 py-16 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <ContentWrapper>
        <nav className="bg-primary/95 backdrop-blur-sm border border-border rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg w-fit mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('hero')}
              className="text-primary-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 ease-in-out rounded-full px-2 sm:px-4 py-1 sm:py-2 cursor-pointer"
            >
              <Home className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('work')}
              className="text-primary-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 ease-in-out rounded-full px-2 sm:px-4 py-1 sm:py-2 cursor-pointer text-xs sm:text-sm"
            >
              Work
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('research')}
              className="text-primary-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 ease-in-out rounded-full px-2 sm:px-4 py-1 sm:py-2 cursor-pointer text-xs sm:text-sm"
            >
              Research
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('contact')}
              className="text-primary-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 ease-in-out rounded-full px-2 sm:px-4 py-1 sm:py-2 cursor-pointer text-xs sm:text-sm"
            >
              Contact
            </Button>
          </div>
        </nav>
      </ContentWrapper>
    </div>
  )
}
