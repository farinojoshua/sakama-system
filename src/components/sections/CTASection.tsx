"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Background with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Floating decorative elements - CSS animation */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center animate-pulse">
            <Sparkles className="w-10 h-10 text-white/60" />
          </div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
            <Zap className="w-8 h-8 text-white/60" />
          </div>
          <div className="absolute top-1/2 right-20 w-12 h-12 rounded-full bg-white/10 hidden lg:block" />
          
          {/* Glowing orbs - reduced blur */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-400/20 rounded-full blur-[50px]" />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur border border-white/20 mb-8"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight"
            >
              Siap Memulai{" "}
              <span className="relative inline-block">
                Transformasi Digital
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C75 4 225 4 298 10" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              {" "}Anda?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Konsultasikan kebutuhan digital Anda dengan tim kami secara gratis. 
              Kami siap membantu mewujudkan visi bisnis Anda menjadi kenyataan.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 gap-2 w-full sm:w-auto shadow-xl shadow-black/10"
                >
                  Mulai Konsultasi Gratis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur"
                >
                  Lihat Portfolio
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2 text-white/70">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">Gratis Konsultasi</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">Respons Cepat</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">Tim Berpengalaman</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
