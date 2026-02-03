"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react"
import styles from "./CallToAction.module.css"

const BENEFITS = [
    "Free consultation & project estimation",
    "Dedicated team of experts",
    "Agile development methodology",
    "24/7 support & maintenance"
]

export function CallToAction() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badge}>
                        <Sparkles size={16} />
                        <span>Ready to Transform?</span>
                    </div>
                    
                    <h2 className={styles.title}>
                        Let&apos;s Build Something <span className="text-gradient">Amazing Together</span>
                    </h2>
                    
                    <p className={styles.description}>
                        Join 500+ companies that have transformed their business with our solutions.
                        Get started today with a free consultation.
                    </p>

                    <div className={styles.benefits}>
                        {BENEFITS.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={styles.benefit}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <CheckCircle size={20} className={styles.checkIcon} />
                                <span>{benefit}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link href="/contact-sales" className={styles.primaryBtn}>
                            <span>Start Your Project</span>
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </Link>
                        <Link href="/request-demo" className={styles.secondaryBtn}>
                            Request a Demo
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className={styles.blob1} />
            <div className={styles.blob2} />
        </section>
    )
}
