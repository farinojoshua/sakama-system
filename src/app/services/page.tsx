"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionTitle, Card, Button } from "@/components/ui";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code2, 
  ShoppingCart, 
  Wrench,
  Check,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Zap,
  FileCode,
  Rocket,
  Settings,
  Users
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Website modern dan responsif dengan teknologi terkini untuk bisnis Anda.",
    features: [
      "Website Company Profile",
      "Landing Page",
      "Web Application",
      "Progressive Web App (PWA)",
      "SEO Optimization",
    ],
    gradient: "from-violet-500 to-purple-600",
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Aplikasi iOS & Android yang powerful dengan pengalaman pengguna terbaik.",
    features: [
      "Native iOS & Android",
      "Cross-platform (Flutter/React Native)",
      "App Store Deployment",
      "Push Notifications",
      "Offline Support",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan intuitif untuk produk digital Anda.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design System",
      "Usability Testing",
    ],
    gradient: "from-pink-500 to-rose-500",
    popular: false,
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Solusi software custom sesuai kebutuhan spesifik bisnis Anda.",
    features: [
      "Enterprise Solutions",
      "API Development",
      "System Integration",
      "Legacy Modernization",
      "Cloud Architecture",
    ],
    gradient: "from-orange-500 to-amber-500",
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Toko online lengkap dengan fitur pembayaran dan manajemen produk.",
    features: [
      "Custom E-Commerce",
      "Shopify/WooCommerce",
      "Payment Gateway",
      "Inventory Management",
      "Analytics Dashboard",
    ],
    gradient: "from-emerald-500 to-teal-500",
    popular: false,
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Support dan pemeliharaan berkelanjutan untuk aplikasi Anda.",
    features: [
      "24/7 Monitoring",
      "Bug Fixing",
      "Performance Optimization",
      "Security Updates",
      "Feature Enhancement",
    ],
    gradient: "from-slate-500 to-zinc-600",
    popular: false,
  },
];

const process = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Consultation",
    description: "Diskusi mendalam tentang kebutuhan dan goals bisnis Anda.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    step: 2,
    icon: FileCode,
    title: "Planning",
    description: "Membuat roadmap, wireframe, dan technical specification.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    step: 3,
    icon: Code2,
    title: "Development",
    description: "Proses development dengan metodologi agile dan update berkala.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    step: 4,
    icon: Settings,
    title: "Testing",
    description: "Quality assurance menyeluruh untuk memastikan produk berkualitas.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: 5,
    icon: Rocket,
    title: "Launch",
    description: "Deployment ke production dan monitoring awal.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    step: 6,
    icon: Users,
    title: "Support",
    description: "Dukungan berkelanjutan dan maintenance pasca-launch.",
    gradient: "from-slate-500 to-zinc-600",
  },
];

const pricing = [
  {
    name: "Basic",
    description: "Untuk bisnis kecil yang baru memulai",
    price: "5",
    features: [
      "Landing Page / Company Profile",
      "Responsive Design",
      "5 Halaman",
      "Contact Form",
      "Basic SEO",
      "1 Bulan Support",
    ],
    gradient: "from-slate-500 to-zinc-600",
    popular: false,
  },
  {
    name: "Professional",
    description: "Untuk bisnis yang ingin berkembang",
    price: "15",
    features: [
      "Custom Web Application",
      "Responsive Design",
      "Unlimited Pages",
      "CMS Integration",
      "Advanced SEO",
      "API Integration",
      "3 Bulan Support",
    ],
    gradient: "from-violet-500 to-purple-600",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Untuk kebutuhan bisnis kompleks",
    price: "50",
    features: [
      "Full Custom Solution",
      "Mobile + Web App",
      "Advanced Features",
      "Cloud Infrastructure",
      "Security Audit",
      "Dedicated Team",
      "12 Bulan Support",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
];

export default function ServicesPage() {
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
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Solusi Digital <span className="gradient-text">Komprehensif</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dari website hingga aplikasi mobile, kami menyediakan layanan lengkap 
              untuk memenuhi kebutuhan digital bisnis Anda dengan teknologi terkini.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Mulai Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg">Lihat Portfolio</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Layanan <span className="gradient-text">Lengkap</span> untuk Bisnis Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="h-full bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bagaimana Kami <span className="gradient-text">Bekerja</span>
            </h2>
            <p className="text-muted-foreground">
              Proses development kami yang terstruktur untuk hasil optimal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-muted-foreground/30">
                      0{step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pilih Paket yang <span className="gradient-text">Sesuai</span>
            </h2>
            <p className="text-muted-foreground">
              Harga transparan tanpa biaya tersembunyi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`h-full rounded-3xl p-8 ${
                  plan.popular 
                    ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-2xl" 
                    : "bg-card border border-border"
                }`}>
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>Mulai dari</span>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`}>
                        Rp {plan.price}
                      </span>
                      <span className={`${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                        Juta
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-3 text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-white" : "text-primary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? "bg-white text-primary hover:bg-white/90" 
                          : ""
                      }`}
                      variant={plan.popular ? "primary" : "outline"}
                    >
                      Mulai Sekarang
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            * Harga dapat bervariasi tergantung kompleksitas project. Hubungi kami untuk penawaran yang lebih detail.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
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
              <Zap className="w-8 h-8 text-white/60" />
            </motion.div>
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Siap Memulai Project Anda?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Konsultasi gratis untuk mendiskusikan kebutuhan dan mendapatkan penawaran terbaik
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                  Hubungi Kami Sekarang
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
