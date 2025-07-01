import RepoCard from "../../components/RepoCard";
import { getProjectsSync } from "../../lib/content";

export default function ProjectsPage() {
  const projects = getProjectsSync();

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            GitHub Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Open source projects and tools I&apos;ve built and contributed to.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <RepoCard key={project.name} repository={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
