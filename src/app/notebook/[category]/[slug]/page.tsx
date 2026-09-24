import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getNotebookEntries, getNotebookEntry } from "@/data/builders-lab";

type NotebookEntryPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getNotebookEntries().map(({ category, entry }) => ({
    category: category.slug,
    slug: entry.slug,
  }));
}

export default async function NotebookEntryPage({
  params,
}: NotebookEntryPageProps) {
  const { category: categorySlug, slug } = await params;
  const result = getNotebookEntry(categorySlug, slug);

  if (!result) {
    notFound();
  }

  const { category, entry } = result;

  return (
    <main>
      <article className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-20">
        <Link
          href={`/notebook/${category.slug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to {category.title}
        </Link>

        <header className="mb-10 border-b border-border/45 pb-8">
          <div className="mb-5 flex flex-wrap gap-2">
            <Badge variant="outline">{category.title}</Badge>
            <Badge variant="outline">{entry.status}</Badge>
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary">
            {entry.type}
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-normal text-foreground md:text-5xl">
            {entry.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            {entry.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{entry.updatedAt}</span>
            <span aria-hidden="true">/</span>
            <span>{entry.tags.join(", ")}</span>
          </div>
        </header>

        <div className="space-y-8">
          {entry.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-md border border-border/45 bg-card/45 p-6"
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {section.body}
              </p>
              {section.points?.length ? (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 rounded-md border border-border/40 bg-secondary/35 px-3 py-2 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
