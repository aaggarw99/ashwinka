import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContentWrapper } from "@/components/content-wrapper"

const research = [
  {
    title: "Graduate Researcher @ Berkeley",
    lab: "Javey Lab",
    labUrl: "https://nano.eecs.berkeley.edu/",
    period: "2021 - 2023",
    description:
      "Conducted research in wearable biosensor technology, focusing on sweat rate monitoring and hydration status analysis.",
    publications: [
      {
        title: "Wearable Humidity Sensor for Continuous Sweat Rate Monitoring",
        venue: "Advanced Materials Technologies",
        year: "2023",
        views: "1,400",
        link: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/admt.202201187"
      },
      {
        title: "Tape-Free, Digital Wearable Band for Exercise Sweat Rate Monitoring", 
        venue: "Advanced Materials Technologies",
        year: "2023",
        views: "2,300",
        link: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/admt.202300385"
      }
    ],
    technologies: ["Python", "Java", "Android Studio", "pandas", "numpy", "Bluetooth Low Energy", "Chip Design", "Arduino"],
    logo: "/berkeley-logo.png",
  },
  {
    title: "Undergraduate Researcher @ UChicago",
    lab: "Knowledge Lab",
    labUrl: "https://knowledgelab.org/",
    period: "2017 - 2019", 
    description:
      "Researched geo-spatial relationships between paper authorship references and physical locations of the authors. Analyzed AWS spot-instance pricing trends. Contributed to matminter, open-source python library for material science data analysis.",
    technologies: ["Python", "pandas", "numpy", "AWS", "matplotlib", "matminer"],
    logo: "/uchicago-logo.png",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="pb-20 bg-background">
      <ContentWrapper>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-sans text-balance whitespace-nowrap">Research Experience</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <div className="space-y-6">
          {research.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl font-sans">{item.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{item.period}</CardDescription>
                    </div>
                    <CardDescription className="text-base font-medium text-accent">
                      <a 
                        href={item.labUrl || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                      >
                        {item.lab}
                        <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </CardDescription>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.lab} logo`}
                      className="h-10 w-auto object-contain opacity-80"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 leading-relaxed">{item.description}</p>
                
                {/* Publications Section */}
                {item.publications && item.publications.length > 0 && (
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg border border-border/50">
                    <h4 className="text-md font-medium text-foreground mb-3">Publications:</h4>
                    <div className="space-y-3">
                      {item.publications.map((pub, pubIndex) => (
                        <div key={pubIndex} className="text-sm">
                          <p className="font-medium text-foreground">
                            <a 
                              href={pub.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-accent hover:underline transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                            >
                              {pub.title}
                              <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </p>
                          <p className="text-muted-foreground">{pub.venue} • {pub.year} • {pub.views} views</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Section */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
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
