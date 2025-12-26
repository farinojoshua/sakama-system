"use client";

import { motion } from "framer-motion";
import { Button, Card } from "@/components/ui";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import Link from "next/link";
import { use } from "react";

// Dummy project data - will be replaced with CMS
const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  challenges: string;
  solution: string;
  results: string[];
}> = {
  "ecommerce-fashion": {
    title: "E-Commerce Fashion Store",
    category: "E-Commerce",
    description: "Platform e-commerce modern untuk brand fashion lokal dengan fitur lengkap.",
    fullDescription: "Membangun platform e-commerce full-featured untuk brand fashion lokal. Project ini mencakup katalog produk, keranjang belanja, pembayaran terintegrasi, dan sistem manajemen pesanan.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    features: [
      "Product catalog dengan filter & search",
      "Shopping cart & wishlist",
      "Payment gateway integration",
      "Order tracking",
      "Admin dashboard",
      "Inventory management",
    ],
    liveUrl: "https://example.com",
    challenges: "Klien membutuhkan sistem yang dapat menangani traffic tinggi saat flash sale dan integrasi dengan multiple payment gateway lokal.",
    solution: "Kami mengimplementasikan serverless architecture dengan edge caching untuk performa optimal dan membangun abstraction layer untuk payment gateway yang fleksibel.",
    results: [
      "50% peningkatan conversion rate",
      "Load time di bawah 2 detik",
      "99.9% uptime selama flash sale",
    ],
  },
  "restaurant-app": {
    title: "Restaurant Management App",
    category: "Mobile App",
    description: "Aplikasi manajemen restoran dengan fitur POS dan inventory management.",
    fullDescription: "Aplikasi mobile cross-platform untuk manajemen restoran yang mencakup Point of Sale, manajemen meja, inventaris, dan laporan keuangan real-time.",
    tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
    features: [
      "Point of Sale (POS) system",
      "Table management",
      "Inventory tracking",
      "Real-time reporting",
      "Staff management",
      "Kitchen display system",
    ],
    challenges: "Restoran membutuhkan sistem yang dapat bekerja offline dengan sinkronisasi otomatis saat online kembali.",
    solution: "Menggunakan Firebase dengan offline persistence dan custom sync logic untuk memastikan data tetap konsisten.",
    results: [
      "30% pengurangan waktu order processing",
      "Eliminasi kesalahan order manual",
      "Real-time visibility ke semua cabang",
    ],
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
        <Link href="/portfolio">
          <Button>Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary-50 rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-video rounded-3xl bg-gradient-to-br from-primary-50 to-muted flex items-center justify-center"
          >
            <span className="text-8xl font-bold gradient-text">
              {project.title.charAt(0)}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card hover={false}>
                <h3 className="font-semibold text-foreground mb-4">Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card hover={false}>
                <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary-50 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full gap-2">
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tertarik dengan Project Serupa?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Mari diskusikan bagaimana kami dapat membantu mewujudkan project Anda.
            </p>
            <Link href="/contact">
              <Button size="lg">Hubungi Kami</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
