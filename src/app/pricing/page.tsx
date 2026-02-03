import { PageHeader } from "@/components/layout/PageHeader"
import { CallToAction } from "@/components/sections/CallToAction"
import styles from "./page.module.css"

export default function Pricing() {
    return (
        <>
            <PageHeader
                title="Simple Pricing"
                subtitle="Transparent capabilities for high-growth teams."
            />

            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.planName}>Consulting</h3>
                        <div className={styles.price}>Custom</div>
                        <span className={styles.period}>Project based</span>
                        <ul className={styles.features}>
                            <li className={styles.feature}>Dedicated Team</li>
                            <li className={styles.feature}>Custom Architecture</li>
                            <li className={styles.feature}>Full-stack Development</li>
                            <li className={styles.feature}>System Integration</li>
                        </ul>
                        <button className={styles.btn}>Contact Sales</button>
                    </div>

                    <div className={`${styles.card} ${styles.featured}`}>
                        <h3 className={styles.planName}>SaaS License</h3>
                        <div className={styles.price}>$499</div>
                        <span className={styles.period}>/month per facility</span>
                        <ul className={styles.features}>
                            <li className={styles.feature}>Unlimited Users</li>
                            <li className={styles.feature}>Real-time Analytics</li>
                            <li className={styles.feature}>Inventory Management</li>
                            <li className={styles.feature}>24/7 Priority Support</li>
                        </ul>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>Start Trial</button>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.planName}>Enterprise</h3>
                        <div className={styles.price}>Call</div>
                        <span className={styles.period}>for volume licensing</span>
                        <ul className={styles.features}>
                            <li className={styles.feature}>On-premise Deployment</li>
                            <li className={styles.feature}>Custom AI Models</li>
                            <li className={styles.feature}>SLA Guarantee</li>
                            <li className={styles.feature}>Dedicated Success Manager</li>
                        </ul>
                        <button className={styles.btn}>Contact Sales</button>
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    )
}
