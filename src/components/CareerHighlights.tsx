import { Code } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: <Image src="/salesforce-logo.png" alt="Salesforce" width={32} height={24} className="object-contain" />,
    title: "Salesforce, Health Cloud",
    subtitle: "Software Engineer MTS (2023—Present)",
    description: "Led full-stack development of Intelligent Appointment Management, architected GenAI products, and built FHIR-compliant middleware for EHR integration.",
  },
  {
    icon: <Image src="/salesforce-logo.png" alt="Salesforce" width={32} height={24} className="object-contain" />,
    title: "Salesforce, Marketing Cloud",
    subtitle: "Software Engineering Intern (2021, 2022)",
    description: "Developed anomaly detectors, automated feedback software, and data pipelines for release health monitoring.",
  },
  {
    icon: <Image src="/codehs-logo.png" alt="CodeHS" width={24} height={24} className="object-contain" />,
    title: "CodeHS",
    subtitle: "Software Engineering Intern (2020)",
    description: "Built UI components, dashboards, and backend upgrades for quiz features and student analytics.",
  },
  {
    icon: <Image src="/uchicago-logo.png" alt="University of Chicago" width={24} height={24} className="object-contain" />,
    title: "University of Chicago",
    subtitle: "Researcher (2017—2019)",
    description: "Conducted research in computational biology and data analysis, contributing to scientific publications and academic projects.",
  },
  {
    icon: <Code className="w-6 h-6 text-green-600" />,
    title: "Fantasy Valorant",
    subtitle: "Personal Project (2022—Present)",
    description: "Built a full-stack fantasy esports site with Django, PostgreSQL, and scikit-learn for match prediction.",
  },
  {
    icon: <Image src="/berkeley-logo.png" alt="UC Berkeley" width={24} height={24} className="object-contain" />,
    title: "UC Berkeley",
    subtitle: "M.S. EECS '23, B.A. CS '22",
    description: "Javey Lab; Data Structures, LLMs, NLP, Deep RL.",
  },
];

export default function CareerHighlights() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Career Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-lg shadow">
              {item.icon}
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <div className="text-sm text-gray-500 mb-1">{item.subtitle}</div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 