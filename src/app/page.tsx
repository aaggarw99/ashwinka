import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WorkExperience } from "@/components/work-experience"
import { ResearchSection } from "@/components/research-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
/* Added footer import */
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkExperience />
      <ResearchSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
