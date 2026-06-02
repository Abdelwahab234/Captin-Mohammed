"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineItems = [
  "نظام غذائي مخصص حسب هدفك.",
  "برامج تخسيس فعالة وآمنة.",
  "خطط بناء عضلات احترافية.",
  "متابعة مستمرة طوال فترة الاشتراك.",
  "تقييم أسبوعي للنتائج.",
  "شرح التمارين بالفيديو.",
  "تعديل النظام الغذائي حسب التقدم.",
  "دعم وتحفيز دائم للوصول للهدف."
];

export default function WhyMeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            لماذا تختار <span className="text-neon text-shadow-neon">الكابتن محمد؟</span>
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative wrap overflow-hidden p-2 md:p-10 h-full">
          {/* Background Line */}
          <div className="absolute border-opacity-20 border-gray-700 h-full border right-4 md:right-1/2 md:translate-x-1/2"></div>
          
          {/* Glowing Animated Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute right-4 md:right-1/2 md:translate-x-1/2 w-[2px] bg-neon box-shadow-neon origin-top"
          ></motion.div>

          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`mb-8 flex justify-between items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="order-1 md:w-5/12 hidden md:block"></div>
                
                {/* Node indicator */}
                <div className="z-20 flex items-center justify-center order-1 bg-black shadow-xl w-8 h-8 rounded-full border-2 border-neon box-shadow-neon absolute right-[2px] md:relative md:right-auto md:mx-auto">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                    className="w-3 h-3 bg-neon rounded-full"
                  />
                </div>
                
                <div className={`order-1 w-full md:w-5/12 pr-14 md:pr-6 pl-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 ${
                  isEven ? "md:text-right" : "md:text-left"
                } hover:border-neon/50 transition-colors duration-300`}>
                  <p className="text-lg md:text-xl font-bold text-white">
                    {item}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
