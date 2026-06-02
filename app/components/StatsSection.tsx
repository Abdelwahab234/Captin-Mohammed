"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, value: 110000, label: "متابع", prefix: "+", suffix: "" },
  { id: 2, value: 1560, label: "عميل ناجح", prefix: "+", suffix: "" },
  { id: 3, value: 5, label: "سنوات خبرة", prefix: "+", suffix: "" },
  { id: 4, value: 98, label: "نسبة رضا العملاء", prefix: "+", suffix: "%" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-neon/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-3 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-neon/30 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-neon text-shadow-neon" dir="ltr">
                {stat.prefix}
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    useEasing={true}
                  />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-lg md:text-xl text-gray-400 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
