"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Shield, Zap, HeartHandshake, Quote } from "lucide-react";
import { SectionTitle, Card } from "@/components/ui";

const features = [
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Developer dan desainer berpengalaman siap mewujudkan visi digital Anda.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Teknologi Modern",
    description: "Menggunakan stack teknologi terbaru untuk performa optimal.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Komitmen menyelesaikan project tepat waktu sesuai kesepakatan.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Best practices security untuk melindungi data dan aplikasi Anda.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const testimonials = [
  {
    quote: "Sakama System membantu kami membangun e-commerce yang meningkatkan penjualan 300% dalam 6 bulan pertama.",
    name: "Andi Wijaya",
    role: "CEO, Fashion Store",
    avatar: "A",
  },
  {
    quote: "Tim yang sangat profesional dan responsif. Aplikasi yang dibuat sangat sesuai dengan kebutuhan kami.",
    name: "Sarah Tan",
    role: "Owner, Restaurant Chain",
    avatar: "S",
  },
  {
    quote: "Kualitas kerja yang luar biasa. Website kami sekarang lebih cepat dan user-friendly.",
    name: "Budi Santoso",
    role: "Marketing Director",
    avatar: "B",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                Mengapa Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partner Digital <span className="gradient-text">Terpercaya</span> untuk Bisnis Anda
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Lebih dari sekadar vendor, kami adalah partner yang berkomitmen untuk kesuksesan digital bisnis Anda dengan pendekatan yang personal dan profesional.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Visual Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Center circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-primary/30">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">5+</div>
                  <div className="text-lg opacity-90">Tahun Pengalaman</div>
                </div>
              </div>
              
              {/* Static positioned elements - no infinite animations */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
              
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-xs text-muted-foreground">Clients</div>
              </div>
              
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Apa Kata Klien Kami
          </h3>
          <p className="text-muted-foreground">
            Testimoni dari klien yang telah bekerja sama dengan kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-card border border-border rounded-3xl p-8 relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
