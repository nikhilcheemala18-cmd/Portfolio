import { SectionContainer } from "@/components/sections/section-container";
import {
  futureDirectionClosing,
  futureDirectionIntro,
  futureDirectionItems,
} from "@/data/focus";

export function FutureDirection() {
  return (
    <SectionContainer
      id="future-direction"
      eyebrow="Direction"
      title="Future Direction"
      description={futureDirectionIntro}
    >
      <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        {futureDirectionItems.map((item) => (
          <p
            key={item}
            className="border-l border-white/[0.08] pl-4 text-sm leading-6 text-muted-foreground"
          >
            {item}
          </p>
        ))}
      </div>
      <p className="mt-8 max-w-4xl border-l-2 border-primary/60 bg-primary/6 px-5 py-4 text-sm font-medium leading-6 text-[#e6edf3]">
        {futureDirectionClosing}
      </p>
    </SectionContainer>
  );
}
