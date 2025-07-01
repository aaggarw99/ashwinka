import { Button } from "./ui/button";

interface CardGridProps {
  title: string;
  description: string;
  children: React.ReactNode;
  viewAllHref?: string;
  viewAllText?: string;
  background?: "light" | "white";
}

export default function CardGrid({ 
  title, 
  description, 
  children, 
  viewAllHref, 
  viewAllText = "View All",
  background = "white"
}: CardGridProps) {
  const bgClass = background === "light" ? "bg-gray-50" : "bg-white";
  
  return (
    <section className={`w-full py-12 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {children}
        </div>
        
        {viewAllHref && (
          <div className="text-center">
            <Button asChild variant="outline">
              <a href={viewAllHref}>{viewAllText}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
