import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Publication {
  title: string;
  context: string;
  year: number;
  views: number;
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
            {publication.title}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {publication.year}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
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
