import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="w-full flex justify-end items-center py-6 px-4 gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-medium text-base text-gray-800 hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
