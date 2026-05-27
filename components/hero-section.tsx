/**
 * Hero Section - Main landing section with animated background
 * 
 * Features:
 * - Animated world map with country connections
 * - Typing animation showing service offerings
 * - Floating animated planes for visual interest
 * - Radar effect in background
 * - Floating clouds animation
 * - CTA buttons with hover effects
 * - Trust indicators (Licensed, Expert, Transparent)
 * - Popular destinations showcase in animated card
 * 
 * This is the first section users see, designed to capture attention
 * and encourage them to book a consultation or contact via WhatsApp.
 */

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plane, MapPin, ArrowRight, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationModal } from "@/components/consultation-modal"

/**
 * Array of service types that cycle through typing animation
 * Each text displays then deletes in a continuous loop
 */
const typingTexts = [
  "Visitor Visa",
  "Documentation Support",
  "Immigration Guidance",
  "Travel Consultation",
  "Application Assistance",
]

/**
 * Array of countries supported with their approximate map coordinates
 * Used to draw connection lines from India to each destination
 * Coordinates are in percentage (0-100 scale) for responsive positioning
 */
const countries = [
  { name: "Germany", x: 52, y: 30 },
  { name: "France", x: 48, y: 32 },
  { name: "Spain", x: 45, y: 38 },
  { name: "Italy", x: 53, y: 36 },
  { name: "Netherlands", x: 50, y: 28 },
  { name: "Switzerland", x: 51, y: 33 },
  { name: "UK", x: 47, y: 27 },
  { name: "Australia", x: 82, y: 70 },
]

/**
 * India's position on the world map
 * Reference point for drawing connection lines to other countries
 */
const indiaPosition = { x: 70, y: 45 }

/**
 * HeroSection Component
 * 
 * Main landing section with:
 * - Animated typing effect for services
 * - World map with country connections
 * - Floating planes and clouds
 * - Radar animation
 * - CTA buttons for consultation booking
 * - Trust indicators
 */
export function HeroSection() {
  // State for typing animation
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  /**
   * useEffect hook for typing animation
   * Creates typewriter effect that:
   * 1. Types each text character by character
   * 2. Pauses at the end
   * 3. Deletes text character by character
   * 4. Moves to next text in cycle
   */
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  return (
    <section className="relative min-h-screen overflow-hidden gradient-navy">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(100, 180, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(100, 180, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* World Map SVG */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full opacity-20"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified world continents */}
          <ellipse cx="50" cy="50" rx="48" ry="35" fill="none" stroke="rgba(100, 180, 255, 0.3)" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="40" ry="28" fill="none" stroke="rgba(100, 180, 255, 0.2)" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="rgba(100, 180, 255, 0.1)" strokeWidth="0.2" />
          
          {/* Connection lines from India to countries */}
          {countries.map((country, index) => (
            <motion.line
              key={country.name}
              x1={indiaPosition.x}
              y1={indiaPosition.y}
              x2={country.x}
              y2={country.y}
              stroke="rgba(100, 180, 255, 0.4)"
              strokeWidth="0.15"
              strokeDasharray="1,1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.3, repeat: Infinity, repeatDelay: 5 }}
            />
          ))}
          
          {/* India marker */}
          <motion.circle
            cx={indiaPosition.x}
            cy={indiaPosition.y}
            r="1.5"
            fill="#ff9a3c"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Country markers */}
          {countries.map((country, index) => (
            <motion.circle
              key={country.name}
              cx={country.x}
              cy={country.y}
              r="0.8"
              fill="rgba(100, 180, 255, 0.8)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            />
          ))}
        </svg>

        {/* Floating planes */}
        <motion.div
          className="absolute top-1/4 left-0"
          animate={{ x: ["0vw", "110vw"], y: [0, -30, 0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Plane className="w-8 h-8 text-sky-blue/40 rotate-45" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-0"
          animate={{ x: ["0vw", "110vw"], y: [0, 20, -10, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        >
          <Plane className="w-6 h-6 text-cyan-glow/30 rotate-45" />
        </motion.div>
        <motion.div
          className="absolute top-3/4 left-0"
          animate={{ x: ["0vw", "110vw"], y: [0, -40, 20, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 10 }}
        >
          <Plane className="w-10 h-10 text-orange/30 rotate-45" />
        </motion.div>

        {/* Radar effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
          <motion.div
            className="absolute inset-0 border-2 border-sky-blue/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-sky-blue/50 to-transparent origin-left" />
          </motion.div>
        </div>

        {/* Floating clouds */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full blur-3xl"
            style={{
              width: `${150 + i * 50}px`,
              height: `${80 + i * 30}px`,
              top: `${10 + i * 18}%`,
              left: `${-10 + i * 15}%`,
            }}
            animate={{ x: ["0vw", "120vw"] }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear", delay: i * 8 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-sky-blue mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Global Destinations Supported
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Your Global Journey</span>
              <br />
              <span className="text-foreground">Starts With </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-cyan-glow text-glow-sky">
                SkyFly
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-4">
              Professional Global Visa Documentation & Immigration Guidance
            </p>

            {/* Typing Animation */}
            <div className="h-12 mb-8">
              <span className="text-2xl md:text-3xl font-semibold text-orange">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-orange hover:bg-orange-light text-navy font-semibold px-8 py-6 text-lg glow-orange"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/918098118198" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-sky-blue text-sky-blue hover:bg-sky-blue/10 px-8 py-6 text-lg">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Now
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Licensed Consultancy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Transparent Process</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Animated Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card rounded-2xl p-8 glow-sky"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Popular Global Destinations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {countries.slice(0, 6).map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-navy-light/50 hover:bg-sky-blue/10 transition-colors cursor-pointer group"
                    >
                      <MapPin className="w-5 h-5 text-sky-blue group-hover:text-orange transition-colors" />
                      <span className="text-foreground">{country.name}</span>
                    </motion.div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-6 bg-sky-blue hover:bg-sky-blue-light text-navy font-semibold"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 glass-card rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Trusted by</p>
                    <p className="text-xl font-bold text-foreground">5000+ Clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -left-6 glass-card rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-orange-light flex items-center justify-center">
                    <Plane className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Countries</p>
                    <p className="text-xl font-bold text-foreground">Global Coverage</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
