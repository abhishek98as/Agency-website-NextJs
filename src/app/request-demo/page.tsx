"use client"

import styles from "./page.module.css"

export default function RequestDemo() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Request a Demo</h1>
                <p className={styles.desc}>See our Manufacturing SaaS and AI Dashboards in action.</p>
            </div>

            <form className={styles.form}>
                <div className={styles.group}>
                    <label className={styles.label} htmlFor="email">Work Email</label>
                    <input className={styles.input} id="email" type="email" placeholder="jane@company.com" />
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="product">Product Interest</label>
                    <select className={styles.select} id="product">
                        <option>Manufacturing SaaS</option>
                        <option>AI Realtime Dashboard</option>
                        <option>Cloud Automation</option>
                        <option>Document Automation</option>
                    </select>
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="company">Company Size</label>
                    <select className={styles.select} id="company">
                        <option>1-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-1000 employees</option>
                        <option>1000+ employees</option>
                    </select>
                </div>

                <button type="submit" className={styles.submitBtn}>Schedule Demo</button>
            </form>
        </div>
    )
}
