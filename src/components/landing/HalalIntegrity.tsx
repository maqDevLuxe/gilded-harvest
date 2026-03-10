import { Reveal, SectionTitle } from "./SharedUI";
import { QrCode, ScanLine, ShieldCheck } from "lucide-react";

const HalalIntegrity = () => (
  <section className="section-padding" id="heritage">
    <SectionTitle label="Halal Assurance" title="Integrity & Traceability" subtitle="Every cut carries a digital passport — from farm origin to final delivery." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: QrCode, title: "QR Traceability", desc: "Scan any package to verify origin, processing date, and halal certification." },
        { icon: ScanLine, title: "Blockchain Ledger", desc: "Immutable supply chain records ensure zero tampering from source to shelf." },
        { icon: ShieldCheck, title: "Halal Audits", desc: "Monthly third-party halal audits by certified Islamic food authorities." },
      ].map((item, i) => (
        <Reveal key={item.title} delay={i * 0.15}>
          <div className="card-premium p-8 group hover:border-gold-dim transition-colors duration-500">
            <item.icon className="w-8 h-8 gold-text mb-5" />
            <h3 className="font-heading text-xl mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default HalalIntegrity;
