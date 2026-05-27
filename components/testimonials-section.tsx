"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    destination: "Germany",
    role: "Visitor Visa",
    image: "/testimonials/person1.jpg",
    rating: 5,
    story: "SkyFly International made my dream of visiting Europe a reality. Their team handled all the documentation perfectly. The process was smooth and transparent. Highly recommended!"
  },
  {
    id: 2,
    name: "Priya Sharma",
    destination: "France",
    role: "Tourist Visa",
    image: "/testimonials/person2.jpg",
    rating: 5,
    story: "I was skeptical at first, but the SkyFly team proved their expertise. They guided me through every step of the visa documentation process. My Schengen visa was approved smoothly. Thank you, SkyFly!"
  },
  {
    id: 3,
    name: "Mohammed Ali",
    destination: "Spain",
    role: "Family Visit Visa",
    image: "/testimonials/person3.jpg",
    rating: 5,
    story: "The best decision I made was choosing SkyFly for my Spain visa documentation. Their transparent approach and genuine support made the entire process stress-free."
  },
  {
    id: 4,
    name: "Anitha Rajan",
    destination: "Italy",
    role: "Visitor Visa",
    image: "/testimonials/person4.jpg",
    rating: 5,
    story: "Professional, reliable, and truly caring. SkyFly did not just help me with visa documentation - they provided complete guidance for my Italy trip. Their preparation tips were invaluable."
  },
  {
    id: 5,
    name: "Suresh Babu",
    destination: "Switzerland",
    role: "Tourist Visa",
    image: "/testimonials/person5.jpg",
    rating: 5,
    story: "From document collection to visa approval - SkyFly made my Switzerland trip possible. Their team was available to answer all my questions. Excellent service!"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="success" className="py-24 bg-navy-light/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-blue text-sm font-semibold tracking-wider uppercase">Success Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            <span className="text-foreground">Happy Clients,</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-cyan-glow">
              Successful Journeys
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our clients who explored their dream destinations with our guidance.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8 md:p-12 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-sky-blue/20" />

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-blue to-cyan-glow p-1">
                      <div className="w-full h-full rounded-full bg-navy-light flex items-center justify-center text-3xl font-bold text-sky-blue">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                      ))}
                    </div>

                    {/* Story */}
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      &ldquo;{testimonials[currentIndex].story}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                      <p className="text-orange font-medium">{testimonials[currentIndex].role}</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonials[currentIndex].destination}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-sky-blue/30 text-sky-blue hover:bg-sky-blue/10 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "w-8 bg-sky-blue" 
                        : "bg-sky-blue/30 hover:bg-sky-blue/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-sky-blue/30 text-sky-blue hover:bg-sky-blue/10 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <Star className="w-5 h-5 text-orange fill-orange" />
            <span className="text-foreground font-semibold">4.9/5 Rating</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <span className="text-foreground font-semibold">Google Verified Reviews</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <span className="text-foreground font-semibold">Trusted Consultancy</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
