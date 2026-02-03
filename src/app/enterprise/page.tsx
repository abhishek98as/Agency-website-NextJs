import { PageHeader } from "@/components/layout/PageHeader"
import { CallToAction } from "@/components/sections/CallToAction"

export default function Enterprise() {
    return (
        <>
            <PageHeader
                title="Enterprise Solutions"
                subtitle="Scalable, secure, and reliable technology for large organizations."
            />
            <div className="container" style={{ padding: "80px 24px" }}>
                <p className="text-center text-muted">
                    We partner with Fortune 500 companies to deliver digital transformation at scale.
                    Our enterprise services include legacy modernization, cloud migration, and custom AI implementation.
                </p>
            </div>
            <CallToAction />
        </>
    )
}
