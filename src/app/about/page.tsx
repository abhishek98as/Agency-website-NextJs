import styles from "./page.module.css"

export default function About() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>We Are Nexus</h1>
                    <p className={styles.subtitle}>
                        A team of visionaries, engineers, and strategists dedicated to redefining how businesses operate in the digital age.
                    </p>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Enterprise Clients</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>120%</span>
                            <span className={styles.statLabel}>Avg ROI Increase</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>5+</span>
                            <span className={styles.statLabel}>Years Innovation</span>
                        </div>
                    </div>

                    <div className={styles.textBlock}>
                        <p>
                            Founded in 2021, Nexus started as a response to the growing disconnect between legacy consulting and modern execution. We saw companies struggling to adopt AI not because the technology wasn't ready, but because the strategy wasn't aligned.
                        </p>
                        <p>
                            Today, we serve clients ranging from Upwork's top-tier enterprises to agile startups. Our agency model allows us to deploy specialized teams for software development, while our SaaS products provide scalable solutions for the manufacturing sector.
                        </p>
                        <p>
                            Whether it's automating document processing or building a full-scale ecommerce platform, our mission remains the same: <strong>simplify the complex.</strong>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
