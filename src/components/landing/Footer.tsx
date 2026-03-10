import { Reveal, MaskText } from "./SharedUI";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact">
    {/* CTA */}
    <section className="section-padding bg-muted/30 text-center">
      <Reveal>
        <p className="gold-text text-xs tracking-[0.3em] uppercase font-body mb-4">Partner With Us</p>
      </Reveal>
      <MaskText>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-wide">
          Bulk Inquiry & Export Orders
        </h2>
      </MaskText>
      <Reveal delay={0.2}>
        <p className="text-muted-foreground font-body text-lg mt-6 max-w-xl mx-auto">
          Whether you're a hotel chain, fine-dining group, or national distributor — let's discuss your requirements.
        </p>
      </Reveal>
      <Reveal delay={0.4}>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:export@aureum-halal.com" className="magnetic-btn px-10 py-4 rounded-sm text-sm">
            <span>Request a Quote</span>
          </a>
          <a
            href="tel:+44000000000"
            className="px-10 py-4 rounded-sm border border-gold-dim text-foreground font-heading text-xs tracking-[0.15em] uppercase hover:border-primary transition-colors duration-500"
          >
            Schedule a Call
          </a>
        </div>
      </Reveal>
    </section>

    {/* Footer */}
    <div className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-heading text-2xl gold-gradient-text font-semibold tracking-[0.2em] mb-4">AUREUM</p>
          <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-sm">
            Premium export-quality halal meat for the world's most discerning palates. Ethically sourced, precision-crafted, globally trusted.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm tracking-wider mb-4 gold-text">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Heritage", "Standards", "Products", "Journal"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground text-sm font-body hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm tracking-wider mb-4 gold-text">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> export@aureum-halal.com</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +44 (0) 20 7946 0958</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> London, United Kingdom</span>
          </div>
        </div>
      </div>
      <div className="gold-line mt-12 mb-8" />
      <p className="text-center text-muted-foreground text-xs font-body tracking-wider">
        © 2026 Aureum Halal. All rights reserved. Crafted with precision.
      </p>
    </div>
  </footer>
);

export default Footer;
