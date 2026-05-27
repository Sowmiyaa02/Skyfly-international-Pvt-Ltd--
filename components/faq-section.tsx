"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What documents are required for European visa application?",
    answer: "The required documents vary by country and visa type. Generally, you will need a valid passport, passport-size photos, travel insurance, hotel bookings, flight itinerary, bank statements, and cover letter. Our team will provide a complete checklist specific to your destination."
  },
  {
    question: "What services does SkyFly International provide?",
    answer: "We provide comprehensive documentation support, visa consultation, immigration guidance, application assistance, and travel consultation for 29+ European countries. Our expert team guides you through every step of the visa application process."
  },
  {
    question: "How can SkyFly help with my visa application?",
    answer: "Our experts review your documents, guide you through the application process, help prepare all required paperwork, provide interview tips, and offer ongoing support until your visa is processed. We ensure your application is complete and accurate."
  },
  {
    question: "Which countries do you provide visa guidance for?",
    answer: "We provide visa documentation support for 29+ European countries including Germany, France, Spain, Italy, Portugal, Netherlands, UK, Switzerland, Austria, and many more. We also assist with Australia, New Zealand, and Singapore."
  },
  {
    question: "What is the consultation process?",
    answer: "The process starts with a free consultation where we understand your travel requirements and assess your eligibility. We then provide a customized document checklist, guide you through document preparation, and support you throughout the application process."
  },
  {
    question: "How do I get started with SkyFly International?",
    answer: "Getting started is easy! Simply click on the Book Free Consultation button or contact us via WhatsApp at 8098118198. Our team will schedule a consultation to understand your requirements and guide you through the next steps."
  },
  {
    question: "What documents do I need to provide?",
    answer: "You typically need to provide your valid passport, identity proof, passport-size photos, bank statements, travel insurance, and supporting documents based on your visa type. We will provide a detailed checklist during consultation."
  },
  {
    question: "Do you provide travel assistance as well?",
    answer: "Yes, we provide comprehensive travel consultation including guidance on travel planning, pre-departure briefing, and general travel tips. We ensure you are well-prepared for your journey."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-sky-blue rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-orange rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            <span className="text-foreground">Frequently Asked</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-light">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our visa documentation and consultation services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full glass-card rounded-xl p-5 text-left transition-all duration-300 ${
                  openIndex === index ? "border-sky-blue/30" : "hover:border-sky-blue/20"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index 
                        ? "bg-sky-blue/20" 
                        : "bg-navy-light"
                    }`}>
                      <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${
                        openIndex === index ? "text-sky-blue" : "text-muted-foreground"
                      }`} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${
                      openIndex === index ? "text-sky-blue" : "text-foreground"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? "text-sky-blue" : "text-muted-foreground"
                    }`} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pl-14 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a 
            href="https://wa.me/918098118198" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-blue hover:text-cyan-glow font-semibold transition-colors"
          >
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
