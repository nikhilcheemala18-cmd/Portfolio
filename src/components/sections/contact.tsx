import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import { SectionContainer } from "@/components/sections/section-container";

const contactLinks = [
  {
    label: "Email",
    value: "nikhilcheemala00@gmail.com",
    href: "mailto:nikhilcheemala00@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "nikhil-cheemala-18rcb",
    href: "https://www.linkedin.com/in/nikhil-cheemala-18rcb",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "nikhilcheemala18-cmd",
    href: "https://github.com/nikhilcheemala18-cmd",
    icon: SiGithub,
  },
];

export function Contact() {
  return (
    <SectionContainer
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Have an opportunity, project, or interesting problem to discuss?"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-normal text-primary">
            Nikhil Cheemala
          </p>
          <p className="max-w-xl font-heading text-2xl font-semibold leading-snug text-[#dbeafe] md:text-3xl">
            Backend & Generative AI Engineer
          </p>
        </div>

        <div className="space-y-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-secondary/18 px-4 py-3.5 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-secondary/30 hover:text-foreground hover:shadow-lg hover:shadow-cyan-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-background/35 text-primary transition-colors group-hover:border-primary/25 group-hover:bg-primary/10">
                  <Icon
                    className="size-4"
                    aria-hidden="true"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="block truncate text-sm font-semibold text-[#dbeafe] sm:text-base">
                    {item.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
