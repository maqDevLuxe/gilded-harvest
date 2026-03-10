import { Reveal, SectionTitle } from "./SharedUI";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chef Marcus Laurent",
    role: "2-Star Michelin, Paris",
    quote: "Aureum's wagyu is the finest halal-certified beef I've ever worked with. The marbling, the flavor depth — it rivals anything from Kobe.",
  },
  {
    name: "Chef Amira Haddad",
    role: "Executive Chef, Dubai",
    quote: "Their traceability system gives my kitchen absolute confidence. Every cut arrives with full provenance — that transparency is rare in this industry.",
  },
  {
    name: "Chef Kenji Nakamura",
    role: "Omakase Master, London",
    quote: "The dry-aged tenderloin from Aureum has become the signature dish at my restaurant. Consistent quality, shipment after shipment.",
  },
];

const Testimonials = () => (
  <section className="section-padding">
    <SectionTitle label="Trusted By The Best" title="Chef Testimonials" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.15}>
          <div className="card-premium p-8 flex flex-col h-full hover:border-gold-dim transition-colors duration-500">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 text-sm font-body leading-relaxed italic flex-1">"{t.quote}"</p>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="font-heading text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs font-body mt-1">{t.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Testimonials;
