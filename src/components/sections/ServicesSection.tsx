"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code2, 
  ShoppingCart, 
  Wrench,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { SectionTitle, Card } from "@/components/ui";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Website modern dan responsif dengan teknologi terkini untuk bisnis Anda.",
    href: "/services#web",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Aplikasi iOS & Android yang powerful dengan pengalaman pengguna terbaik.",
    href: "/services#mobile",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan intuitif untuk produk digital Anda.",
    href: "/services#design",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Solusi software custom sesuai kebutuhan spesifik bisnis Anda.",
    href: "/services#custom",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Toko online lengkap dengan fitur pembayaran dan manajemen produk.",
    href: "/services#ecommerce",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Support dan pemeliharaan berkelanjutan untuk aplikasi Anda.",
    href: "/services#maintenance",
    gradient: "from-slate-500 to-zinc-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solusi Digital <span className="gradient-text">Lengkap</span> untuk Bisnis Anda
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Kami menyediakan berbagai layanan pengembangan software untuk memenuhi kebutuhan digital bisnis Anda dengan teknologi terkini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full bg-card border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    <span>Pelajari lebih lanjut</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
