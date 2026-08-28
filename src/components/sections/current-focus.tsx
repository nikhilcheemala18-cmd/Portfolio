import { SectionContainer } from "@/components/sections/section-container";
import { currentFocusItems } from "@/data/focus";

export function CurrentFocus() {
  return (
    <SectionContainer
      id="current-focus"
      eyebrow="Now"
      title="Current Work & Goals"
      description="Current technical focus, learning direction, and the kinds of opportunities I am looking for."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {currentFocusItems.map((item) => (
          <li
            key={item.title}
            className="border-l border-primary/30 bg-muted/18 px-5 py-1"
          >
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
