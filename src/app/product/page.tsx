"use client"

import { PageHeader } from "@/components/layout/PageHeader"
import { CallToAction } from "@/components/sections/CallToAction"
import { AnimatedCheck } from "@/components/ui/AnimatedCheck"
import { motion } from "framer-motion"

export default function Product() {
    return (
        <>
            <PageHeader
                title="Nexus Mfg OS"
                subtitle="The all-in-one SaaS operating system for modern manufacturing facilities."
            />

            <div className="container section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Animated Mockup Placeholder */}
                    <motion.div
                        className="bg-card glass p-8 rounded-2xl h-96 flex items-center justify-center border border-border relative overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50" />
                        <div className="relative z-10 text-center">
                            <motion.div
                                className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="text-4xl">📊</span>
                            </motion.div>
                            <div className="space-y-2">
                                <div className="h-4 w-48 bg-muted/20 rounded mx-auto" />
                                <div className="h-4 w-32 bg-muted/20 rounded mx-auto" />
                            </div>
                        </div>
                    </motion.div>

                    <div>
                        <motion.h2
                            className="text-3xl font-bold mb-6 font-outfit"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Production Visibility
                        </motion.h2>
                        <ul className="space-y-6">
                            {[
                                "Real-time Inventory Tracking",
                                "Machine Maintenance Alerts",
                                "Shift Scheduling & Workforce Management",
                                "IoT Sensor Integration",
                                "Exportable Reporting"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-4 text-lg"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                >
                                    <AnimatedCheck />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    )
}
