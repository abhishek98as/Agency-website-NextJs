"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-14 h-8 bg-muted rounded-full opacity-20" />
    }

    const isDark = theme === "dark"

    return (
        <div
            className={`w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-500 flex items-center ${isDark ? "bg-slate-800 border border-slate-700 justify-end" : "bg-sky-200 border border-sky-300 justify-start"
                }`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            role="button"
            tabIndex={0}
        >
            <motion.div
                className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center z-10"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
                <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                >
                    {isDark ? (
                        <Moon size={14} className="text-slate-800" />
                    ) : (
                        <Sun size={14} className="text-amber-500" />
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}
