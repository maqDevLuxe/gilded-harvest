import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import culinaryImg from "@/assets/culinary-spread.jpg";

const CulinaryImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.img
        style={{ y }}
        src={culinaryImg}
        alt="Gourmet steak with gold leaf garnish"
        className="w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-heading text-3xl md:text-5xl text-center tracking-wider gold-gradient-text font-semibold px-6">
          Where Tradition Meets<br />Culinary Artistry
        </p>
      </div>
    </section>
  );
};

export default CulinaryImage;
