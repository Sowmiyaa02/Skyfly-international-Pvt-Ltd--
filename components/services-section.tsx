"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Plane, 
  FileText, 
  Users, 
  HeadphonesIcon,
  MapPin,
  Shield,
  Globe
} from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Plane,
    title: "International Visitor Visa Guidance",
    description: "Expert guidance for global visitor visa applications worldwide",
    features: ["Application Support", "Document Checklist", "Process Guidance"]
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description: "Comprehensive document preparation and verification assistance",
    features: ["Document Review", "Attestation Help", "Translation Services"]
  },
  {
    icon: Users,
    title: "Immigration Consultation",
    description: "Professional advice on immigration pathways and visa options",
    features: ["Expert Guidance", "Pathway Planning", "Eligibility Assessment"]
  },
  {
    icon: Shield,
    title: "Application Assistance",
    description: "End-to-end support for visa application submission",
    features: ["Form Filling Help", "Error Prevention", "Submission Support"]
  },
  {
    icon: Globe,
    title: "Travel Consultation",
    description: "Complete travel planning and preparation guidance",
    features: ["Travel Planning", "Itinerary Help", "Pre-departure Guidance"]
  },
  {
    icon: HeadphonesIcon,
    title: "Client Support",
    description: "Dedicated support throughout your visa journey",
    features: ["24/7 Assistance", "Query Resolution", "Status Updates"]
  },
  {
    icon: MapPin,
    title: "Worldwide Guidance",
    description: "Expert advice for multiple destination options globally",
    features: ["Country Selection", "Requirement Analysis", "Best Route Guidance"]
  }
]

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-blue text-sm font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            <span className="text-foreground">Professional</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-cyan-glow">
              Documentation & Guidance
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From visa documentation to travel consultation, we provide comprehensive support for your international journey.
          </p>
        </motion.div>

        {/* What We Provide vs What You Provide */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-sky-blue mb-6">What SkyFly Provides</h3>
            <ul className="space-y-4">
              {["Documentation guidance", "Visa consultation", "Travel support", "Immigration guidance", "Client assistance", "Application support"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-blue" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-orange mb-6">What You Provide</h3>
            <ul className="space-y-4">
              {["Valid passport", "Required travel documents", "Identity proof", "Supporting documents", "Passport-size photos", "Bank statements"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-6 h-full hover:border-sky-blue/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-blue/20 to-cyan-glow/10 flex items-center justify-center mb-5 group-hover:from-sky-blue/30 group-hover:to-cyan-glow/20 transition-colors duration-300"
                  >
                    <service.icon className="w-7 h-7 text-sky-blue" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange-light text-navy font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            Get Free Consultation
          </Button>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
