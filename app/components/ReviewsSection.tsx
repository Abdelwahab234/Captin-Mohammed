"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "أحمد حسن",
    text: "تجربة ممتازة مع الكابتن محمد. نزلت 15 كيلو في 3 شهور بس وتغير شكل جسمي بالكامل.",
    beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "محمود علي",
    text: "نظام الأكل كان مريح جداً ومحستش بحرمان. المتابعة اليومية هي اللي فرقت معايا بصراحة.",
    beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "عمر كمال",
    text: "أفضل استثمار عملته في صحتي. الفيديوهات واضحة جداً والتدريب منظم بشكل احترافي.",
    beforeImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            قصص <span className="text-neon text-shadow-neon">نجاح</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">آراء عملائنا ونتائجهم قبل وبعد</p>
        </div>

        {/* Horizontal Scroll Snap Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="snap-center shrink-0 w-full md:w-[600px] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              {/* Before/After Images */}
              <div className="flex h-64 w-full">
                <div className="w-1/2 relative border-r border-zinc-800">
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold z-10 backdrop-blur-sm">قبل</div>
                  <img src={review.beforeImg} alt="Before" className="w-full h-full object-cover opacity-70 grayscale" />
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute top-4 right-4 bg-neon text-black px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">بعد</div>
                  <img src={review.afterImg} alt="After" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Review Content */}
              <div className="p-8 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-800/50 rotate-180" />
                
                <div className="flex items-center gap-1 mb-4 text-neon">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic relative z-10">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white text-xl border border-zinc-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">مشترك باقة PRO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
