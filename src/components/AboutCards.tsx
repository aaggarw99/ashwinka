import { Briefcase, GraduationCap, Bike, Globe, Code } from "lucide-react";

const aboutData = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-700" />,
    title: "Berkeley Grad",
    desc: (
      <div className="text-center">
        <div className="font-bold">M.S. EECS '23</div>
        <div className="font-bold">B.A. Computer Science '22</div>
      </div>
    )
  },
  {
    icon: <Briefcase className="w-8 h-8 text-green-700" />,
    title: "Software Engineer",
    desc: "Agentic and Full-Stack Engineer at Salesforce Health Cloud"
  },
  {
    icon: <Code className="w-8 h-8 text-purple-700" />,
    title: "Builder & Researcher",
    desc: "Interned at Salesforce Marketing Cloud, CodeHS, and UChicago Research, and Berkeley Research."
  },
  {
    icon: <Bike className="w-8 h-8 text-orange-600" />,
    title: "Cyclist & Sports Fan",
    desc: "Passionate about cycling, tennis, and following pro sports."
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-700" />,
    title: "Traveler & Explorer",
    desc: "Love exploring new places and cultures for inspiration."
  }
];

export default function AboutCards() {
  return (
    <section id="about" className="w-full flex flex-col items-center py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-navy-900">About Me</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 w-full max-w-5xl justify-center">
        {aboutData.map((card) => (
          <div key={card.title} className="flex flex-col items-center bg-white rounded-xl shadow-sm p-6 gap-3 w-full md:w-1/4 min-w-[220px]">
            <div>{card.icon}</div>
            <div className="text-lg font-bold text-navy-900">{card.title}</div>
            <div className="text-gray-600 text-sm text-center">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
