import { GraduationCap, MapPin } from "lucide-react"
import { ContentWrapper } from "@/components/content-wrapper"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-card flex items-start justify-center pt-[25vh]">
      <ContentWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-0 text-left">
              <h1 className="text-6xl md:text-8xl font-sans text-balance leading-tight">Ashwin</h1>
              <h1 className="text-6xl md:text-8xl font-sans text-balance leading-tight">Aggarwal</h1>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-32 h-32 bg-muted rounded-full flex-shrink-0">
                <img
                  src="/headshot_closeup.png"
                  alt="Ashwin Aggarwal"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground font-sans">Software Engineer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Passionate about building & innovating with software.
                </p>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Waymo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    <span>M.S. & B.A. EECS, UC Berkeley</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Empty for now, could add additional content later */}
          <div className="hidden lg:block"></div>
        </div>
      </ContentWrapper>
    </section>
  )
}
