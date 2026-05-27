"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Plane, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationModal } from "@/components/consultation-modal"

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 via-navy to-orange/10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(100, 180, 255, 0.2) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(100, 180, 255, 0.2) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating Planes */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Plane className="w-16 h-16 text-sky-blue/20 rotate-45" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Plane className="w-12 h-12 text-orange/20 -rotate-12" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto glow-sky"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-orange to-orange-light rounded-2xl flex items-center justify-center"
          >
            <Plane className="w-10 h-10 text-navy" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Ready to Start Your</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-cyan-glow">
              European Journey?
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Book a free consultation with our experts today. Let us help you with visa documentation 
            and guide you through every step of the process.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Expert Guidance</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-orange hover:bg-orange-light text-navy font-semibold px-8 py-6 text-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="tel:8098118198">
                <Button size="lg" variant="outline" className="border-sky-blue text-sky-blue hover:bg-sky-blue/10 px-8 py-6 text-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: 8098118198
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
