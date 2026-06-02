"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            غير جسمك... <br className="md:hidden" />
            <span className="text-neon text-shadow-neon">وغير حياتك</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-12 font-medium"
        >
          برامج تخسيس وتغذية ومتابعة احترافية تساعدك على الوصول لهدفك بأسرع وأفضل طريقة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a 
            href="#subscribe"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-neon rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:box-shadow-neon-lg"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <span className="relative text-lg">ابدأ رحلتك الآن</span>
          </a>
          
          <a 
            href="#packages"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-neon rounded-full transition-all duration-300 hover:bg-neon/10 hover:box-shadow-neon"
          >
            <span className="text-lg">عرض الباقات</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
