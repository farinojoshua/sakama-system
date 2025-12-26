"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import { SectionTitle, Button } from "@/components/ui";

// Dummy projects - will be replaced with CMS data later
const projects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    category: "E-Commerce",
    description: "Platform e-commerce modern untuk brand fashion lokal dengan fitur lengkap.",
    image: "/images/projects/project-mobile.png",
    slug: "ecommerce-fashion",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Restaurant Management App",
    category: "Mobile App",
    description: "Aplikasi manajemen restoran dengan fitur POS dan inventory management.",
    image: "/images/projects/project-mobile.png",
    slug: "restaurant-app",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Corporate Company Profile",
    category: "Website",
    description: "Website company profile profesional untuk perusahaan konstruksi.",
    image: "/images/projects/project-mobile.png",
    slug: "corporate-profile",
    color: "from-orange-500 to-pink-500",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Portfolio Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Terbaru yang Kami Banggakan
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lihat beberapa project terbaik yang telah kami selesaikan untuk klien dari berbagai industri.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/portfolio">
              <Button variant="outline" className="gap-2">
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Large Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:row-span-2"
          >
            <Link href={`/portfolio/${projects[0].slug}`} className="group block h-full">
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/90 to-purple-600/90 z-10" />
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur rounded-full mb-4">
                    {projects[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">
                    {projects[0].title}
                  </h3>
                  <p className="text-white/80 mb-6 max-w-md">
                    {projects[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span>Lihat Detail</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller Projects */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className={`relative h-[240px] rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-1`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 z-10`} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-20 h-full flex flex-col justify-end p-6">
                    <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                      <span>Lihat Detail</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: "50+", label: "Projects Selesai" },
            { value: "30+", label: "Klien Bahagia" },
            { value: "5+", label: "Tahun Pengalaman" },
            { value: "99%", label: "Kepuasan Klien" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
