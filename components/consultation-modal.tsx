/**
 * Consultation Modal Component
 * 
 * A modal overlay that appears when users click "Book Free Consultation"
 * 
 * Features:
 * - Form with name, phone, country, and message fields
 * - WhatsApp integration - submits directly to WhatsApp conversation
 * - Success screen with confirmation animation
 * - Backdrop blur effect
 * - Smooth open/close animations
 * - Mobile responsive
 * 
 * Form flow:
 * 1. User fills in details
 * 2. Submits form (simulated delay of 1 second)
 * 3. Success screen shows with green checkmark
 * 4. After 2 seconds, redirects to WhatsApp chat
 * 5. Pre-filled with user's inquiry message
 */

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

/**
 * Props interface for ConsultationModal component
 * @param isOpen - Controls modal visibility
 * @param onClose - Callback function when modal should close
 */
interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * List of countries available for consultation
 * Includes European countries and popular destinations
 */
const europeanCountries = [
  "Germany", "France", "Spain", "Portugal", "Italy", "Netherlands", "Belgium",
  "Switzerland", "Austria", "Poland", "Lithuania", "Latvia", "Estonia",
  "Czech Republic", "Slovakia", "Hungary", "Denmark", "Sweden", "Norway",
  "Finland", "Greece", "Malta", "Croatia", "Slovenia", "Romania", "Bulgaria",
  "Luxembourg", "Ireland", "Iceland", "Cyprus", "UK", "Australia", "New Zealand", "Singapore"
]

/**
 * ConsultationModal Component
 * 
 * @param isOpen - Whether modal is visible
 * @param onClose - Function called when modal should close
 */
export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    message: ""
  })
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  /**
   * Handle form submission
   * 
   * Process:
   * 1. Prevent default form behavior
   * 2. Show loading state (1 second delay)
   * 3. Display success screen
   * 4. After 2 seconds, redirect to WhatsApp with pre-filled message
   * 5. Reset form and close modal
   * 
   * WhatsApp Integration:
   * - Uses wa.me API to open WhatsApp chat
   * - Pre-fills message with user's inquiry details
   * - Opens in new tab
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      const message = encodeURIComponent(
        `Hi, I'm ${formData.name}. I'm interested in visa consultation for ${formData.country}. ${formData.message}`
      )
      window.open(`https://wa.me/918098118198?text=${message}`, '_blank')
      onClose()
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", country: "", message: "" })
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative glass-card rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-4">
                  Your inquiry has been received. Redirecting to WhatsApp...
                </p>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <MessageCircle className="w-5 h-5 animate-pulse" />
                  <span>Connecting...</span>
                </div>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground mb-2">Book Free Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Fill in your details and our expert will contact you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-navy-light/50 border-border focus:border-sky-blue"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Phone Number *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9999999999"
                      className="bg-navy-light/50 border-border focus:border-sky-blue"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Country Interested *</label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-navy-light/50 border border-border focus:border-sky-blue text-foreground"
                    >
                      <option value="">Select a country</option>
                      {europeanCountries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message (Optional)</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={3}
                      className="bg-navy-light/50 border-border focus:border-sky-blue resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange hover:bg-orange-light text-navy font-semibold py-6"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting, you agree to be contacted by our team via WhatsApp or phone.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
