import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaskText, Reveal } from "./SharedUI";
import heroImg from "@/assets/hero-meat.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={heroImg} alt="Premium halal meat cuts on dark marble" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-4xl">
        <Reveal>
          <p className="gold-text text-xs tracking-[0.4em] uppercase font-body mb-6">
            Export-Quality Halal Excellence
          </p>
        </Reveal>
        <MaskText delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-wide leading-[1.1]">
            Crafted for the
            <br />
            <span className="gold-gradient-text">World's Finest</span>
          </h1>
        </MaskText>
        <Reveal delay={0.5}>
          <p className="text-muted-foreground font-body text-base md:text-lg mt-8 max-w-xl mx-auto leading-relaxed">
            Precision-aged, ethically sourced halal meat — trusted by Michelin-starred chefs
            and premium distributors across 40+ countries.
          </p>
        </Reveal>
        <Reveal delay={0.7}>
          <div className="flex gap-4 justify-center mt-10">
            <a href="#products" className="magnetic-btn px-8 py-3.5 rounded-sm">
              <span>Explore Collection</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-sm border border-gold-dim text-foreground font-heading text-xs tracking-[0.15em] uppercase hover:border-primary transition-colors duration-500"
            >
              Bulk Inquiry
            </a>
          </div>
        </Reveal>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
