export interface StepProps {
    src: "step1" | "step2" | "step3"
    title: string
    desc: string
}

export default function StepItem(props: StepProps) {
    const { src, title, desc } = props
    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <img src={`/icon/${src}.svg`} className="mb-30" width="80" height="80" />
                <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
                <p className="text-lg color-palette-1 mb-0">{desc}</p>
            </div>
        </div>
    )
}