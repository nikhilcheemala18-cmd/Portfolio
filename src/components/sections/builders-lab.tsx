import { SectionContainer } from "@/components/sections/section-container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildersLabItems } from "@/data/builders-lab";

export function BuildersLab() {
  return (
    <SectionContainer
      id="builders-lab"
      eyebrow="Extras"
      title="Builder's Lab"
      description="A future home for deeper material such as SOPs, research, architecture docs, project ideas, notes, and experiments."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {buildersLabItems.map((item) => (
          <Card key={item.title} className="rounded-md">
            <CardHeader>
              <div className="mb-2">
                <Badge variant="outline">{item.type}</Badge>
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
