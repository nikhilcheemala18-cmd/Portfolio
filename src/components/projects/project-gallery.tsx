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
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/project";

type ProjectGalleryProps = {
  images?: ProjectImage[];
  title: string;
  category: string;
  accent: string;
  mediaPosition?: "default" | "overlap" | "left" | "right";
  compact?: boolean;
  presentation?: "card" | "expanded";
};

export function ProjectGallery({
  images,
  title,
  category,
  accent,
  mediaPosition = "default",
  compact = false,
  presentation = "card",
}: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isExpanded = presentation === "expanded";
  const galleryImages = images ?? [];
  const hasMultipleImages = galleryImages.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSelectedImageIndex(
        (currentIndex) => (currentIndex + 1) % galleryImages.length
      );
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [galleryImages.length, hasMultipleImages, isPaused]);

  if (!galleryImages.length) {
    const preview = getPreviewMeta(category, title);
    const PreviewIcon = preview.icon;

    return (
      <div
        className={cn(
          "relative -mx-1 overflow-hidden rounded-lg border border-white/[0.07] bg-[#090909] shadow-inner shadow-black/30",
          isExpanded
            ? "h-[min(42vh,360px)] min-h-60 sm:h-[min(56vh,520px)] sm:min-h-72"
            : compact
              ? "h-32 sm:h-36"
              : "h-40"
        )}
        data-media-position={mediaPosition}
        style={{ "--media-accent": accent } as CSSProperties}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,color-mix(in_srgb,var(--media-accent)_20%,transparent),transparent_42%),linear-gradient(135deg,rgba(18,18,19,0.2),rgba(3,3,3,0.48))]" />
        <div className="absolute inset-x-6 top-3 h-px bg-[linear-gradient(90deg,transparent,var(--media-accent),transparent)] opacity-55" />
        <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] text-[color:var(--media-accent)]">
          <PreviewIcon className="size-4" aria-hidden="true" />
        </div>

        <div
          className={cn(
            "absolute rounded-lg border border-white/[0.08] bg-[#111111]/90 shadow-2xl shadow-black/30 transition-transform duration-300 group-hover/project:-translate-y-1",
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
            <div className="relative overflow-hidden rounded-md border border-white/[0.06] bg-[#050505]/80 p-2">
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

  const selectedImage = galleryImages[selectedImageIndex] ?? galleryImages[0];

  const showImage = (direction: "previous" | "next") => {
    setSelectedImageIndex((currentIndex) => {
      if (direction === "next") {
        return (currentIndex + 1) % galleryImages.length;
      }

      return (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  return (
    <div
      className={cn(
        "relative -mx-1 overflow-hidden rounded-lg border border-white/10 bg-background/35",
        isExpanded
          ? "h-[min(42vh,360px)] min-h-60 sm:h-[min(56vh,520px)] sm:min-h-72"
          : compact
            ? "h-32 sm:h-36"
            : "h-40"
      )}
      data-media-position={mediaPosition}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <figure className="relative h-full w-full bg-[#050505]">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          quality={isExpanded ? 100 : 88}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={cn(
            "transition duration-300",
            isExpanded
              ? "object-contain object-center opacity-100"
              : "object-cover object-top opacity-90 group-hover/project:scale-[1.025] group-hover/project:opacity-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0",
            isExpanded
              ? "bg-[linear-gradient(180deg,transparent_76%,rgba(5,5,5,0.16))]"
              : "bg-[linear-gradient(180deg,transparent_48%,rgba(5,5,5,0.48))]"
          )}
        />
      </figure>

      {hasMultipleImages ? (
        <>
          <div className="absolute left-3 top-3 rounded-md border border-white/[0.08] bg-black/45 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-300 backdrop-blur-sm">
            {selectedImageIndex + 1}/{galleryImages.length}
          </div>
          <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            type="button"
            onClick={() => showImage("previous")}
            className="inline-flex size-9 items-center justify-center rounded-md border border-white/[0.1] bg-black/50 text-slate-300 backdrop-blur-sm transition-colors hover:border-primary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
            aria-label={`Show previous ${title} screenshot`}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => showImage("next")}
            className="inline-flex size-9 items-center justify-center rounded-md border border-white/[0.1] bg-black/50 text-slate-300 backdrop-blur-sm transition-colors hover:border-primary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
            aria-label={`Show next ${title} screenshot`}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
          </div>
        </>
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
