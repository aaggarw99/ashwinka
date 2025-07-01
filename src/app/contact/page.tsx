import ContactSection from "../../components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities, collaborations, and interesting conversations.
          </p>
        </div>
        <ContactSection />
      </div>
    </main>
  );
}
