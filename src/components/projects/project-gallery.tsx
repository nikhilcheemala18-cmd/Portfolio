"use client";

import {
  Bot,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Network,
} from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/project";

type ProjectGalleryProps = {
  images?: ProjectImage[];
  title: string;
  category: string;
  accent: string;
  mediaPosition?: "default" | "overlap" | "left" | "right";
  compact?: boolean;
};

export function ProjectGallery({
  images,
  title,
  category,
  accent,
  mediaPosition = "default",
  compact = false,
}: ProjectGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (!images?.length) {
    const preview = getPreviewMeta(category, title);
    const PreviewIcon = preview.icon;

    return (
      <div
        className={cn(
          "relative -mx-1 overflow-hidden rounded-lg border border-white/[0.07] bg-[#08111f] shadow-inner shadow-black/20",
          compact ? "h-32 sm:h-36" : "h-40"
        )}
        data-media-position={mediaPosition}
        style={{ "--media-accent": accent } as CSSProperties}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,color-mix(in_srgb,var(--media-accent)_24%,transparent),transparent_42%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(2,6,23,0.35))]" />
        <div className="absolute inset-x-6 top-3 h-px bg-[linear-gradient(90deg,transparent,var(--media-accent),transparent)] opacity-55" />
        <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] text-[color:var(--media-accent)]">
          <PreviewIcon className="size-4" aria-hidden="true" />
        </div>

        <div
          className={cn(
            "absolute rounded-lg border border-white/[0.08] bg-[#0f172a]/88 shadow-2xl shadow-black/20 transition-transform duration-300 group-hover/project:-translate-y-1",
            mediaPosition === "left"
              ? "bottom-3 left-3 right-10 top-7"
              : mediaPosition === "right"
                ? "bottom-3 left-10 right-3 top-7"
                : "bottom-3 left-4 right-4 top-7"
          )}
        >
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-1.5">
            <span className="size-2 rounded-full bg-[#ef4444]/70" />
            <span className="size-2 rounded-full bg-[#f59e0b]/70" />
            <span className="size-2 rounded-full bg-[#22c55e]/70" />
            <span className="ml-auto font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
              {preview.label}
            </span>
          </div>
          <div className="grid h-[calc(100%-1.75rem)] grid-cols-[0.9fr_1.1fr] gap-2 p-2.5">
            <div className="space-y-1.5">
              {preview.steps.slice(0, compact ? 3 : 4).map((step, index) => (
                <div
                  key={step}
                  className={cn(
                    "flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.035] px-2 py-1",
                    index === 0 &&
                      "[border-color:color-mix(in_srgb,var(--media-accent)_40%,transparent)]"
                  )}
                >
                  <span className="size-1.5 rounded-full bg-[color:var(--media-accent)]" />
                  <span className="truncate font-mono text-[0.62rem] text-slate-300">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-md border border-white/[0.06] bg-[#020617]/70 p-2">
              <div className="absolute inset-x-4 top-1/2 h-px bg-[color:var(--media-accent)]/40" />
              <div className="absolute inset-y-4 left-1/2 w-px bg-[color:var(--media-accent)]/25" />
              <div className="grid h-full grid-cols-2 gap-2">
                {preview.nodes.map((node) => (
                  <div
                    key={node}
                    className="relative flex items-center justify-center rounded-md bg-white/[0.045] px-2 text-center font-mono text-[0.56rem] leading-4 text-slate-300"
                  >
                    {node}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const scrollGallery = (direction: "previous" | "next") => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left:
        direction === "next"
          ? scroller.clientWidth * 0.84
          : -scroller.clientWidth * 0.84,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "relative -mx-1 overflow-hidden rounded-lg border border-white/10 bg-background/35 p-3",
        compact ? "min-h-32 sm:min-h-36" : "min-h-40"
      )}
      data-media-position={mediaPosition}
    >
      <div
        ref={scrollerRef}
        className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]"
        aria-label={`${title} screenshots`}
      >
        {images.map((image) => (
          <figure
            key={image.src}
            className="min-w-[82%] snap-start overflow-hidden rounded-xl border border-border/80 bg-background/55 shadow-lg shadow-black/20 sm:min-w-[58%]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1280}
              height={image.height ?? 720}
              className="aspect-video w-full object-cover"
            />
          </figure>
        ))}
      </div>
      {images.length > 1 ? (
        <div className="mt-3 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollGallery("previous")}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background/70 text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
            aria-label={`Show previous ${title} screenshot`}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollGallery("next")}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background/70 text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
            aria-label={`Show next ${title} screenshot`}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

function getPreviewMeta(category: string, title: string) {
  const text = `${category} ${title}`.toLowerCase();

  if (text.includes("agent")) {
    return {
      label: "agent workflow",
      icon: Bot,
      steps: ["Plan", "Execute Tool", "Validate", "Fallback"],
      nodes: ["LLM", "Tools", "Checks", "Output"],
    };
  }

  if (text.includes("rag") || text.includes("retrieval") || text.includes("pdf")) {
    return {
      label: "retrieval system",
      icon: Network,
      steps: ["Ingest", "Chunk", "Embed", "Retrieve"],
      nodes: ["Docs", "Vectors", "Search", "Answer"],
    };
  }

  if (
    text.includes("full-stack") ||
    text.includes("career") ||
    text.includes("employee")
  ) {
    return {
      label: "product system",
      icon: Code2,
      steps: ["Frontend", "API", "Auth", "Database"],
      nodes: ["UI", "API", "CMS", "Data"],
    };
  }

  return {
    label: "system design",
    icon: Database,
    steps: ["Input", "Process", "Store", "Ship"],
    nodes: ["App", "API", "DB", "Ops"],
  };
}
