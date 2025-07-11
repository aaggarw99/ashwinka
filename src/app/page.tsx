import Hero from "../components/Hero";
import AboutCards from "../components/AboutCards";
import CareerHighlights from "../components/CareerHighlights";
import CardGrid from "../components/CardGrid";
import PublicationCard from "../components/PublicationCard";
import RepoCard from "../components/RepoCard";
import { getPublicationsSync, getProjectsSync } from "../lib/content";

export default function Home() {
  const publications = getPublicationsSync().slice(0, 3);
  const projects = getProjectsSync().slice(0, 3);

  return (
    <main>
      <Hero />
      <AboutCards />
      <CareerHighlights />

      <CardGrid 
        title="GitHub Repositories" 
        description="Open source projects and tools I've built and contributed to."
        viewAllHref="/projects"
        viewAllText="View All Projects"
        background="light"
      >
        {projects.map((project) => (
          <RepoCard key={project.name} repository={project} />
        ))}
      </CardGrid>
      
      <CardGrid 
        title="Publications" 
        description="Research and articles on technology, engineering, and innovation."
        viewAllHref="/publications"
        viewAllText="View All Publications"
        background="white"
        centerItems={true}
      >
        {publications.map((publication) => (
          <PublicationCard key={publication.title} publication={publication} />
        ))}
      </CardGrid>

    </main>
  );
}
