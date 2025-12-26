"use client";

import { motion } from "framer-motion";
import { Card, Button } from "@/components/ui";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Linkedin, 
  Github,
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor HP minimal 10 digit"),
  projectType: z.string().min(1, "Pilih tipe project"),
  budget: z.string().min(1, "Pilih range budget"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "Custom Software",
  "E-Commerce",
  "Other",
];

const budgetRanges = [
  "< Rp 5 Juta",
  "Rp 5 - 15 Juta",
  "Rp 15 - 50 Juta",
  "Rp 50 - 100 Juta",
  "> Rp 100 Juta",
];

const benefits = [
  "Konsultasi gratis tanpa commitment",
  "Response dalam 24 jam",
  "Tim berpengalaman 5+ tahun",
  "Garansi kepuasan 100%",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
          <Mail className="w-8 h-8 text-primary" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 left-[10%] w-14 h-14 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7 text-primary" />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mari <span className="gradient-text">Diskusikan</span> Project Anda
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hubungi kami untuk konsultasi gratis. Tim kami siap membantu 
              mewujudkan solusi digital terbaik untuk bisnis Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      Kirim Pesan
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Isi form di bawah dan kami akan segera menghubungi Anda
                    </p>
                  </div>
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-700 dark:text-green-400">
                      Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        className={`w-full px-4 py-3.5 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.name ? "border-red-500" : "border-border"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className={`w-full px-4 py-3.5 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.email ? "border-red-500" : "border-border"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nomor HP *
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className={`w-full px-4 py-3.5 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.phone ? "border-red-500" : "border-border"
                        }`}
                        placeholder="08123456789"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipe Project *
                      </label>
                      <select
                        {...register("projectType")}
                        className={`w-full px-4 py-3.5 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.projectType ? "border-red-500" : "border-border"
                        }`}
                      >
                        <option value="">Pilih tipe project</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.projectType.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range *
                    </label>
                    <select
                      {...register("budget")}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.budget ? "border-red-500" : "border-border"
                      }`}
                    >
                      <option value="">Pilih range budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.budget.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deskripsi Project *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all ${
                        errors.message ? "border-red-500" : "border-border"
                      }`}
                      placeholder="Jelaskan tentang project yang ingin Anda buat..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 text-white">
                <MessageCircle className="w-10 h-10 mb-4 text-white/80" />
                <h3 className="text-xl font-bold mb-2">Quick Contact</h3>
                <p className="text-white/80 text-sm mb-6">
                  Butuh respons cepat? Hubungi kami langsung via WhatsApp.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-primary rounded-xl font-medium hover:bg-white/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat via WhatsApp
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="font-bold text-foreground mb-6">Contact Info</h3>
                <div className="space-y-5">
                  <a
                    href="mailto:contact@sakama.id"
                    className="flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Email</div>
                      <div className="text-sm">contact@sakama.id</div>
                    </div>
                  </a>
                  <a
                    href="tel:+6281234567890"
                    className="flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Phone</div>
                      <div className="text-sm">+62 812-3456-7890</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Location</div>
                      <div className="text-sm">Jakarta, Indonesia</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">Office Hours</div>
                      <div className="text-sm">Senin - Jumat, 09:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="font-bold text-foreground mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#0077B5] transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#333] transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Berapa lama waktu pengerjaan project?",
                a: "Tergantung kompleksitas project. Website sederhana 2-4 minggu, aplikasi custom 2-6 bulan.",
              },
              {
                q: "Apakah ada garansi setelah project selesai?",
                a: "Ya, kami memberikan garansi maintenance gratis 1-3 bulan tergantung paket yang dipilih.",
              },
              {
                q: "Bagaimana sistem pembayaran?",
                a: "Pembayaran bertahap: 30% di awal, 40% saat progress 50%, dan 30% saat serah terima.",
              },
              {
                q: "Apakah bisa request revisi?",
                a: "Tentu! Kami memberikan revisi sesuai scope yang disepakati di awal project.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
