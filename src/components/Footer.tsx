import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] py-8 px-4 flex flex-col items-center gap-4 mt-16">
      <div className="flex gap-6 flex-wrap justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-600 hover:text-primary text-sm transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="text-xs text-gray-400">© Ashwin Aggarwal 2025</div>
    </footer>
  );
}
