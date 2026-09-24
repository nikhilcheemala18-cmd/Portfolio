import { ArrowRight, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notebookCategories, getNotebookEntries } from "@/data/builders-lab";

export default function NotebookPage() {
  const entries = getNotebookEntries();

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-12 max-w-3xl">
          <Link
            href="/#builders-lab"
            className="mb-6 inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Back to portfolio
          </Link>
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary">
            Engineering Notebook
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-normal text-foreground md:text-5xl">
            Process, architecture, research, experiments, and ideas.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            This is the structure for a public notebook that will show how I
            think through projects, document systems, evaluate decisions, and
            turn ideas into working software.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notebookCategories.map((category) => (
            <Link
              key={category.id}
              href={`/notebook/${category.slug}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
            >
              <Card className="h-full rounded-md border-border/55 bg-card/70 transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/90">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md border border-primary/20 bg-primary/8 text-primary">
                      <BookOpen className="size-4" aria-hidden="true" />
                    </span>
                    <Badge variant="outline">{category.status}</Badge>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-normal text-primary">
                    {category.eyebrow}
                  </p>
                  <CardTitle className="flex items-center justify-between gap-3 text-xl">
                    {category.title}
                    <ArrowRight
                      className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {category.summary}
                  </p>
                  <div className="border-t border-border/45 pt-4 text-xs text-muted-foreground">
                    {category.entries.length} draft pages
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-primary">
                Draft Pages
              </p>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Notebook index
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">
              Placeholder entries ready for real content.
            </p>
          </div>

          <div className="divide-y divide-border/45 rounded-md border border-border/55 bg-card/55">
            {entries.map(({ category, entry }) => (
              <Link
                key={entry.id}
                href={`/notebook/${category.slug}/${entry.slug}`}
                className="group flex flex-col gap-3 p-5 transition-colors hover:bg-secondary/35 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex gap-4">
                  <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-primary/18 bg-primary/8 text-primary">
                    <FileText className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{category.title}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {entry.status}
                      </span>
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary">
                      {entry.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {entry.summary}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
