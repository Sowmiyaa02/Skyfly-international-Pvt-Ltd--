"use client"

import { motion } from "framer-motion"
import { Shield, Globe, Users, Award, Target, Clock } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Trusted",
      description: "Registered consultancy with complete transparency in all processes"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expert guidance for worldwide destinations including Europe, UK, Australia, NZ & Singapore"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced immigration consultants with in-depth country knowledge"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Thousands of satisfied clients with successful visa documentation"
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Customized documentation support based on your travel requirements"
    },
    {
      icon: Clock,
      title: "End-to-End Support",
      description: "From documentation to travel planning, we guide you throughout"
    }
  ]

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
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
          <span className="text-sky-blue text-sm font-semibold tracking-wider uppercase">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            <span className="text-foreground">Professional Overseas Documentation</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-cyan-glow">
              & Global Visa Guidance
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            SkyFly International Pvt Ltd is a professional overseas documentation and global visa guidance consultancy 
            based in Trichy, India. We specialize in helping clients with visa documentation, immigration guidance, 
            and travel consultation for worldwide destinations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6 group hover:border-sky-blue/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-blue/20 to-cyan-glow/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-sky-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card rounded-2xl p-8 md:p-12 text-center glow-sky"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            To empower individuals by providing reliable, transparent, and professional guidance for overseas 
            travel and immigration. We believe in making international travel accessible to everyone 
            through ethical practices, comprehensive documentation support, and dedicated client assistance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
