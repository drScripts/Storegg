import NumberFormat from 'react-number-format'

interface DetailItemProps {
    title: string
    value: string
    palleteType?: string | number
    isRek?: boolean
    isPrice?: boolean
}

export default function DetailItem(props: DetailItemProps) {

    const { title, value, palleteType = '1', isRek = false, isPrice = false } = props


    if (isPrice) {
        return (
            <p className={`text-lg color-palette-${palleteType} mb-20`}>{title} <span
                className="purchase-details"><NumberFormat value={value} prefix='Rp ' thousandSeparator="." decimalSeparator=',' displayType='text' /></span></p>
        )
    } else if (isRek) {
        return (
            <p className={`text-lg color-palette-${palleteType} mb-20`}>{title} <span
                className="purchase-details"><NumberFormat value={value} format={'#### - #### - #### - ####'} displayType='text' /></span></p>
        )
    } else {
        return (
            <p className={`text-lg color-palette-${palleteType} mb-20`}>{title} <span
                className="purchase-details">{value}</span></p>
        )
    }
}