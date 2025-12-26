import Link from "next/link";
import { 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight
} from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile App", href: "/services#mobile" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "Custom Software", href: "/services#custom" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "GitHub", href: "https://github.com", icon: Github },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                Sakama<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Membangun solusi digital inovatif untuk bisnis Anda. 
              Kami hadir untuk mewujudkan transformasi digital yang Anda butuhkan.
            </p>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contact@sakama.id" 
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>contact@sakama.id</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+6281234567890" 
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+62 812-3456-7890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sakama System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
