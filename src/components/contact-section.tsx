import { Linkedin, Github, FileText } from "lucide-react"
import { ContentWrapper } from "@/components/content-wrapper"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <ContentWrapper>
        <div className="text-center">
          <h2 className="text-4xl font-sans mb-12 text-balance">Let's Connect</h2>
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://linkedin.com/in/aaggarw99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-muted hover:bg-accent/10 transition-all duration-300 ease-in-out group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/aaggarw99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-muted hover:bg-accent/10 transition-all duration-300 ease-in-out group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-muted hover:bg-accent/10 transition-all duration-300 ease-in-out group"
            >
              <FileText className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}
