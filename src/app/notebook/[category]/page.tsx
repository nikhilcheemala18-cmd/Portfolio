import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getNotebookCategory, notebookCategories } from "@/data/builders-lab";

type NotebookCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return notebookCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function NotebookCategoryPage({
  params,
}: NotebookCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getNotebookCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <Link
          href="/notebook"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to notebook
        </Link>

        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary">
              {category.eyebrow}
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-normal text-foreground md:text-5xl">
              {category.title}
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-base leading-8 text-muted-foreground">
              {category.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{category.status}</Badge>
              <Badge variant="outline">{category.entries.length} pages</Badge>
            </div>
          </div>
        </div>

        {category.intro?.length || category.principles?.length ? (
          <div className="mb-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            {category.intro?.length ? (
              <section className="rounded-md border border-border/45 bg-card/45 p-6">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Working notes
                </h2>
                <div className="mt-4 space-y-4">
                  {category.intro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {category.principles?.length ? (
              <section className="rounded-md border border-primary/20 bg-primary/5 p-6">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Current principles
                </h2>
                <ul className="mt-4 space-y-3">
                  {category.principles.map((principle) => (
                    <li
                      key={principle}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          {category.entries.map((entry) => (
            <Link
              key={entry.id}
              href={`/notebook/${category.slug}/${entry.slug}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
            >
              <Card className="h-full rounded-md border-border/55 bg-card/70 transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/90">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex size-10 items-center justify-center rounded-md border border-primary/18 bg-primary/8 text-primary">
                      <FileText className="size-4" aria-hidden="true" />
                    </span>
                    <Badge variant="outline">{entry.status}</Badge>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-normal text-primary">
                      {entry.type}
                    </p>
                    <h2 className="font-heading text-2xl font-semibold leading-tight text-foreground group-hover:text-primary">
                      {entry.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {entry.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 border-t border-border/45 pt-4">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary/55 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-primary">
                    Open page
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
