"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowUpRight } from "lucide-react"
import styles from "./Footer.module.css"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Nexus Agency
                        </Link>
                        <p className={styles.brandDesc}>
                            We build future-ready software solutions for startups and enterprises.
                            Specializing in AI automation, SaaS, eCommerce, and Cloud Infrastructure.
                        </p>
                        <div className={styles.contactInfo}>
                            <a href="mailto:hello@nexusagency.com" className={styles.contactItem}>
                                <Mail size={16} />
                                <span>hello@nexusagency.com</span>
                            </a>
                            <a href="tel:+1234567890" className={styles.contactItem}>
                                <Phone size={16} />
                                <span>+1 (234) 567-890</span>
                            </a>
                            <div className={styles.contactItem}>
                                <MapPin size={16} />
                                <span>Global Remote Team</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <div className={styles.links}>
                            <Link href="/about">About Us</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/enterprise">Enterprise</Link>
                            <Link href="/contact-sales">Contact Sales</Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Services</h4>
                        <div className={styles.links}>
                            <Link href="/product">SaaS Product</Link>
                            <Link href="/solutions">Solutions</Link>
                            <Link href="/resources">Resources</Link>
                            <Link href="/request-demo">Request Demo</Link>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Solutions</h4>
                        <div className={styles.links}>
                            <Link href="/solutions#software">Software Development</Link>
                            <Link href="/solutions#ecommerce">Ecommerce</Link>
                            <Link href="/solutions#ai">AI & Automation</Link>
                            <Link href="/solutions#cloud">Cloud Services</Link>
                        </div>
                    </div>

                    {/* Social & Newsletter */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Stay Connected</h4>
                        <p className={styles.newsletterDesc}>
                            Get the latest updates on tech trends and our services.
                        </p>
                        <div className={styles.social}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Twitter size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Github size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Nexus Agency. All rights reserved.
                    </p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className={styles.bgDecoration} />
        </footer>
    )
}
