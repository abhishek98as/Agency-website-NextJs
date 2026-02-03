import styles from "./PageHeader.module.css"

interface PageHeaderProps {
    title: string
    subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </section>
    )
}
