import { ContentWrapper } from "@/components/content-wrapper"

export function Footer() {
  
  return (
    <footer className="bg-muted py-8">
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
    </footer>
  )
}