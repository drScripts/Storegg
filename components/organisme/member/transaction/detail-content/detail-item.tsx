interface DetailItemProps {
    title: string
    value: string
    palleteType?: string | number
}

export default function DetailItem(props: DetailItemProps) {

    const { title, value, palleteType = '1' } = props

    return (
        <p className={`text-lg color-palette-${palleteType} mb-20`}>{title} <span
            className="purchase-details">{value}</span></p>
    )
}