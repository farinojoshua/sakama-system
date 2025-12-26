"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle, Card, Button } from "@/components/ui";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Shield, 
  Users,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Code2,
  Sparkles,
  Rocket
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Selalu mengadopsi teknologi dan pendekatan terbaru untuk solusi terbaik.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Komitmen pada kualitas tinggi di setiap baris kode dan desain.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparansi dan kejujuran dalam setiap aspek kerja sama.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Customer-First",
    description: "Kepuasan dan kesuksesan klien adalah prioritas utama kami.",
    gradient: "from-violet-500 to-purple-600",
  },
];

const team = [
  {
    name: "Ahmad Sakama",
    role: "Founder & CEO",
    bio: "10+ tahun pengalaman di industri software development",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Budi Santoso",
    role: "Lead Developer",
    bio: "Expert di React, Node.js, dan cloud architecture",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Citra Dewi",
    role: "UI/UX Designer",
    bio: "Passionate dalam menciptakan pengalaman pengguna yang luar biasa",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Dian Pratama",
    role: "Full Stack Developer",
    bio: "Specialist di mobile app development dan API design",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Figma", category: "Design" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
];

const timeline = [
  { year: "2019", title: "Didirikan", description: "Sakama System didirikan dengan visi membantu UMKM go digital" },
  { year: "2020", title: "Ekspansi", description: "Memperluas layanan ke mobile app development" },
  { year: "2021", title: "Milestone", description: "Mencapai 20+ klien dan 30+ project selesai" },
  { year: "2022", title: "Pertumbuhan", description: "Tim berkembang menjadi 10+ developer profesional" },
  { year: "2023", title: "Enterprise", description: "Mulai melayani klien enterprise dan korporat" },
  { year: "2024", title: "Innovation", description: "Mengadopsi AI dan teknologi terkini dalam solusi kami" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary-50 dark:to-primary-50/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2" />
        
        {/* Floating decorations */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 right-[15%] w-16 h-16 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center"
        >
          <Sparkles className="w-8 h-8 text-primary" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 left-[10%] w-14 h-14 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center"
        >
          <Code2 className="w-7 h-7 text-primary" />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                Tentang Kami
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Building Digital
                <span className="gradient-text"> Excellence</span>
                <br />Since 2019
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Sakama System adalah software house yang berdedikasi untuk membangun 
                solusi digital berkualitas tinggi bagi bisnis di seluruh Indonesia. 
                Kami percaya bahwa teknologi yang tepat dapat mengubah cara bisnis beroperasi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="gap-2">
                    Hubungi Kami
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline">Lihat Portfolio</Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "5+", label: "Tahun Pengalaman", icon: Rocket },
                { value: "50+", label: "Project Selesai", icon: Code2 },
                { value: "30+", label: "Klien Bahagia", icon: Users },
                { value: "99%", label: "Kepuasan Klien", icon: Heart },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-6 text-center hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full bg-card border border-border rounded-3xl p-8 hover:border-primary/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Visi Kami</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi mitra teknologi terdepan yang memberdayakan bisnis Indonesia 
                  untuk berkembang di era digital melalui solusi inovatif dan berkualitas tinggi.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full bg-card border border-border rounded-3xl p-8 hover:border-primary/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Misi Kami</h2>
                <ul className="text-muted-foreground leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Menyediakan solusi digital yang tepat guna dan berkualitas
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Membangun hubungan jangka panjang dengan klien
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Terus berinovasi mengikuti perkembangan teknologi
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perjalanan <span className="gradient-text">Kami</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden lg:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all inline-block">
                      <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-muted-foreground">
              Prinsip yang menjadi fondasi dalam setiap pekerjaan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tim <span className="gradient-text">Profesional</span> Kami
            </h2>
            <p className="text-muted-foreground">
              Developer dan desainer berpengalaman yang siap mewujudkan visi digital Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${member.gradient} mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform`}>
                  <span className="text-5xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tech Stack <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-muted-foreground">
              Teknologi modern yang kami gunakan untuk membangun solusi digital
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:shadow-lg transition-all cursor-default flex items-center gap-2">
                  <span>{tech.name}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {tech.category}
                  </span>
                </div>
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
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tertarik Bekerja Sama?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Mari diskusikan bagaimana kami dapat membantu transformasi digital bisnis Anda
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                  Hubungi Kami
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
