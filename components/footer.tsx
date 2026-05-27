"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plane, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Countries", href: "#countries" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "International Visitor Visa",
  "Documentation Support",
  "Immigration Consultation",
  "Application Assistance",
  "Travel Consultation",
  "Client Support"
]

const destinations = [
  "Germany", "France", "Spain", "Italy", "Portugal", "Netherlands",
  "UK", "Australia", "New Zealand", "Singapore"
]

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-blue to-cyan-glow rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-navy" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">SkyFly</span>
                <span className="text-xl font-bold text-orange ml-1">International</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              Professional Overseas Documentation & Global Visa Guidance Consultancy. 
              Your trusted partner for immigration guidance worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/skyfly__international"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center text-muted-foreground hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/SkyflyOverseas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-foreground font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-sky-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-foreground font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="#services"
                    className="text-muted-foreground hover:text-sky-blue transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-foreground font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-blue mt-0.5" />
                <div>
                  <a href="tel:8098118198" className="text-muted-foreground hover:text-sky-blue transition-colors text-sm block">
                    8098118198
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-blue mt-0.5" />
                <a href="mailto:adminskyfly2026@gmail.com" className="text-muted-foreground hover:text-sky-blue transition-colors text-sm break-all">
                  adminskyfly2026@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-blue mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  NO:54 (1st Floor), Vanapattarai Street, Trichy, Tamil Nadu – 620002, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-blue mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>Mon - Sat: 10:00 AM - 5:30 PM</p>
                  <p>Sunday: Holiday / Closed</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Destinations Bar */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <p className="text-center text-muted-foreground text-sm mb-4">Global Destinations Supported Including</p>
          <div className="flex flex-wrap justify-center gap-3">
            {destinations.map((country) => (
              <span key={country} className="px-3 py-1.5 glass-card rounded-full text-xs text-foreground">
                {country}
              </span>
            ))}
            <span className="px-3 py-1.5 glass-card rounded-full text-xs text-orange font-semibold">
              +many more
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {new Date().getFullYear()} SkyFly International Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-sky-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-sky-blue transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-sky-blue transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
