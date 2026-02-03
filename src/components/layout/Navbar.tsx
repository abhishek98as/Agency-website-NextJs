"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styles from "./Navbar.module.css"
import { ModernThemeToggle } from "@/components/ui/ModernThemeToggle"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/solutions", label: "Solutions" },
    { href: "/resources", label: "Resources" },
    { href: "/enterprise", label: "Enterprise" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav className={cn(styles.navbar, scrolled && styles.scrolled)}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        Nexus Agency
                    </Link>

                    {/* Desktop Nav */}
                    <div className={styles.navLinks}>
                        {NAV_LINKS.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.link}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <button 
                            onClick={() => window.location.href = '/contact-sales'}
                            className={cn(styles.btn, styles["btn-ghost"])}
                        >
                            Contact Sales
                        </button>
                        <Link href="/request-demo" className={cn(styles.btn, styles["btn-primary"])}>
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className={styles.mobileActions}>
                        <ModernThemeToggle />
                        <button
                            className={styles.menuButton}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={cn(styles.mobileMenu, mobileOpen && styles.open)}>
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={styles.link}
                        onClick={() => setMobileOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <hr className="border-gray-800" />
                <button
                    onClick={() => {
                        window.location.href = '/contact-sales'
                        setMobileOpen(false)
                    }}
                    className={cn(styles.btn, styles["btn-ghost"], "text-center")}
                >
                    Contact Sales
                </button>
                <Link
                    href="/request-demo"
                    className={cn(styles.btn, styles["btn-primary"], "text-center")}
                    onClick={() => setMobileOpen(false)}
                >
                    Request Demo
                </Link>
            </div>
        </>
    )
}
