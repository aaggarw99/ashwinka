import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContentWrapper } from "@/components/content-wrapper"

const experiences = [
  {
    title: "Software Engineer",
    company: "Waymo",
    period: "September 2025 - Present",
    description:
      "Software Engineer at Waymo on the Simulation Realism team, working to enhance the fidelity of virtual environments and vehicle behavior models to better reflect real-world driving scenarios.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"],
    logo: "/waymo-logo.png",
  },
  {
    title: "Software Engineer",
    company: "Salesforce • Health Cloud",
    period: "July 2023 - August 2025",
    description:
      "Led full-stack development of Intelligent Appointment Management, architected GenAI products, and built FHIR-compliant middleware for EHR integration.",
    technologies: ["JS", "Java", "TypeScript", "LWC", "Splunk", "Argus"],
    logo: "/salesforce-logo.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Salesforce • Marketing Cloud",
    period: "May 2021 - Aug 2022",
    description:
      "Developed anomaly detectors, automated feedback software, and data pipelines for release health monitoring.",
    technologies: ["Python", "Pandas", "Prophet", "NumPy", "PyTorch", "Splunk"],
    logo: "/salesforce-logo.png",
  },
  {
    title: "Software Engineer Intern",
    company: "CodeHS",
    period: "Jun 2020 - Nov 2020",
    description: "Built UI components, dashboards, and backend upgrades for quiz features and student analytics.",
    technologies: ["Python", "JS", "Django", "Ajax", "Figma"],
    logo: "/codehs-logo.png",
  }
]

export function WorkExperience() {
  return (
    <section id="work" className="py-20">
      <ContentWrapper>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-sans text-balance whitespace-nowrap">Work Experience</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl font-sans">{exp.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{exp.period}</CardDescription>
                    </div>
                    <CardDescription className="text-base font-medium text-accent">{exp.company}</CardDescription>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      className="h-10 w-auto object-contain opacity-80"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-700 rounded-full px-3 py-1 font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentWrapper>
    </section>
  )
}
