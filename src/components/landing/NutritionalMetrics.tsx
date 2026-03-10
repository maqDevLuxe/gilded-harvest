import { Reveal, SectionTitle } from "./SharedUI";

const metrics = [
  { label: "Protein", value: "26g", sub: "per 100g serving" },
  { label: "Fat Content", value: "8.2g", sub: "lean, marbled cuts" },
  { label: "Iron", value: "3.5mg", sub: "essential minerals" },
  { label: "Calories", value: "190", sub: "kcal per serving" },
];

const NutritionalMetrics = () => (
  <section className="section-padding bg-muted/30">
    <SectionTitle label="Science of Flavor" title="Nutritional Precision" subtitle="Every cut is lab-tested for optimal macronutrient balance and food safety." />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.1}>
          <div className="text-center p-8 card-premium">
            <p className="text-4xl md:text-5xl font-heading gold-gradient-text font-bold">{m.value}</p>
            <p className="font-heading text-sm mt-3 tracking-wider">{m.label}</p>
            <p className="text-muted-foreground text-xs mt-1 font-body">{m.sub}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default NutritionalMetrics;
