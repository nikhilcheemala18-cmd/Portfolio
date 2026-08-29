export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <div className="absolute left-0 top-8 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-primary">
            ABOUT ME
          </p>
          <h2 className="max-w-xl font-heading text-3xl font-semibold leading-tight tracking-normal text-balance text-foreground md:text-5xl">
            Building systems where backend engineering, data, and AI come
            together.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-muted-foreground">
          <p>
            My work has evolved across full-stack development, backend systems,
            computer vision, Retrieval-Augmented Generation, and agentic AI
            workflows.
          </p>
          <p>
            I enjoy working on the parts of software systems where APIs,
            databases, retrieval pipelines, AI models, and real-world product
            requirements come together.
          </p>
          <p>
            I am particularly interested in LLM-powered applications, RAG
            systems, agent workflows, API development, tool orchestration,
            retrieval architecture, and production-style backend engineering.
          </p>
          <p className="border-l-2 border-primary/70 pl-5 text-lg font-medium leading-8 text-[#e6edf3]">
            Building reliable software systems where backend engineering, data,
            and AI capabilities work together.
          </p>
        </div>
      </div>
    </section>
  );
}
