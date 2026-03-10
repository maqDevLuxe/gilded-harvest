import { Reveal, SectionTitle } from "./SharedUI";
import { Shield, Award, FileCheck, Globe } from "lucide-react";

const certs = [
  { icon: Shield, title: "USDA Certified", desc: "Meets United States Department of Agriculture export standards." },
  { icon: Award, title: "ISO 22000", desc: "International food safety management systems compliance." },
  { icon: FileCheck, title: "HACCP Verified", desc: "Hazard analysis and critical control points validated." },
  { icon: Globe, title: "EU Approved", desc: "Licensed for export to all European Union member states." },
];

const Certifications = () => (
  <section className="section-padding" id="standards">
    <SectionTitle label="Global Trust" title="Export Certifications" subtitle="Recognized and approved by the world's most rigorous food safety authorities." />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {certs.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.1}>
          <div className="card-premium p-8 text-center group hover:border-gold-dim transition-colors duration-500">
            <c.icon className="w-8 h-8 gold-text mx-auto mb-5 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="font-heading text-lg mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{c.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Certifications;
