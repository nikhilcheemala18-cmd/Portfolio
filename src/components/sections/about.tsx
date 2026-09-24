import { ArrowRight, Brain, Code2, Download, Layers3, MapPin } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const aboutProfile = {
  name: "Nikhil Cheemala",
  role: "Backend & Generative AI Engineer",
  location: "Hyderabad, India",
  imageSrc: null as string | null,
  resumeHref: "",
};

const focusAreas = [
  {
    title: "Backend Development",
    description: "Scalable & Reliable",
    icon: Code2,
  },
  {
    title: "Generative AI",
    description: "LLMs & RAG",
    icon: Brain,
  },
  {
    title: "Full Stack Projects",
    description: "End-to-End Solutions",
    icon: Layers3,
  },
];

export function About() {
  const hasResume = Boolean(aboutProfile.resumeHref);

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-16 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:px-8 md:py-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-12">
        <ProfilePortraitPanel />

        <div className="relative">
          <div className="mb-5 flex items-center gap-5">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              About Me
            </p>
            <div className="h-px flex-1 bg-[linear-gradient(90deg,rgb(56_189_248/0.75),rgb(255_255_255/0.12),transparent)]" />
          </div>

          <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-normal text-balance text-foreground md:text-[2.8rem] lg:text-[3.15rem]">
            I build scalable backend systems and{" "}
            <span className="text-primary">AI-powered products.</span>
          </h2>

          <div className="mt-5 max-w-2xl space-y-3 text-[0.98rem] leading-7 text-muted-foreground">
            <p>
              I&apos;m a Computer Science engineer focused on backend systems,
              Generative AI, and full-stack products that feel useful in the real
              world.
            </p>
            <p>
              I enjoy turning complex ideas into practical software: APIs,
              databases, LLM-powered workflows, RAG systems, and product
              experiences that can scale beyond a quick demo.
            </p>
            <p>
              Right now, I&apos;m looking forward to building stronger AI
              applications where backend engineering, retrieval, orchestration,
              and real user workflows come together.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group flex items-center gap-3 border-l border-white/[0.09] pl-3 transition-colors hover:border-primary/50"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-secondary/55 text-primary shadow-sm shadow-black/20 transition-colors group-hover:border-primary/35 group-hover:bg-primary/10">
                    <Icon className="size-[1.125rem]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold leading-5 text-foreground">
                      {area.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                      {area.description}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              <ArrowRight className="size-4" aria-hidden="true" />
              View My Work
            </a>
            {hasResume ? (
              <a
                href={aboutProfile.resumeHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto"
                )}
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Add your resume file path to aboutProfile.resumeHref when ready."
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full cursor-not-allowed opacity-60 sm:w-auto"
                )}
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfilePortraitPanel() {
  return (
    <figure className="relative mx-auto w-full max-w-[31rem] overflow-hidden rounded-xl border border-white/[0.09] bg-[#090909] shadow-2xl shadow-black/45 lg:mx-0">
      <div className="relative aspect-[0.78] min-h-[24rem] overflow-hidden">
        {aboutProfile.imageSrc ? (
          <Image
            src={aboutProfile.imageSrc}
            alt={`Portrait of ${aboutProfile.name}`}
            fill
            sizes="(min-width: 1024px) 34rem, 100vw"
            className="object-cover object-center"
          />
        ) : (
          <div
            aria-label={`Portrait placeholder for ${aboutProfile.name}`}
            className="relative h-full w-full bg-[radial-gradient(circle_at_64%_28%,rgb(56_189_248/0.18),transparent_26%),linear-gradient(145deg,#111827_0%,#090b0f_46%,#050505_100%)]"
            role="img"
          >
            <div className="absolute inset-x-10 top-10 h-px bg-[linear-gradient(90deg,transparent,rgb(56_189_248/0.65),transparent)]" />
            <div className="absolute left-1/2 top-[23%] h-20 w-20 -translate-x-1/2 rounded-full border border-primary/22 bg-white/[0.035] shadow-[0_0_50px_rgb(56_189_248/0.12)]" />
            <div className="absolute bottom-[24%] left-1/2 h-48 w-56 -translate-x-1/2 rounded-t-[42%] border border-primary/16 bg-[linear-gradient(180deg,rgb(255_255_255/0.045),rgb(56_189_248/0.045)_48%,rgb(0_0_0/0.2))]" />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-[linear-gradient(180deg,transparent,rgb(5_5_5/0.86))]" />
          </div>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgb(5_5_5/0.86)_100%)]" />
        <figcaption className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-4xl">
            Nikhil
            <span className="block text-primary">Cheemala</span>
          </h3>
          <p className="mt-3 text-sm text-[#dce5ee] md:text-base">{aboutProfile.role}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {aboutProfile.location}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
