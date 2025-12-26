"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, Button } from "@/components/ui";
import { Calendar, Clock, ArrowRight, User, Sparkles, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";

// Dummy blog posts - will be replaced with CMS
const featuredPost = {
  id: 1,
  title: "Mengapa Next.js Menjadi Pilihan Utama untuk Web Modern",
  excerpt: "Pelajari alasan mengapa Next.js semakin populer dan bagaimana framework ini dapat meningkatkan performa website Anda secara signifikan.",
  slug: "mengapa-nextjs-pilihan-utama",
  category: "Development",
  author: "Ahmad Sakama",
  date: "2024-12-20",
  readTime: "5 min read",
  gradient: "from-violet-500 to-purple-600",
};

const posts = [
  {
    id: 2,
    title: "Tips Memilih Software House yang Tepat untuk Bisnis Anda",
    excerpt: "Panduan lengkap untuk membantu Anda memilih partner teknologi yang sesuai dengan kebutuhan bisnis.",
    slug: "tips-memilih-software-house",
    category: "Business",
    author: "Budi Santoso",
    date: "2024-12-15",
    readTime: "7 min read",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Pentingnya UI/UX Design dalam Pengembangan Aplikasi",
    excerpt: "Mengapa investasi pada desain yang baik dapat meningkatkan konversi dan kepuasan pengguna.",
    slug: "pentingnya-uiux-design",
    category: "Design",
    author: "Citra Dewi",
    date: "2024-12-10",
    readTime: "6 min read",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Trend Teknologi 2025 yang Harus Diperhatikan",
    excerpt: "Teknologi apa saja yang akan mendominasi tahun depan dan bagaimana mempersiapkan bisnis Anda.",
    slug: "trend-teknologi-2025",
    category: "Technology",
    author: "Ahmad Sakama",
    date: "2024-12-05",
    readTime: "8 min read",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    title: "Cara Meningkatkan Performa Website untuk SEO",
    excerpt: "Tips dan trik untuk mengoptimalkan kecepatan website dan meningkatkan ranking di search engine.",
    slug: "meningkatkan-performa-website",
    category: "Development",
    author: "Dian Pratama",
    date: "2024-12-01",
    readTime: "5 min read",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "Membangun MVP yang Efektif untuk Startup",
    excerpt: "Strategi dan best practices untuk membangun Minimum Viable Product yang sukses.",
    slug: "membangun-mvp-efektif",
    category: "Business",
    author: "Budi Santoso",
    date: "2024-11-28",
    readTime: "6 min read",
    gradient: "from-indigo-500 to-blue-600",
  },
];

const categories = [
  { name: "Development", count: 12, icon: BookOpen },
  { name: "Business", count: 8, icon: TrendingUp },
  { name: "Design", count: 6, icon: Sparkles },
  { name: "Technology", count: 10, icon: Sparkles },
];

export default function BlogPage() {
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
          <BookOpen className="w-8 h-8 text-primary" />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tips, tutorial, dan insight seputar teknologi, desain, dan 
              pengembangan bisnis digital dari tim kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${featuredPost.gradient}`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{featuredPost.author.charAt(0)}</span>
                        </div>
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-48 h-48 rounded-3xl bg-white/10 backdrop-blur flex items-center justify-center">
                      <BookOpen className="w-24 h-24 text-white/60" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-foreground">Artikel Terbaru</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <div className="h-full bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                        {/* Header with gradient */}
                        <div className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} relative`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold text-white/20">{post.id}</span>
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-[10px] font-bold text-primary">{post.author.charAt(0)}</span>
                              </div>
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-3xl p-6"
              >
                <h3 className="font-bold text-foreground mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <cat.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{cat.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6 text-white"
              >
                <Sparkles className="w-10 h-10 mb-4 text-white/80" />
                <h3 className="font-bold text-lg mb-2">Subscribe Newsletter</h3>
                <p className="text-white/80 text-sm mb-4">
                  Dapatkan artikel terbaru langsung di inbox Anda.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
