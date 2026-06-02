"use client";

import { motion } from "framer-motion";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function SocialMediaSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            تابعنا على <span className="text-neon text-shadow-neon">السوشيال ميديا</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Facebook Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-blue-600/10 flex items-center justify-center mb-6">
              <FacebookIcon className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">فيسبوك</h3>
            <p className="text-gray-400 mb-8 text-lg">أكثر من 110 ألف متابع</p>
            <a 
              href="https://www.facebook.com/momb.non" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors w-full sm:w-auto"
            >
              زيارة الصفحة
            </a>
          </motion.div>

          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center mb-6 opacity-90 p-[2px]">
               <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center">
                 <InstagramIcon className="w-10 h-10 text-pink-500" />
               </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">إنستجرام</h3>
            <p className="text-gray-400 mb-8 text-lg">محتوى حصري ويوميات</p>
            <a 
              href="https://www.instagram.com/mohamed_hamed_999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-bold rounded-full transition-opacity w-full sm:w-auto"
            >
              متابعة الحساب
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

