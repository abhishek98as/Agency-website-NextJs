import { PageHeader } from "@/components/layout/PageHeader"
import { CallToAction } from "@/components/sections/CallToAction"

export default function Resources() {
    return (
        <>
            <PageHeader
                title="Resources"
                subtitle="Insights, case studies, and guides on software, AI, and manufacturing."
            />
            <div className="container" style={{ padding: "80px 24px", textAlign: "center" }}>
                <p className="text-muted mb-8">Latest articles coming soon.</p>
                <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} style={{ background: "var(--card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--border)", textAlign: "left" }}>
                            <div style={{ height: "200px", background: "var(--bg-secondary)", borderRadius: "8px", marginBottom: "16px" }}></div>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "8px" }}>The Future of AI in Manufacturing</h3>
                            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Read about how AI is transforming the shop floor...</p>
                        </div>
                    ))}
                </div>
            </div>
            <CallToAction />
        </>
    )
}
