import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sakama System - Software House & Web Development",
    template: "%s | Sakama System"
  },
  description: "Sakama System adalah software house profesional yang menyediakan jasa pembuatan website, mobile app, dan solusi digital untuk bisnis Anda.",
  keywords: ["software house", "web development", "mobile app", "jakarta", "indonesia", "sakama system"],
  authors: [{ name: "Sakama System" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sakama.id",
    siteName: "Sakama System",
    title: "Sakama System - Software House & Web Development",
    description: "Membangun solusi digital inovatif untuk bisnis Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
