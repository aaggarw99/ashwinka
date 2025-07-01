const aboutData = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#1e293b"/><path d="M10 22v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="14" r="4" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: "Developer",
    desc: "I love building software and solving real-world problems."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#1e293b"/><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Sports Enthusiast",
    desc: "Passionate about playing and following sports, always up for a game."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#1e293b"/><path d="M10 22l6-12 6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Travel Lover",
    desc: "Exploring new places and cultures inspires my creativity."
  }
];

export default function AboutCards() {
  return (
    <section id="about" className="w-full flex flex-col items-center py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-navy-900">About Me</h2>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">
        {aboutData.map((card) => (
          <div key={card.title} className="flex flex-col items-center bg-white rounded-xl shadow-sm p-6 gap-3 w-full md:w-1/3">
            <div>{card.icon}</div>
            <div className="text-lg font-bold text-navy-900">{card.title}</div>
            <div className="text-gray-600 text-sm text-center">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
