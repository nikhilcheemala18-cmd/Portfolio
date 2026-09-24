import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Lightbulb,
  Network,
  Search,
} from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notebookCategories } from "@/data/builders-lab";
import { cn } from "@/lib/utils";

const notebookIcons = {
  "build-playbooks": BookOpen,
  "architecture-notes": Network,
  "research-analysis": Search,
  "experiment-logs": FlaskConical,
  "future-ideas": Lightbulb,
};

export function BuildersLab() {
  return (
    <section id="builders-lab" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-14">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-primary">
              Notebook
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-balance text-foreground md:text-4xl">
              Engineering Notebook
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              A compact index for project planning, architecture notes, research
              decisions, experiments, and future build ideas.
            </p>
          </div>
          <Link
            href="/notebook"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-fit shrink-0 md:mt-1",
            )}
          >
            Open Notebook
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notebookCategories.map((item) => {
            const Icon = notebookIcons[item.id as keyof typeof notebookIcons];

            return (
              <Link
                key={item.id}
                href={`/notebook/${item.slug}`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
              >
                <Card className="h-full rounded-md border-border/45 bg-card/65 transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/85 hover:shadow-lg hover:shadow-primary/8">
                  <CardHeader className="p-5 pb-3">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="inline-flex size-11 items-center justify-center rounded-md border border-primary/20 bg-primary/8 text-primary shadow-sm shadow-primary/10">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <ArrowRight
                        className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-normal text-primary">
                      {item.eyebrow}
                    </p>
                    <CardTitle className="text-lg leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-5 pt-0">
                    <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-border/35 pt-3 text-xs text-muted-foreground">
                      <span>{item.entries.length} pages</span>
                      <span>View collection</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
