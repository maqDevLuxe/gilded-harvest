import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "./SharedUI";

const counters = [
  { end: 42, suffix: "+", label: "Countries Served" },
  { end: 1200, suffix: "+", label: "Quality Audits Passed" },
  { end: 98, suffix: "%", label: "Client Retention" },
  { end: 15, suffix: "M+", label: "Kg Exported Annually" },
];

const Counter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-heading gold-gradient-text font-bold">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground text-sm font-body mt-3 tracking-wider uppercase">{label}</p>
    </div>
  );
};

const ExportCounters = () => (
  <section className="section-padding bg-muted/30">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {counters.map((c, i) => (
        <Reveal key={c.label} delay={i * 0.1}>
          <Counter {...c} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default ExportCounters;
