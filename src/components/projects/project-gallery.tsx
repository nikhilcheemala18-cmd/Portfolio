"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useRef } from "react";

import type { ProjectImage } from "@/types/project";

type ProjectGalleryProps = {
  images?: ProjectImage[];
  title: string;
  accent: string;
  mediaPosition?: "default" | "overlap" | "left" | "right";
};

export function ProjectGallery({
  images,
  title,
  accent,
  mediaPosition = "default",
}: ProjectGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (!images?.length) {
    return (
      <div
        className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-background/28 p-4 shadow-inner shadow-black/16"
        style={{ "--media-accent": accent } as CSSProperties}
      >
        <div className="absolute inset-x-8 -top-8 h-20 rounded-full bg-[color:var(--media-accent)] opacity-15 blur-2xl" />
        <div className="relative h-32 sm:h-36">
          <div className="absolute bottom-2 left-3 right-10 top-7 rounded-lg border border-white/[0.07] bg-[#111827] shadow-lg shadow-black/20" />
          <div className="absolute bottom-7 left-10 right-3 top-2 rounded-lg border border-[color:var(--media-accent)] bg-[#0b1324] shadow-lg shadow-black/18 opacity-75" />
          <div className="absolute left-14 right-8 top-7 space-y-2">
            <div className="h-2 w-1/3 rounded-full bg-[color:var(--media-accent)] opacity-60" />
            <div className="h-2 w-2/3 rounded-full bg-slate-500/25" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-12 rounded-lg bg-slate-500/12" />
              <div className="h-12 rounded-lg bg-slate-500/12" />
              <div className="h-12 rounded-lg bg-slate-500/12" />
            </div>
          </div>
          <p className="absolute bottom-4 left-5 font-mono text-[0.65rem] uppercase text-muted-foreground">
            Media slot ready
          </p>
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
      className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-background/35 p-3"
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
