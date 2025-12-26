"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowUpRight, ArrowRight, Filter, Sparkles, Code2, Smartphone } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Website", "Mobile App", "UI/UX", "E-Commerce"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    category: "E-Commerce",
    description: "Platform e-commerce modern untuk brand fashion lokal dengan fitur lengkap termasuk payment gateway dan inventory management.",
    image: "/images/projects/project-mobile.png",
    slug: "ecommerce-fashion",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Restaurant Management App",
    category: "Mobile App",
    description: "Aplikasi manajemen restoran dengan fitur POS, inventory management, dan real-time reporting.",
    image: "/images/projects/project-mobile.png",
    slug: "restaurant-app",
    tech: ["React Native", "Firebase"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Corporate Company Profile",
    category: "Website",
    description: "Website company profile profesional untuk perusahaan konstruksi dengan animasi modern.",
    image: "/images/projects/project-mobile.png",
    slug: "corporate-profile",
    tech: ["Next.js", "Tailwind CSS"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    category: "UI/UX",
    description: "Redesign dashboard untuk aplikasi manajemen klinik kesehatan dengan focus pada user experience.",
    image: "/images/projects/project-mobile.png",
    slug: "healthcare-dashboard",
    tech: ["Figma", "Framer"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    title: "Food Delivery Platform",
    category: "Mobile App",
    description: "Aplikasi food delivery dengan real-time tracking, payment integration, dan rating system.",
    image: "/images/projects/project-mobile.png",
    slug: "food-delivery",
    tech: ["Flutter", "Firebase", "Stripe"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "Real Estate Website",
    category: "Website",
    description: "Platform listing properti dengan fitur pencarian advanced dan integrasi map.",
    image: "/images/projects/project-mobile.png",
    slug: "real-estate",
    tech: ["Next.js", "MongoDB", "Mapbox"],
    gradient: "from-indigo-500 to-blue-600",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary-50 dark:to-primary-50/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
        
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 right-[15%] w-16 h-16 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center"
        >
          <Code2 className="w-8 h-8 text-primary" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 left-[10%] w-14 h-14 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center"
        >
          <Smartphone className="w-7 h-7 text-primary" />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Project <span className="gradient-text">Terbaik</span> Kami
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jelajahi berbagai project yang telah kami selesaikan untuk klien 
              dari berbagai industri dengan kualitas terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            <div className="flex items-center gap-2 text-muted-foreground mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      {/* Image with gradient overlay */}
                      <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient}`}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                          <div className="flex items-center gap-2 text-white font-medium">
                            <span>View Project</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "50+", label: "Projects Selesai" },
              { value: "30+", label: "Klien Bahagia" },
              { value: "5+", label: "Tahun Pengalaman" },
              { value: "99%", label: "Kepuasan Klien" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-8 right-12 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-white/60" />
            </motion.div>
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ingin Project Seperti Ini?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Mari diskusikan bagaimana kami dapat membantu mewujudkan project digital Anda.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                  Mulai Project Anda
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
