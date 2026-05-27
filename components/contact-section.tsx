/**
 * Contact Section Component
 * 
 * Features:
 * - Contact form with name, email, phone, country, and message
 * - Contact information cards (phone, email, address, hours)
 * - Social media links (Instagram, Facebook, WhatsApp)
 * - Google Maps embed showing office location
 * - Get Directions button with Google Maps link
 * - Success confirmation with WhatsApp redirect
 * - Form validation and submission
 * 
 * This section provides multiple ways for users to get in touch:
 * 1. Contact form
 * 2. Social media
 * 3. WhatsApp direct chat
 * 4. Phone call
 * 5. Email
 * 6. Visit office
 */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

/**
 * List of countries for the "Country Interested" dropdown
 * Includes main European destinations and other popular countries
 */
const countries = [
  "Germany", "France", "Spain", "Portugal", "Italy", "Netherlands", "Belgium",
  "Switzerland", "Austria", "Poland", "Lithuania", "Latvia", "Estonia",
  "Czech Republic", "Slovakia", "Hungary", "Denmark", "Sweden", "Norway",
  "Finland", "Greece", "Malta", "Croatia", "Slovenia", "Romania", "Bulgaria",
  "Luxembourg", "Ireland", "Iceland", "Cyprus", "UK", "Australia", "New Zealand", "Singapore"
]

/**
 * ContactSection Component
 * 
 * Main contact page section with form, contact info, and map
 * Manages form state and handles WhatsApp redirection on submit
 */
export function ContactSection() {
  // Form state - tracks user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  })
  
  // UI state - controls loading and success screens
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  /**
   * Handle form submission
   * 
   * Process:
   * 1. Prevent default form submission
   * 2. Set loading state for 1 second
   * 3. Show success/confirmation screen
   * 4. After 2 seconds, open WhatsApp with pre-filled message
   * 5. Reset form for next submission
   * 
   * WhatsApp Format:
   * - Sends pre-composed message with user's details
   * - Opens chat with business WhatsApp number
   * - Allows immediate response from team
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission with delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      const message = encodeURIComponent(
        `Hi, I'm ${formData.name}. I'm interested in visa consultation for ${formData.country}. ${formData.message}`
      )
      window.open(`https://wa.me/918098118198?text=${message}`, '_blank')
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", country: "", message: "" })
    }, 2000)
  }

  /**
   * Contact information for the contact cards
   * Each object includes icon, title, details, and action link
   */
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["8098118198"],
      action: "tel:8098118198"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["adminskyfly2026@gmail.com"],
      action: "mailto:adminskyfly2026@gmail.com"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["NO:54 (1st Floor), Vanapattarai Street,", "Trichy, Tamil Nadu – 620002, India"],
      action: "https://maps.google.com/?q=NO:54+Vanapattarai+Street+Trichy+Tamil+Nadu+620002+India"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 10:00 AM - 5:30 PM", "Sunday: Holiday / Closed"],
      action: "#"
    }
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-navy-light/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto glass-card rounded-2xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center"
            >
              <MessageCircle className="w-10 h-10 text-green-400" />
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
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-navy-light/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-blue text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            <span className="text-foreground">Start Your</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-cyan-glow">
              Global Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to explore worldwide opportunities? Contact us for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
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
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
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
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Your Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-navy-light/50 border-border focus:border-sky-blue resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange hover:bg-orange-light text-navy font-semibold py-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : undefined}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-5 hover:border-sky-blue/30 transition-all duration-300 block"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-blue/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-sky-blue" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/skyfly__international"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center hover:from-purple-500/30 hover:to-pink-500/30 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-pink-400" />
                </a>
                <a
                  href="https://facebook.com/SkyflyOverseas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-blue-400" />
                </a>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/918098118198"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-green-500/30 transition-all duration-300 glow-cyan cursor-pointer block"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Chat on WhatsApp</h4>
                <p className="text-muted-foreground">Get instant response from our team</p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-4 md:p-6 overflow-hidden">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-blue" />
              Our Office Location
            </h3>
            <div className="rounded-xl overflow-hidden border border-border/50 relative">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890123!2d78.70329347480254!3d10.79205258930123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5c7a7777777%3A0x1234567890123456!2sVanapattarai%20Street%2C%20Trichy%2C%20Tamil%20Nadu%20620002!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
                title="SkyFly International Office Location"
              />
              {/* Overlay for premium look */}
              <div className="absolute inset-0 pointer-events-none border border-sky-blue/10 rounded-xl" />
            </div>
            
            {/* Address & Directions */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-muted-foreground text-sm">
                <p className="font-medium text-foreground">NO:54 (1st Floor), Vanapattarai Street</p>
                <p>Trichy, Tamil Nadu – 620002, India</p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=NO:54+Vanapattarai+Street+Trichy+Tamil+Nadu+620002+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-sky-blue hover:bg-sky-blue-light text-navy font-semibold w-full sm:w-auto">
                  <Navigation className="mr-2 w-4 h-4" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
