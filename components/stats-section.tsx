"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Globe, CheckCircle, Briefcase } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Clients",
    color: "sky-blue"
  },
  {
    icon: Globe,
    value: 29,
    suffix: "+",
    label: "Countries Supported",
    color: "cyan-glow"
  },
  {
    icon: CheckCircle,
    value: 10000,
    suffix: "+",
    label: "Successful Consultations",
    color: "green-400"
  },
  {
    icon: Briefcase,
    value: 8,
    suffix: "+",
    label: "Years Experience",
    color: "orange"
  }
]

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-navy-light/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(45deg, rgba(100, 180, 255, 0.1) 25%, transparent 25%),
                            linear-gradient(-45deg, rgba(100, 180, 255, 0.1) 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, rgba(100, 180, 255, 0.1) 75%),
                            linear-gradient(-45deg, transparent 75%, rgba(100, 180, 255, 0.1) 75%)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/5 flex items-center justify-center`}
                style={{
                  background: stat.color === "sky-blue" 
                    ? "linear-gradient(135deg, rgba(100, 180, 255, 0.2), rgba(100, 180, 255, 0.05))"
                    : stat.color === "cyan-glow"
                    ? "linear-gradient(135deg, rgba(100, 255, 220, 0.2), rgba(100, 255, 220, 0.05))"
                    : stat.color === "green-400"
                    ? "linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0.05))"
                    : "linear-gradient(135deg, rgba(255, 150, 50, 0.2), rgba(255, 150, 50, 0.05))"
                }}
              >
                <stat.icon 
                  className="w-8 h-8"
                  style={{
                    color: stat.color === "sky-blue" 
                      ? "#64b4ff"
                      : stat.color === "cyan-glow"
                      ? "#64ffdc"
                      : stat.color === "green-400"
                      ? "#4ade80"
                      : "#ff9a3c"
                  }}
                />
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
