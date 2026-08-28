import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Laptop,
  Mail,
  MapPin,
  StickyNote,
  UserRound,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-18 md:px-8 md:py-26 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary">
            BACKEND & GENERATIVE AI ENGINEER
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-normal text-balance md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">Nikhil Cheemala</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c8d4e5] md:text-xl md:leading-9">
            I build backend systems, full-stack applications, and AI-powered
            products with a focus on LLM-powered applications, RAG systems,
            agentic workflows, API development, and production-style backend
            architecture.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            Currently focused on building reliable AI applications that combine
            LLMs, retrieval systems, tool orchestration, backend engineering,
            and real-world application workflows.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#cbd5e1]">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Hyderabad, India
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>
              View Projects <ArrowRight />
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Get in Touch <Mail />
            </a>
            <a
              href="#profiles"
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              GitHub / Profiles <SiGithub />
            </a>
          </div>
        </div>
        <HeroSystemVisual />
      </div>
    </section>
  );
}

function HeroSystemVisual() {
  const goals = [
    "Small Goals",
    "Build Skills",
    "Build Projects",
    "AI Systems",
    "Reliable Products",
  ];

  return (
    <div
      className="relative min-h-[26rem] overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(145deg,rgba(56,189,248,0.12),rgba(16,24,39,0.86)_42%,rgba(8,15,29,0.94))] p-5 shadow-xl shadow-black/24 ring-1 ring-white/[0.03] md:min-h-[31rem]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(59,130,246,0.24),transparent_18rem),radial-gradient(circle_at_80%_82%,rgba(45,212,191,0.14),transparent_16rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.06)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase text-primary">
            Plan -&gt; Build -&gt; Iterate
          </p>
          <p className="mt-1 text-sm font-medium text-[#dbeafe]">
            Career systems in motion
          </p>
        </div>
        <div className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[0.68rem] text-[#bfdbfe]">
          02 scenes
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-5 top-20">
        <div className="absolute inset-0 [animation:journey-plan_9s_ease-in-out_infinite]">
          <div className="absolute inset-x-0 top-0 h-56 rounded-2xl border border-white/10 bg-background/60 p-4 shadow-2xl shadow-black/25 sm:h-64">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="size-2 rounded-full bg-red-400/75" />
              <span className="size-2 rounded-full bg-amber-300/75" />
              <span className="size-2 rounded-full bg-emerald-300/75" />
              <span className="ml-2 font-mono text-[0.65rem] uppercase text-muted-foreground">
                Planning wall
              </span>
            </div>
            <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <div className="space-y-2">
                {goals.slice(0, 3).map((goal, index) => (
                  <GoalNote key={goal} goal={goal} index={index} />
                ))}
              </div>
              <div className="flex h-full flex-col items-center justify-center gap-2 text-primary/70">
                <ArrowDown className="size-4" />
                <ArrowDown className="size-4" />
              </div>
              <div className="space-y-2">
                {goals.slice(3).map((goal, index) => (
                  <GoalNote key={goal} goal={goal} index={index + 3} />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-5 flex items-end gap-3 sm:left-8">
            <div className="relative">
              <div className="grid size-16 place-items-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                <UserRound className="size-8" />
              </div>
              <div className="mx-auto h-20 w-9 rounded-t-3xl border border-white/10 bg-[#1e293b]" />
            </div>
            <div className="mb-20 rounded-xl border border-amber-300/25 bg-amber-300/10 p-3 shadow-lg shadow-black/20 [animation:note-rise_3s_ease-in-out_infinite]">
              <StickyNote className="size-5 text-amber-200" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 [animation:journey-build_9s_ease-in-out_infinite]">
          <div className="absolute inset-x-2 bottom-0 h-16 rounded-[50%] bg-black/25 blur-xl" />
          <div className="absolute left-1/2 top-8 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-background/65 p-4 shadow-2xl shadow-black/25">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[0.65rem] uppercase text-primary">
                execution loop
              </span>
              <CheckCircle2 className="size-4 text-emerald-300" />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#08111f] p-3 font-mono text-[0.68rem] leading-5 text-[#93c5fd]">
              <div className="absolute inset-x-0 top-0 h-8 bg-primary/10 [animation:code-scan_2.8s_linear_infinite]" />
              <p>plan.workflow()</p>
              <p>build.api()</p>
              <p>retrieve.context()</p>
              <p>ship.reliable_ai()</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 w-72 -translate-x-1/2">
            <div className="mx-auto grid size-18 place-items-center rounded-full border border-primary/20 bg-[#172033] text-[#dbeafe] shadow-lg shadow-black/25">
              <UserRound className="size-9" />
            </div>
            <div className="mx-auto h-17 w-16 rounded-t-3xl border border-white/10 bg-[#1e293b]" />
            <div className="relative mx-auto -mt-2 h-24 w-64 rounded-t-2xl border border-primary/20 bg-[#0f1b2e] p-3 shadow-2xl shadow-primary/10">
              <div className="absolute inset-x-8 top-4 h-14 rounded-lg bg-primary/15 blur-md [animation:laptop-glow_2.8s_ease-in-out_infinite]" />
              <Laptop className="relative mx-auto mt-7 size-20 text-primary" />
            </div>
            <div className="h-3 rounded-b-2xl bg-[#253449]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GoalNote({ goal, index }: { goal: string; index: number }) {
  return (
    <div
      className="rounded-xl border border-white/10 bg-card/75 px-3 py-2 shadow-lg shadow-black/15"
      style={{ animation: `note-rise 3.2s ease-in-out ${index * 0.18}s infinite` }}
    >
      <div className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="text-xs font-medium text-[#e2e8f0]">{goal}</span>
      </div>
    </div>
  );
}
