"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-neon/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-10 md:p-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            جاهز تبدأ رحلة <span className="text-neon text-shadow-neon">التغيير؟</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            انضم لأكثر من <span className="font-bold text-white">1560</span> عميل حققوا نتائج حقيقية مع الكابتن محمد.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#packages"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-black bg-neon rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:box-shadow-neon-lg w-full sm:w-auto text-lg"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
              <span className="relative">اشترك الآن</span>
              <ArrowLeft className="relative w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/201158936110"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white border-2 border-zinc-700 rounded-full transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 w-full sm:w-auto text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
