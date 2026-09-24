import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";

const preferredTickerItems = [
  "Python",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "FastAPI",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git",
  "RAG",
  "Generative AI",
  "LLMs",
  "AI Agents",
];

const skillNames = new Set(
  skillGroups.flatMap((group) => [
    group.title,
    ...group.skills.map((skill) => skill.name),
  ])
);

const projectTechnologyNames = new Set(
  projects.flatMap((project) => [project.category, ...project.technologies])
);

function isRepresentedInPortfolio(item: string) {
  if (skillNames.has(item) || projectTechnologyNames.has(item)) {
    return true;
  }

  if (item === "RAG") {
    return [...skillNames, ...projectTechnologyNames].some((name) =>
      name.includes("RAG")
    );
  }

  if (item === "AI Agents") {
    return [...skillNames, ...projectTechnologyNames].some(
      (name) => name.includes("Agent") || name.includes("Agentic")
    );
  }

  return false;
}

const tickerItems = preferredTickerItems.filter(isRepresentedInPortfolio);

export function TechTicker() {
  return (
    <div
      className="tech-ticker relative overflow-hidden py-4"
      aria-label="Technology ticker"
    >
      <p className="sr-only">Technology stack: {tickerItems.join(", ")}</p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28" />

      <div
        className="ticker-track flex w-max items-center whitespace-nowrap"
        aria-hidden="true"
      >
        <TickerSequence items={tickerItems} />
        <TickerSequence items={tickerItems} ariaHidden />
      </div>

      <style>{`
        .ticker-track {
          animation: tech-ticker-scroll 34s linear infinite;
        }

        .tech-ticker:hover .ticker-track {
          animation-play-state: paused;
        }

        @keyframes tech-ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
            width: 100%;
            transform: none;
          }

          .ticker-sequence {
            flex-wrap: wrap;
            white-space: normal;
          }

          .ticker-sequence[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

function TickerSequence({
  items,
  ariaHidden,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="ticker-sequence flex shrink-0 items-center gap-12 pr-12 font-heading text-sm font-medium tracking-normal text-[#cfd6df]/86 md:gap-16 md:pr-16 md:text-base"
      aria-hidden={ariaHidden}
    >
      {items.map((item) => (
        <span
          key={item}
          className="transition-colors duration-200 hover:text-primary"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
