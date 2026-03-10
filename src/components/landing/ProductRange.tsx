import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionTitle } from "./SharedUI";
import productImg from "@/assets/product-pack.jpg";

const products = [
  { name: "Wagyu Ribeye", cut: "A5 Grade", origin: "Australia", weight: "250g–1kg" },
  { name: "Lamb Rack", cut: "French Trimmed", origin: "New Zealand", weight: "400g–800g" },
  { name: "Tenderloin Filet", cut: "Center Cut", origin: "Brazil", weight: "200g–500g" },
  { name: "Tomahawk Steak", cut: "Bone-In", origin: "Argentina", weight: "800g–1.2kg" },
  { name: "Kobe Strip Loin", cut: "BMS 10+", origin: "Japan", weight: "300g–600g" },
  { name: "Veal Chops", cut: "Double-Cut", origin: "Netherlands", weight: "350g–700g" },
];

const ProductRange = () => (
  <section className="section-padding bg-muted/30" id="products">
    <SectionTitle label="The Collection" title="Exclusive Product Range" subtitle="Hand-selected premium cuts from the world's finest halal-certified farms." />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.08}>
          <motion.div
            whileHover={{ y: -6 }}
            className="group card-premium overflow-hidden cursor-none"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={productImg}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/30 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs tracking-[0.2em] uppercase gold-text font-body">{p.origin}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg mb-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm font-body">{p.cut} · {p.weight}</p>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default ProductRange;
