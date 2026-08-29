"use client";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Mail,
  MapPin,
  ServerCog,
  Workflow,
} from "lucide-react";
import type { CSSProperties, PointerEvent } from "react";
import { useMemo, useState } from "react";
import { SiGithub } from "react-icons/si";

import { HeroParticles } from "@/components/sections/hero-particles";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  accent: "blue" | "cyan" | "purple";
  icon: typeof ServerCog;
};

const graphNodes: GraphNode[] = [
  {
    id: "backend",
    label: "Backend",
    x: 34,
    y: 32,
    accent: "blue",
    icon: ServerCog,
  },
  {
    id: "apis",
    label: "APIs",
    x: 46,
    y: 24,
    accent: "cyan",
    icon: Workflow,
  },
  {
    id: "data",
    label: "Data",
    x: 72,
    y: 36,
    accent: "blue",
    icon: Database,
  },
  {
    id: "genai",
    label: "GenAI",
    x: 39,
    y: 61,
    accent: "purple",
    icon: BrainCircuit,
  },
  {
    id: "agents",
    label: "Agents",
    x: 64,
    y: 66,
    accent: "cyan",
    icon: Bot,
  },
  {
    id: "product",
    label: "Product",
    x: 50,
    y: 84,
    accent: "blue",
    icon: Code2,
  },
];

const graphLinks = [
  ["backend", "apis"],
  ["apis", "data"],
  ["backend", "genai"],
  ["genai", "agents"],
  ["data", "agents"],
  ["agents", "product"],
  ["genai", "product"],
  ["apis", "agents"],
] as const;

const proofItems = ["Backend Systems", "GenAI Applications", "Full-Stack Projects"];

const accentClasses: Record<GraphNode["accent"], string> = {
  blue: "border-blue-400/30 bg-blue-400/10 text-blue-200 shadow-blue-500/10",
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 shadow-cyan-400/10",
  purple:
    "border-violet-300/30 bg-violet-300/10 text-violet-100 shadow-violet-400/10",
};

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.12),transparent_24rem),radial-gradient(circle_at_78%_22%,rgba(139,92,246,0.11),transparent_22rem)]" />
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
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c8d4e5] md:text-xl md:leading-9">
            I build reliable backend systems, full-stack applications, and
            AI-powered products across APIs, databases, RAG pipelines,
            LLM-powered workflows, and agentic systems.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#cbd5e1]">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Hyderabad, India
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {proofItems.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/[0.08] bg-secondary/28 px-3 py-1.5 text-xs font-semibold text-[#cbd5e1]"
              >
                {item}
              </span>
            ))}
          </div>
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

        <HeroNetworkVisual />
      </div>
    </section>
  );
}

function HeroNetworkVisual() {
  const [cursor, setCursor] = useState({ x: 50, y: 50, active: false });

  const nodeMap = useMemo(
    () => new Map(graphNodes.map((node) => [node.id, node])),
    []
  );

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <div
      className="relative z-10 min-h-[24rem] overflow-hidden rounded-xl border border-white/[0.08] bg-[linear-gradient(145deg,rgba(15,23,42,0.82),rgba(8,15,29,0.94))] shadow-xl shadow-black/20 ring-1 ring-white/[0.025] md:min-h-[30rem]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setCursor((current) => ({ ...current, active: false }))}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-80"
        style={
          {
            "--cursor-x": `${cursor.x}%`,
            "--cursor-y": `${cursor.y}%`,
          } as CSSProperties
        }
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--cursor-x)_var(--cursor-y),rgba(56,189,248,0.18),transparent_16rem)] transition-opacity duration-300" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.035)_1px,transparent_1px)] bg-[size:34px_34px]" />
      </div>

      <div className="absolute left-5 top-5 rounded-md border border-white/[0.08] bg-background/35 px-3 py-2">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          system graph
        </p>
      </div>

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {graphLinks.map(([sourceId, targetId]) => {
          const source = nodeMap.get(sourceId);
          const target = nodeMap.get(targetId);

          if (!source || !target) {
            return null;
          }

          return (
            <line
              key={`${sourceId}-${targetId}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              className="stroke-cyan-200/18 transition-opacity duration-300"
              strokeWidth="0.18"
            />
          );
        })}
      </svg>

      <div className="absolute inset-0">
        {graphNodes.map((node, index) => {
          const Icon = node.icon;
          const distance = Math.hypot(cursor.x - node.x, cursor.y - node.y);
          const influence = cursor.active ? Math.max(0, 1 - distance / 34) : 0;
          const translateX = (cursor.x - node.x) * influence * 0.06;
          const translateY = (cursor.y - node.y) * influence * 0.06;

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`,
              }}
            >
              <div
                className={cn(
                  "flex min-w-25 items-center gap-2 rounded-lg border px-3 py-2 shadow-lg backdrop-blur-[2px] transition-all duration-300 motion-safe:[animation:note-rise_4.8s_ease-in-out_infinite]",
                  accentClasses[node.accent]
                )}
                style={{
                  animationDelay: `${index * 0.22}s`,
                  boxShadow: cursor.active
                    ? `0 0 ${10 + influence * 18}px color-mix(in srgb, ${
                        node.accent === "purple" ? "#8b5cf6" : "#38bdf8"
                      } ${12 + influence * 16}%, transparent)`
                    : undefined,
                }}
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-5 left-5 right-5 hidden gap-2 sm:grid sm:grid-cols-3">
        {["API-first", "Retrieval-aware", "Agent-ready"].map((item) => (
          <div
            key={item}
            className="rounded-md border border-white/[0.07] bg-background/28 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-slate-400"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
