import { PageHeader } from "@/components/layout/PageHeader"
import { Services } from "@/components/sections/Services"
import { CallToAction } from "@/components/sections/CallToAction"

export default function Solutions() {
    return (
        <>
            <PageHeader
                title="Our Solutions"
                subtitle="End-to-end technology services designed to solve your most complex business challenges."
            />
            <Services />
            <CallToAction />
        </>
    )
}
