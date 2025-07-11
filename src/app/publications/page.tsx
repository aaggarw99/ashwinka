import PublicationCard from "../../components/PublicationCard";
import { getPublicationsSync } from "../../lib/content";
import { Button } from "../../components/ui/button";
import { ExternalLink, User, GraduationCap } from "lucide-react";

export default function PublicationsPage() {
  const publications = getPublicationsSync();

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Publications
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Research in wearable biometric sensors and materials engineering.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center max-w-4xl mx-auto">
          {publications.map((publication) => (
            <PublicationCard key={publication.title} publication={publication} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Professional Profiles
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              variant="outline" 
              className="flex items-center gap-2 px-6 py-3"
            >
              <a 
                href="https://orcid.org/0000-0001-8767-1402" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <User className="w-4 h-4" />
                ORCID Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="flex items-center gap-2 px-6 py-3"
            >
              <a 
                href="https://bsac.berkeley.edu/people/ashwin-aggarwal" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GraduationCap className="w-4 h-4" />
                BSAC Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
