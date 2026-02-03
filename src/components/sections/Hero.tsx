"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react"
import styles from "./Hero.module.css"

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Enhanced Background Blobs with Multiple Layers */}
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
            <div className={`${styles.blob} ${styles.blob3}`} />
            
            {/* Floating Particles */}
            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={styles.particle} style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${15 + Math.random() * 10}s`
                    }} />
                ))}
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className={styles.eyebrow}>
                        <Sparkles size={16} strokeWidth={2} />
                        <span>Powering the Future of Enterprise</span>
                        <Zap size={14} />
                    </span>
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                >
                    Transform Your Business <br />
                    with <span className="text-gradient">Intelligent Solutions</span>
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    From custom software development to AI-powered automation, cloud services, 
                    and manufacturing SaaS—we deliver cutting-edge solutions trusted by startups 
                    and enterprises worldwide.
                </motion.p>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                >
                    <div className={styles.stat}>
                        <TrendingUp size={20} className={styles.statIcon} />
                        <span className={styles.statValue}>500+</span>
                        <span className={styles.statLabel}>Projects Delivered</span>
                    </div>
                    <div className={styles.stat}>
                        <Sparkles size={20} className={styles.statIcon} />
                        <span className={styles.statValue}>98%</span>
                        <span className={styles.statLabel}>Client Satisfaction</span>
                    </div>
                    <div className={styles.stat}>
                        <Zap size={20} className={styles.statIcon} />
                        <span className={styles.statValue}>24/7</span>
                        <span className={styles.statLabel}>Expert Support</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.buttons}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                >
                    <Link href="/contact-sales" className={styles.primaryBtn}>
                        <span>Start Your Project</span>
                        <ArrowRight size={18} strokeWidth={2.5} />
                    </Link>
                    <Link href="/solutions" className={styles.secondaryBtn}>
                        Explore Solutions
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
