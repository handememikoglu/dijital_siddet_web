// app/haklarim/page.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LAW_ITEMS, type Clause } from "@/app/data/law";

function ClauseCallout({
  label,
  text,
  penalty,
}: Clause & { label?: string }) {
  return (
    <div className="rounded-xl border bg-background p-3">
      <div className="flex items-start gap-2">
        {label && (
          <span className="shrink-0 rounded-md border px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {label}
          </span>
        )}

        <p className="text-sm leading-relaxed">{text}</p>
      </div>

      <div className="mt-2 rounded-lg border-l-4 border-red-500 bg-red-50/50 px-3 py-2 text-sm text-red-700">
        <strong>Ceza:</strong> {penalty}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Suç ve Kanunlar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Her TCK maddesi tek kartta; alt fıkralar içeride listelenir.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {LAW_ITEMS.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-2xl border bg-background"
          >
            <AccordionTrigger className="px-4 py-4 text-left hover:no-underline">
              <div className="flex w-full items-start justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base font-semibold">{item.title}</span>

                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {item.law}
                    </span>

                    {item.tags?.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {item.summary}
                  </span>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-4 pb-4">
              <div className="space-y-3">
                {item.clauses.map((c, idx) => (
                  <ClauseCallout key={`${item.id}-${idx}`} {...c} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 rounded-2xl border bg-muted/30 p-4 text-sm text-muted-foreground">
        Not: Bu sayfa bilgilendirme amaçlıdır. Somut olay için hukuki destek
        gerekebilir.
      </div>
    </div>
  );
}
