import PublicationCard from "../../components/PublicationCard";
import { getPublicationsSync } from "../../lib/content";

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
            Research and articles on technology, engineering, and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.title} publication={publication} />
          ))}
        </div>
      </div>
    </main>
  );
}
