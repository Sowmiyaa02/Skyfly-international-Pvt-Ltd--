/**
 * Home Page - Main Landing Page for SkyFly International
 * 
 * This is the root page component that displays all major sections of the website.
 * It imports and arranges all sections in a logical order to create a complete
 * landing page experience for visa and immigration consultation services.
 * 
 * Sections included:
 * - LoadingScreen: Initial loading animation
 * - Navbar: Navigation header with menu
 * - HeroSection: Main hero with typing animation and CTA buttons
 * - AboutSection: Company information and mission
 * - StatsSection: Key metrics and achievements
 * - CountriesSection: Supported countries showcase
 * - ServicesSection: Detailed service offerings
 * - TestimonialsSection: Client reviews and testimonials
 * - FAQSection: Frequently asked questions
 * - CTASection: Call-to-action for conversions
 * - ContactSection: Contact form and information
 * - Footer: Footer with links and social media
 * - WhatsAppButton: Floating WhatsApp contact button
 * - StickyConsultationBar: Sticky consultation booking bar
 */

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CountriesSection } from "@/components/countries-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton, StickyConsultationBar } from "@/components/floating-buttons"
import { LoadingScreen } from "@/components/loading-screen"

/**
 * Home - Main page component
 * Returns a structured layout with all sections in proper order
 * Uses dark theme (navy background) with gradient accents
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Full-page loading animation on initial load */}
      <LoadingScreen />
      
      {/* Top navigation bar with logo and menu */}
      <Navbar />
      
      {/* Hero section with world map animation and typing effect */}
      <HeroSection />
      
      {/* Company information and mission statement */}
      <AboutSection />
      
      {/* Key metrics: clients, countries, success rate */}
      <StatsSection />
      
      {/* Supported countries showcase with map visualization */}
      <CountriesSection />
      
      {/* Detailed services offered with feature highlights */}
      <ServicesSection />
      
      {/* Client testimonials and success stories */}
      <TestimonialsSection />
      
      {/* Frequently asked questions about visa process */}
      <FAQSection />
      
      {/* Call-to-action section for conversions */}
      <CTASection />
      
      {/* Contact form and office information */}
      <ContactSection />
      
      {/* Footer with links and social media */}
      <Footer />
      
      {/* Floating WhatsApp button for quick contact */}
      <WhatsAppButton />
      
      {/* Sticky consultation bar at bottom of page */}
      <StickyConsultationBar />
    </main>
  )
}
