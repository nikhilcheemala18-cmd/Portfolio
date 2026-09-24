"use client";

import {
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import { HeroParticles } from "@/components/sections/hero-particles";
import { HeroPortraitComposition } from "@/components/sections/hero-portrait-composition";
import { buttonVariants } from "@/components/ui/button";
import { codingProfiles } from "@/data/profiles";
import { projects } from "@/data/projects";

const leetcodeProfile = codingProfiles.find(
  (profile) => profile.platform === "leetcode"
);

const heroMetrics = [
  {
    value: String(projects.length),
    label: "Projects Built",
  },
  {
    value: leetcodeProfile?.problemsSolved ?? "TBD",
    label: "Problems Solved",
  },
  {
    value: leetcodeProfile?.contestsAttended ?? "TBD",
    label: "Contests Attended",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.08),transparent_24rem),radial-gradient(circle_at_78%_22%,rgba(139,92,246,0.07),transparent_22rem)]" />
      <HeroParticles />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-18 md:px-8 md:py-26 lg:grid-cols-[1fr_0.95fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary">
            Nikhil Cheemala
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-normal text-balance md:text-6xl">
            Backend, full-stack, and{" "}
            <span className="text-primary">GenAI systems</span> engineer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#cfd6df] md:text-xl md:leading-9">
            I build reliable backend systems, full-stack applications, and
            AI-powered products across APIs, databases, RAG pipelines,
            LLM-powered workflows, and agentic systems.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#cdd5df]">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Hyderabad, India
          </p>
          <dl className="mt-6 flex flex-wrap items-start gap-x-7 gap-y-3">
            {heroMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="hero-metric-reveal"
                style={{ animationDelay: `${140 + index * 90}ms` }}
              >
                <dt className="font-heading text-2xl font-semibold leading-none tracking-normal text-amber-400 tabular-nums drop-shadow-[0_0_18px_rgba(245,158,11,0.14)] md:text-3xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-normal text-muted-foreground">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>
              View Projects <ArrowRight />
            </a>
            <a
              href="#profiles"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              GitHub / Profiles <SiGithub />
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              Contact <Mail />
            </a>
          </div>
        </div>

        <HeroPortraitComposition
          imageSrc="/images/nikhil-hero-cinematic.png"
          imageAspect="landscape"
        />
      </div>
      <style>{`
        .hero-metric-reveal {
          opacity: 0;
          animation: hero-metric-reveal 560ms ease-out forwards;
        }

        @keyframes hero-metric-reveal {
          from {
            opacity: 0;
            transform: translateY(0.35rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-metric-reveal {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
