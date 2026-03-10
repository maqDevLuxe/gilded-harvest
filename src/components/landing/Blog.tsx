import { Reveal, SectionTitle } from "./SharedUI";
import { ArrowRight } from "lucide-react";

const posts = [
  { title: "The Art of Dry-Aging: Why Time Is the Secret Ingredient", category: "Craft", date: "Feb 2026" },
  { title: "Halal Certification Decoded: What Importers Need to Know", category: "Standards", date: "Jan 2026" },
  { title: "From Paddock to Plate: A Journey Through Our Supply Chain", category: "Sourcing", date: "Dec 2025" },
];

const Blog = () => (
  <section className="section-padding" id="journal">
    <SectionTitle label="The Journal" title="Meat Connoisseur Blog" subtitle="Insights, stories, and expertise from the world of premium halal meat." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.1}>
          <div className="card-premium p-8 group hover:border-gold-dim transition-colors duration-500 cursor-none flex flex-col h-full">
            <span className="text-xs gold-text tracking-[0.2em] uppercase font-body">{p.category}</span>
            <h3 className="font-heading text-lg mt-4 mb-3 flex-1 leading-snug">{p.title}</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-muted-foreground text-xs font-body">{p.date}</span>
              <ArrowRight className="w-4 h-4 gold-text group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Blog;
