"use client";

import { motion } from "framer-motion";
import { Package, CreditCard, MessageCircle } from "lucide-react";

export default function HowToSubscribeSection() {
  const steps = [
    {
      id: 1,
      title: "اختر الباقة المناسبة لك",
      description: "حدد الباقة التي تناسب أهدافك وميزانيتك من قسم الباقات.",
      icon: <Package className="w-8 h-8 text-neon" />
    },
    {
      id: 2,
      title: "حوّل قيمة الاشتراك عبر InstaPay",
      description: "قم بتحويل المبلغ إلى الرقم التالي:",
      highlight: "01141724052",
      icon: <CreditCard className="w-8 h-8 text-neon" />
    },
    {
      id: 3,
      title: "أرسل صورة التحويل على واتساب",
      description: "بمجرد إرسال إثبات الدفع، سنبدأ في تجهيز برنامجك الخاص فوراً.",
      icon: <MessageCircle className="w-8 h-8 text-neon" />
    }
  ];

  return (
    <section id="subscribe" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            طريقة <span className="text-neon text-shadow-neon">الاشتراك</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">٣ خطوات بسيطة تفصلك عن بداية التغيير</p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:right-5 before:-translate-x-px md:before:right-1/2 md:before:translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-zinc-950 bg-zinc-900 shadow shrink-0 absolute right-[-2px] md:relative md:right-auto md:order-1 md:group-odd:translate-x-1/2 md:group-even:-translate-x-1/2 group-hover:border-neon transition-colors duration-300 z-10 box-shadow-neon">
                {step.icon}
              </div>
              
              {/* Card */}
              <div className="w-full pr-16 md:pr-6 md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-neon/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-neon font-bold text-xl">الخطوة {step.id}</span>
                  <h3 className="font-bold text-white text-xl">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.description}</p>
                {step.highlight && (
                  <div className="mt-4 inline-block bg-black/50 border border-zinc-700 px-4 py-2 rounded-lg text-white font-mono text-xl font-bold tracking-widest">
                    {step.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
        </div>

        {/* WhatsApp CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://wa.me/201158936110" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 font-bold text-black bg-[#25D366] rounded-full hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.4)] text-xl w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span>إرسال إثبات التحويل</span>
          </a>
          <p className="mt-4 text-gray-500 font-mono" dir="ltr">+20 11 58936110</p>
        </motion.div>

      </div>
    </section>
  );
}
