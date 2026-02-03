"use client"

import styles from "./page.module.css"

export default function ContactSales() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Contact Sales</h1>
                <p className={styles.desc}>Let's discuss how Nexus can accelerate your business growth.</p>
            </div>

            <form className={styles.form}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="firstName">First Name</label>
                        <input className={styles.input} id="firstName" type="text" placeholder="Jane" />
                    </div>
                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="lastName">Last Name</label>
                        <input className={styles.input} id="lastName" type="text" placeholder="Doe" />
                    </div>
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="email">Work Email</label>
                    <input className={styles.input} id="email" type="email" placeholder="jane@company.com" />
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="company">Company Name</label>
                    <input className={styles.input} id="company" type="text" placeholder="Acme Inc." />
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="message">How can we help?</label>
                    <textarea className={styles.textarea} id="message" placeholder="Tell us about your project..." />
                </div>

                <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
        </div>
    )
}
