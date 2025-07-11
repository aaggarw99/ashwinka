import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  context: string;
  year: number;
  views: number;
  url: string;
  authorPosition: string;
}

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card className="w-full max-w-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-slate-900 line-clamp-2">
            <a 
              href={publication.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-start gap-1 group"
            >
              {publication.title}
              <ExternalLink className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {publication.year}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {publication.authorPosition}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {publication.context}
        </p>
        <div className="flex items-center text-xs text-gray-500">
          <span>{publication.views.toLocaleString()} views</span>
        </div>
      </CardContent>
    </Card>
  );
}
