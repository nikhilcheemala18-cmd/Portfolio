import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import { SectionContainer } from "@/components/sections/section-container";
import { buttonVariants } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    value: "nikhilcheemala00@gmail.com",
    href: "mailto:nikhilcheemala00@gmail.com",
    icon: Mail,
    prominent: true,
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
                className={
                  item.prominent
                    ? buttonVariants({
                        size: "lg",
                        className:
                          "w-full justify-between px-4 text-base sm:w-auto sm:min-w-96",
                      })
                    : "group flex items-center justify-between gap-4 rounded-xl px-1 py-3 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
                }
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon
                    className={item.prominent ? "size-5" : "size-4 text-primary"}
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block truncate font-medium">
                      {item.value}
                    </span>
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
