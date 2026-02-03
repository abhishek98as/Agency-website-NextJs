"use client"

import { motion } from "framer-motion"
import styles from "./TrustedBy.module.css"

const CLIENTS = [
    { name: "Upwork", subtitle: "Top Rated Plus" },
    { name: "TechCorp", subtitle: "Enterprise Client" },
    { name: "GlobalSaaS", subtitle: "SaaS Partner" },
    { name: "AutoParts Mfg", subtitle: "Manufacturing" },
    { name: "DataFlow", subtitle: "AI Solutions" },
    { name: "CloudScale", subtitle: "Cloud Services" },
    { name: "eCommHub", subtitle: "Ecommerce" },
    { name: "InnovateLab", subtitle: "Startup Partner" },
]

export function TrustedBy() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.title}>Trusted by Innovative Companies Worldwide</p>
                    <p className={styles.subtitle}>
                        Powering success for startups, enterprises, and everything in between
                    </p>
                </motion.div>

                <div className={styles.scrollerWrapper}>
                    <div className={styles.scroller}>
                        <div className={styles.scrollerInner}>
                            {[...CLIENTS, ...CLIENTS].map((client, index) => (
                                <div key={index} className={styles.logoCard}>
                                    <div className={styles.logoName}>{client.name}</div>
                                    <div className={styles.logoSubtitle}>{client.subtitle}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
