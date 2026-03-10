import { Reveal, SectionTitle } from "./SharedUI";
import { Heart, Leaf, Sun, Droplets } from "lucide-react";

const pillars = [
  { icon: Heart, title: "Compassionate Handling", text: "Animals raised with dignity in free-range, stress-free environments." },
  { icon: Leaf, title: "Natural Feed Only", text: "100% organic grain and grass-fed programs — zero growth hormones." },
  { icon: Sun, title: "Open Pasture", text: "Minimum 200 days on open pastures for optimal marbling and flavor." },
  { icon: Droplets, title: "Clean Water Sources", text: "Farms situated near pristine water reserves for maximum purity." },
];

const EthicalSourcing = () => (
  <section className="section-padding bg-muted/30">
    <SectionTitle label="Our Promise" title="Ethical Sourcing" subtitle="From pasture to plate — every step honors the animal, the earth, and the consumer." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      {pillars.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.1}>
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-secondary/30 flex items-center justify-center">
              <p.icon className="w-5 h-5 gold-text" />
            </div>
            <div>
              <h3 className="font-heading text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default EthicalSourcing;
