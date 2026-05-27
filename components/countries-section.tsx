"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, FileText, Globe, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationModal } from "@/components/consultation-modal"

const countries = [
  {
    name: "Germany",
    flag: "DE",
    description: "Europe's economic powerhouse with rich culture and opportunities",
    features: ["Documentation Support", "Visitor Visa Guidance", "Immigration Consultation"]
  },
  {
    name: "France",
    flag: "FR",
    description: "World-renowned for art, culture, and quality of life",
    features: ["Schengen Visa Support", "Travel Assistance", "Application Guidance"]
  },
  {
    name: "Spain",
    flag: "ES",
    description: "Mediterranean lifestyle with vibrant cities and beaches",
    features: ["Documentation Support", "Visa Consultation", "Travel Planning"]
  },
  {
    name: "Portugal",
    flag: "PT",
    description: "Gateway to Europe with welcoming culture and beautiful landscapes",
    features: ["Immigration Guidance", "Documentation Help", "Application Support"]
  },
  {
    name: "Italy",
    flag: "IT",
    description: "Historic destinations with world-class cuisine and art",
    features: ["Schengen Visa Guidance", "Travel Support", "Document Preparation"]
  },
  {
    name: "Netherlands",
    flag: "NL",
    description: "Modern infrastructure with excellent quality of life",
    features: ["Visa Consultation", "Documentation Support", "Immigration Guidance"]
  },
  {
    name: "Switzerland",
    flag: "CH",
    description: "Alpine beauty with exceptional living standards",
    features: ["Documentation Help", "Travel Assistance", "Visa Guidance"]
  },
  {
    name: "Austria",
    flag: "AT",
    description: "Rich cultural heritage with stunning mountain scenery",
    features: ["Application Support", "Immigration Consultation", "Document Review"]
  },
  {
    name: "Belgium",
    flag: "BE",
    description: "Heart of Europe with diverse culture and history",
    features: ["Visa Documentation", "Travel Planning", "Application Guidance"]
  },
  {
    name: "Poland",
    flag: "PL",
    description: "Growing economy with rich history and warm hospitality",
    features: ["Documentation Support", "Visa Consultation", "Travel Assistance"]
  },
  {
    name: "Lithuania",
    flag: "LT",
    description: "Baltic gem with modern cities and natural beauty",
    features: ["Immigration Guidance", "Document Preparation", "Application Help"]
  },
  {
    name: "Czech Republic",
    flag: "CZ",
    description: "Historic charm with modern European amenities",
    features: ["Visa Guidance", "Documentation Support", "Travel Planning"]
  },
  {
    name: "Denmark",
    flag: "DK",
    description: "Scandinavian excellence with world-class living standards",
    features: ["Immigration Consultation", "Document Review", "Application Support"]
  },
  {
    name: "Sweden",
    flag: "SE",
    description: "Innovation hub with beautiful natural landscapes",
    features: ["Visa Documentation", "Travel Assistance", "Immigration Guidance"]
  },
  {
    name: "Norway",
    flag: "NO",
    description: "Fjords and northern lights with exceptional quality of life",
    features: ["Application Guidance", "Document Preparation", "Visa Consultation"]
  },
  {
    name: "Finland",
    flag: "FI",
    description: "Land of a thousand lakes with world-class education",
    features: ["Documentation Help", "Immigration Support", "Travel Planning"]
  },
  {
    name: "Greece",
    flag: "GR",
    description: "Ancient history meets Mediterranean paradise",
    features: ["Visa Guidance", "Documentation Support", "Application Assistance"]
  },
  {
    name: "Croatia",
    flag: "HR",
    description: "Adriatic coastline with stunning natural beauty",
    features: ["Travel Assistance", "Document Review", "Immigration Consultation"]
  },
  {
    name: "Ireland",
    flag: "IE",
    description: "Green landscapes with friendly people and rich culture",
    features: ["Visa Documentation", "Application Support", "Travel Planning"]
  },
  {
    name: "Hungary",
    flag: "HU",
    description: "Historic Budapest and thermal baths await",
    features: ["Documentation Help", "Visa Consultation", "Immigration Guidance"]
  },
  {
    name: "United Kingdom",
    flag: "GB",
    description: "World-class cities with diverse opportunities",
    features: ["Documentation Support", "Visa Guidance", "Application Assistance"]
  },
  {
    name: "Australia",
    flag: "AU",
    description: "Stunning landscapes with exceptional quality of life",
    features: ["Immigration Consultation", "Document Preparation", "Visa Support"]
  },
  {
    name: "New Zealand",
    flag: "NZ",
    description: "Natural beauty with excellent work-life balance",
    features: ["Documentation Help", "Travel Assistance", "Application Guidance"]
  },
  {
    name: "Singapore",
    flag: "SG",
    description: "Asia's business hub with modern infrastructure",
    features: ["Visa Documentation", "Immigration Support", "Travel Planning"]
  }
]

const moreCountries = [
  "Latvia", "Estonia", "Slovakia", "Slovenia", "Romania", "Bulgaria", 
  "Luxembourg", "Malta", "Cyprus", "Iceland"
]

export function CountriesSection() {
  const [showAll, setShowAll] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const displayedCountries = showAll ? countries : countries.slice(0, 12)

  return (
    <section id="countries" className="py-24 bg-navy-light/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(100, 180, 255, 0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold tracking-wider uppercase">Destinations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            <span className="text-foreground">Global Destinations</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-light">
              Supported
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert visa documentation guidance and immigration consultation for your dream destination worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedCountries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full hover:border-orange/30 transition-all duration-300 hover:glow-orange">
                {/* Country Header */}
                <div className="relative h-28 bg-gradient-to-br from-sky-blue/20 to-navy overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold text-sky-blue">
                      {country.flag}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{country.name}</h3>
                    </div>
                  </div>
                  {/* Animated border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-blue to-orange"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                  />
                </div>

                {/* Country Details */}
                <div className="p-5">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{country.description}</p>
                  
                  <div className="space-y-2 mb-5">
                    {country.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-blue" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      className="flex-1 bg-transparent border border-sky-blue/50 text-sky-blue hover:bg-sky-blue hover:text-navy text-sm"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Explore
                    </Button>
                    <Button 
                      className="flex-1 bg-orange hover:bg-orange-light text-navy font-semibold text-sm"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Countries */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <p className="text-center text-muted-foreground mb-4">Also supporting:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {moreCountries.map((country) => (
                <span key={country} className="px-4 py-2 glass-card rounded-full text-sm text-foreground hover:border-sky-blue/30 transition-colors">
                  {country}
                </span>
              ))}
            </div>
            <div className="text-center">
              <Button 
                variant="outline" 
                className="border-sky-blue text-sky-blue hover:bg-sky-blue/10"
                onClick={() => setShowAll(true)}
              >
                View All Countries
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Not sure which country is right for you?</p>
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange-light text-navy font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            <MapPin className="mr-2 w-5 h-5" />
            Get Free Consultation
          </Button>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
