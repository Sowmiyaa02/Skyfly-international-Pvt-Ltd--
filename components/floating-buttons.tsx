"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918098118198"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="hidden md:block glass-card px-4 py-2 rounded-lg"
      >
        <p className="text-sm text-foreground whitespace-nowrap">Chat with us!</p>
      </motion.div>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
    </motion.a>
  )
}

export function StickyConsultationBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass py-3 px-4"
    >
      <div className="flex items-center justify-between gap-3">
        <a
          href="tel:8098118198"
          className="flex-1 flex items-center justify-center gap-2 bg-sky-blue text-navy font-semibold py-3 rounded-lg"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/918098118198"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-lg"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
