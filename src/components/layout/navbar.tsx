import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Profiles", href: "#profiles" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#builders-lab" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-background/78 backdrop-blur-xl shadow-sm shadow-black/10">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <Link
          href="#hero"
          className="text-sm font-semibold tracking-normal text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
        >
          Nikhil Cheemala
        </Link>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-1 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
