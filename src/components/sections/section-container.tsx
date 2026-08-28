type SectionContainerProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionContainer({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionContainerProps) {
  return (
    <section id={id} className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20 lg:py-22">
        <div className="mb-10 max-w-3xl md:mb-12">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-balance text-foreground md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
