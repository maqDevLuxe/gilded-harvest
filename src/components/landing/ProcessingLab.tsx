import { Reveal, SectionTitle } from "./SharedUI";
import { Thermometer, Clock, Microscope } from "lucide-react";

const ProcessingLab = () => (
  <section className="section-padding">
    <SectionTitle label="The Craft" title="Aging & Processing Lab" subtitle="Temperature-controlled dry-aging rooms and precision cutting — where science meets artistry." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: Thermometer, title: "Dry-Aging Chambers", text: "28–45 day aging at precisely 1.5°C and 85% humidity for unmatched depth of flavor." },
        { icon: Clock, title: "Precision Timing", text: "Computerized processing ensures each cut is trimmed, portioned, and sealed within 90 minutes." },
        { icon: Microscope, title: "Lab-Tested Quality", text: "In-house microbiology lab runs 12-point safety checks on every batch before release." },
      ].map((item, i) => (
        <Reveal key={item.title} delay={i * 0.15}>
          <div className="flex flex-col items-start gap-4 p-8 card-premium hover:border-gold-dim transition-colors duration-500">
            <item.icon className="w-7 h-7 gold-text" />
            <h3 className="font-heading text-lg">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default ProcessingLab;
