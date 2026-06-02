"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="packages" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            اختر <span className="text-neon text-shadow-neon">الباقة المناسبة</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">استثمر في صحتك وابدأ رحلة التغيير اليوم</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Starter Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col h-full hover:border-zinc-700 transition-colors"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">باقة البداية</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-white">150</span>
                <span className="text-gray-400">جنيه</span>
              </div>
              <p className="text-gray-400 text-sm">يبدأ التجديد الشهري بعد ذلك من 500 جنيه.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "استشارة شخصية.",
                "متابعة أول شهر.",
                "إرشادات غذائية."
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#subscribe"
              className="w-full py-4 rounded-xl font-bold text-white border-2 border-zinc-700 hover:bg-zinc-800 transition-colors text-center block"
            >
              اشترك الآن
            </a>
          </motion.div>

          {/* PRO Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900 border-2 border-neon rounded-3xl p-8 flex flex-col relative h-full transform md:-translate-y-4 shadow-[0_0_40px_rgba(57,255,20,0.15)]"
          >
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-neon text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              الأكثر طلباً
            </div>

            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bold text-white mb-2">باقة PRO</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-black text-neon text-shadow-neon">900</span>
                <span className="text-gray-400">جنيه</span>
              </div>
              <p className="text-gray-400 text-sm">الباقة الشاملة لتحقيق أقصى النتائج.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "متابعة يومية.",
                "نظام غذائي كامل.",
                "خطة تمارين احترافية.",
                "فيديوهات شرح التمارين.",
                "متابعة الوزن والتقدم.",
                "دعم مباشر ومستمر."
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-neon" />
                  </div>
                  <span className="text-gray-100 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#subscribe"
              className="w-full py-4 rounded-xl font-bold text-black bg-neon hover:bg-neon/90 hover:box-shadow-neon transition-all text-center block text-lg"
            >
              اشترك الآن
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
