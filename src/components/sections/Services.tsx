"use client"

import { motion } from "framer-motion"
import {
    Code, ShoppingCart, Box, BarChart3, Cloud, FileSpreadsheet,
    Sparkles, Cpu, Database
} from "lucide-react"
import styles from "./Services.module.css"

const SERVICES = [
    {
        icon: Code,
        title: "Software Development",
        desc: "Custom software solutions tailored to your unique business needs, from web apps to enterprise systems.",
        color: "#3b82f6"
    },
    {
        icon: ShoppingCart,
        title: "Ecommerce Solutions",
        desc: "Scalable online stores with seamless payment integrations and inventory management.",
        color: "#22d3ee"
    },
    {
        icon: Box,
        title: "Manufacturing SaaS",
        desc: "Our proprietary SaaS product optimizes production lines and inventory for manufacturing clients.",
        color: "#a78bfa"
    },
    {
        icon: BarChart3,
        title: "AI & Realtime Dashboards",
        desc: "Data-driven insights with real-time analytics and AI-powered forecasting.",
        color: "#f59e0b"
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        desc: "Secure and scalable cloud infrastructure management and consulting.",
        color: "#10b981"
    },
    {
        icon: FileSpreadsheet,
        title: "Intelligent Automation",
        desc: "Automate Excel tasks, API workflows, portal scraping, and document processing with AI.",
        color: "#ec4899"
    },
    {
        icon: Cpu,
        title: "Consulting Services",
        desc: "Strategic technology consulting for startups and ecommerce vendors to accelerate growth.",
        color: "#8b5cf6"
    },
    {
        icon: Database,
        title: "API Integration",
        desc: "Seamless API development and third-party integrations for connected ecosystems.",
        color: "#06b6d4"
    }
]

export function Services() {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.eyebrow}>
                        <Sparkles size={16} />
                        Our Expertise
                    </span>
                    <h2 className={styles.title}>
                        Comprehensive Solutions for <span className="text-gradient">Modern Enterprises</span>
                    </h2>
                    <p className={styles.subtitle}>
                        From idea to execution, we provide end-to-end technology solutions 
                        that drive innovation and deliver measurable results.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div 
                                className={styles.iconWrapper}
                                style={{ 
                                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                                    borderColor: `${service.color}30`
                                }}
                            >
                                <service.icon size={28} style={{ color: service.color }} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                            
                            {/* Hover Glow Effect */}
                            <div 
                                className={styles.cardGlow}
                                style={{ background: `radial-gradient(circle at center, ${service.color}20, transparent 70%)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
