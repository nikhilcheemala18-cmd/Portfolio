"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

type HeroPortraitCompositionProps = {
  imageSrc?: string;
  imageAlt?: string;
  imageAspect?: "portrait" | "landscape";
  className?: string;
};

export function HeroPortraitComposition({
  imageSrc,
  imageAlt = "Portrait of Nikhil Cheemala",
  imageAspect = "portrait",
  className,
}: HeroPortraitCompositionProps) {
  return (
    <div
      className={cn(
        "relative z-10 min-h-[24rem] overflow-hidden md:min-h-[30rem]",
        className
      )}
      aria-hidden={!imageSrc}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[76%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-6 left-1/2 h-[34%] w-[58%] -translate-x-1/2 rounded-full bg-blue-500/7 blur-2xl" />

      <div className="relative flex min-h-[24rem] items-center justify-center md:min-h-[30rem]">
        <div
          className={cn(
            "relative w-full",
            imageAspect === "landscape"
              ? "max-w-[34rem] md:max-w-[38rem]"
              : "max-w-[23rem] md:max-w-[25rem]"
          )}
        >
          <div
            className={cn(
              "relative w-full",
              imageAspect === "landscape"
                ? "aspect-[1456/1088]"
                : "aspect-[1086/1450]"
            )}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 36vw, 86vw"
                className="object-contain object-center drop-shadow-[0_28px_70px_rgba(0,0,0,0.46)]"
                priority
              />
            ) : (
              <PortraitPlaceholder />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(145deg,rgba(18,18,19,0.62),rgba(5,5,5,0.2))] shadow-[0_28px_70px_rgba(0,0,0,0.34)]" />
  );
}
