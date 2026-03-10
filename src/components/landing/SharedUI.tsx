import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 4 + "px";
        cursorRef.current.style.top = e.clientY - 4 + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX - 16 + "px";
        ringRef.current.style.top = e.clientY - 16 + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
};

// Reusable scroll reveal wrapper
export const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const MaskText = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  </div>
);

export const SectionTitle = ({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-16 md:mb-20">
    <Reveal>
      <p className="gold-text text-xs tracking-[0.3em] uppercase font-body mb-4">{label}</p>
    </Reveal>
    <MaskText>
      <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-wide">{title}</h2>
    </MaskText>
    {subtitle && (
      <Reveal delay={0.2}>
        <p className="text-muted-foreground font-body text-lg mt-6 max-w-2xl">{subtitle}</p>
      </Reveal>
    )}
    <Reveal delay={0.3}>
      <div className="gold-line w-24 mt-8" />
    </Reveal>
  </div>
);
