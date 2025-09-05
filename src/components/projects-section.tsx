"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ContentWrapper } from "@/components/content-wrapper"

const projects = [
  {
    title: "Fantasy Valorant",
    description:
      "Developed a full-stack fantasy Valorant league platform with Django, PostgreSQL, and AWS, featuring custom scoring from scraped pro-match data, predictive modeling with scikit-learn, real-time visualizations, and automated roster/leaderboard updates.",
    image: "/analytics-dashboard.png",
    technologies: ["Python", "JavaScript", "TypeScript", "Django", "AWS", "PostgreSQL"],
    liveLink: "#",
    githubLink: "https://github.com/aaggarw99/fantasyvalorant",
  },
  {
    title: "Sweat Sensor BLE Android App",
    description:
        "Android app that connects to a custom sweat-salt sensing board, streaming real-time data to track sweat rate and hydration status, with visualization and logging for performance monitoring.",
      image: "/custom-circuit-board-hardware.jpg",
    technologies: ["Java", "Android Studio", "BLE", "Arduino", "Firebase"],
    githubLink: "https://github.com/aaggarw99/sweatsensorapp",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 bg-card">
      <ContentWrapper>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-sans text-balance whitespace-nowrap">Side Projects</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background border-border overflow-hidden hover:shadow-lg transition-shadow pt-0">
              <div className="aspect-[16/9] bg-muted h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-sans text-balance mb-2">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveLink && project.liveLink !== "#" && (
                      <Button 
                        size="sm" 
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentWrapper>
    </section>
  )
}
