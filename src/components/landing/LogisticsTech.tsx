import { Reveal, SectionTitle } from "./SharedUI";
import { Snowflake, PackageCheck, Truck } from "lucide-react";

const LogisticsTech = () => (
  <section className="section-padding bg-muted/30">
    <SectionTitle label="Delivery Excellence" title="Vacuum-Sealed Logistics" subtitle="Military-grade cold chain infrastructure ensures your product arrives in pristine condition." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: Snowflake, title: "Cryogenic Freezing", text: "Flash-frozen at -40°C within 2 hours of processing for cellular integrity preservation." },
        { icon: PackageCheck, title: "Vacuum Seal Tech", text: "Multi-layer barrier packaging with modified atmosphere extends shelf life to 120 days." },
        { icon: Truck, title: "GPS-Tracked Reefers", text: "Real-time temperature monitoring across our fleet of 200+ refrigerated containers worldwide." },
      ].map((item, i) => (
        <Reveal key={item.title} delay={i * 0.15}>
          <div className="card-premium p-8 hover:border-gold-dim transition-colors duration-500">
            <item.icon className="w-7 h-7 gold-text mb-5" />
            <h3 className="font-heading text-lg mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default LogisticsTech;
