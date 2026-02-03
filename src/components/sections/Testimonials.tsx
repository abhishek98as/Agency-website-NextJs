"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import styles from "./Testimonials.module.css"

const TESTIMONIALS = [
    {
        quote: "Nexus transformed our manufacturing process with their custom SaaS solution. Efficiency increased by 40% and costs decreased significantly.",
        author: "Sarah Johnson",
        role: "COO, AutoParts Manufacturing",
        initials: "SJ",
        rating: 5,
        image: null
    },
    {
        quote: "The AI dashboard they built gives us real-time insights we didn't know we needed. Game changer for our data-driven decision making.",
        author: "Michael Thompson",
        role: "Director of Technology, DataFlow",
        initials: "MT",
        rating: 5,
        image: null
    },
    {
        quote: "Exceptional quality and speed. We hired them for a complex ecommerce migration and it was seamless. Highly recommend their services.",
        author: "David Rodriguez",
        role: "Founder & CEO, StyleHub",
        initials: "DR",
        rating: 5,
        image: null
    },
    {
        quote: "Their automation solutions saved us 20 hours per week on manual Excel work. The ROI was immediate and substantial.",
        author: "Emily Chen",
        role: "Operations Manager, TechCorp",
        initials: "EC",
        rating: 5,
        image: null
    }
]

export function Testimonials() {
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
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className={styles.subtitle}>
                        We work with startups and enterprises across the globe to deliver measurable impact and lasting value.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className={styles.quoteIcon}>
                                <Quote size={32} strokeWidth={1.5} />
                            </div>
                            
                            <div className={styles.stars}>
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            
                            <p className={styles.quote}>"{item.quote}"</p>
                            
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {item.initials}
                                </div>
                                <div className={styles.info}>
                                    <h4 className={styles.authorName}>{item.author}</h4>
                                    <p className={styles.authorRole}>{item.role}</p>
                                </div>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className={styles.cardGradient} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
