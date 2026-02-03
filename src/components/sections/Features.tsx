"use client"

import { motion } from "framer-motion"
import { 
    Zap, Shield, Headphones, TrendingUp, 
    Globe, Award, Users, Target 
} from "lucide-react"
import styles from "./Features.module.css"

const FEATURES = [
    {
        icon: Zap,
        title: "Lightning Fast Delivery",
        description: "Agile development with rapid iteration cycles to get your product to market faster."
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade security protocols and compliance with industry standards like SOC 2, GDPR."
    },
    {
        icon: Headphones,
        title: "24/7 Expert Support",
        description: "Round-the-clock technical support from our dedicated team of specialists."
    },
    {
        icon: TrendingUp,
        title: "Scalable Architecture",
        description: "Built to scale seamlessly from startup to enterprise without performance loss."
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Multi-region deployment capabilities with CDN integration for worldwide performance."
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "500+ successful projects with 98% client satisfaction and retention rate."
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Experienced professionals with deep expertise across multiple technologies."
    },
    {
        icon: Target,
        title: "Results Driven",
        description: "Focus on measurable outcomes and ROI that directly impact your bottom line."
    }
]

export function Features() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        Why Choose <span className="text-gradient">Nexus Agency</span>
                    </h2>
                    <p className={styles.subtitle}>
                        We combine technical excellence with business acumen to deliver solutions 
                        that drive real results for your organization.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.featureCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className={styles.iconContainer}>
                                <feature.icon size={24} strokeWidth={2} />
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
