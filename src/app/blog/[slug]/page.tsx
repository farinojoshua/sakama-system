"use client";

import { motion } from "framer-motion";
import { Button, Card } from "@/components/ui";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Link2 } from "lucide-react";
import Link from "next/link";
import { use } from "react";

// Dummy blog post data - will be replaced with CMS
const postsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}> = {
  "mengapa-nextjs-pilihan-utama": {
    title: "Mengapa Next.js Menjadi Pilihan Utama untuk Web Modern",
    excerpt: "Pelajari alasan mengapa Next.js semakin populer dan bagaimana framework ini dapat meningkatkan performa website Anda.",
    content: `
Next.js telah menjadi salah satu framework React paling populer di dunia. Dalam artikel ini, kita akan membahas mengapa banyak developer dan perusahaan memilih Next.js untuk proyek web mereka.

## Server-Side Rendering (SSR)

Salah satu fitur unggulan Next.js adalah kemampuan Server-Side Rendering. Dengan SSR, halaman web di-render di server sebelum dikirim ke browser, menghasilkan:

- **Load time lebih cepat** - Pengguna melihat konten lebih cepat
- **SEO lebih baik** - Search engine dapat mengindeks konten dengan lebih baik
- **Pengalaman pengguna lebih baik** - Tidak ada "flash of unstyled content"

## Static Site Generation (SSG)

Next.js juga mendukung Static Site Generation, di mana halaman di-generate saat build time. Ini sangat cocok untuk:

- Blog dan dokumentasi
- Landing page
- Website portfolio

## App Router

Versi terbaru Next.js menghadirkan App Router yang menawarkan:

- **Layouts bersarang** - Membuat layout yang dapat digunakan ulang
- **Server Components** - Mengurangi JavaScript yang dikirim ke client
- **Streaming** - Menampilkan konten secara progresif

## Kesimpulan

Next.js adalah pilihan yang sangat baik untuk membangun aplikasi web modern. Dengan fitur-fitur seperti SSR, SSG, dan App Router, Anda dapat membangun website yang cepat, SEO-friendly, dan mudah di-maintain.
    `,
    category: "Development",
    author: "Ahmad Sakama",
    date: "2024-12-20",
    readTime: "5 min read",
  },
  "tips-memilih-software-house": {
    title: "Tips Memilih Software House yang Tepat untuk Bisnis Anda",
    excerpt: "Panduan lengkap untuk membantu Anda memilih partner teknologi yang sesuai dengan kebutuhan bisnis.",
    content: `
Memilih software house yang tepat adalah keputusan penting untuk kesuksesan proyek digital Anda. Berikut adalah panduan lengkap untuk membantu Anda.

## 1. Review Portfolio

Langkah pertama adalah melihat portfolio. Perhatikan:

- Apakah mereka pernah mengerjakan proyek serupa?
- Bagaimana kualitas desain dan fungsionalitas?
- Apakah ada testimonial dari klien?

## 2. Cek Teknologi yang Digunakan

Pastikan software house menggunakan teknologi yang sesuai:

- Framework modern dan well-maintained
- Best practices dalam security
- Skalabilitas untuk pertumbuhan masa depan

## 3. Komunikasi dan Transparansi

Partner yang baik harus:

- Responsif dalam komunikasi
- Memberikan update progress secara teratur
- Transparan tentang timeline dan biaya

## 4. Support Pasca-Launch

Jangan lupakan dukungan setelah proyek selesai:

- Maintenance agreement
- Bug fixing
- Feature enhancement

## Kesimpulan

Memilih software house yang tepat membutuhkan riset dan pertimbangan matang. Investasikan waktu untuk menemukan partner yang benar-benar memahami bisnis Anda.
    `,
    category: "Business",
    author: "Budi Santoso",
    date: "2024-12-15",
    readTime: "7 min read",
  },
};

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const post = postsData[resolvedParams.slug];

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button>Back to Blog</Button>
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
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary-50 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-ul:text-muted-foreground prose-li:text-muted-foreground">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed my-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card hover={false}>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </h3>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary-50 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary-50 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary-50 transition-colors">
                    <Link2 className="w-5 h-5" />
                  </button>
                </div>
              </Card>

              <Card hover={false}>
                <h3 className="font-semibold text-foreground mb-4">About Author</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{post.author}</div>
                    <div className="text-sm text-muted-foreground">Sakama System</div>
                  </div>
                </div>
              </Card>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Tertarik dengan topik ini?
            </h2>
            <p className="text-muted-foreground mb-6">
              Hubungi kami untuk diskusi lebih lanjut
            </p>
            <Link href="/contact">
              <Button>Hubungi Kami</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
