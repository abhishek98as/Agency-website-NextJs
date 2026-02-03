"use client"

import { motion } from "framer-motion"

export function AnimatedCheck() {
    return (
        <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
            <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M1 5L4.5 8.5L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </svg>
        </div>
    )
}
