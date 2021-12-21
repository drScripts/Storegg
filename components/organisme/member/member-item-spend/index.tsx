import Image from 'next/image'
import NumberFormat from 'react-number-format'

interface MemberItemSpendProps {
    typeCat: string
    category: string
    spend: string
    icon: "desktop-game-icon" | "mobile-game-icon"
}

export default function MemberItemSpend(props: MemberItemSpendProps) {

    const { typeCat, category, spend, icon } = props

    return (
        <div className="col ps-15 pe-15 pb-lg-0 pb-4">
            <div className="categories-card">
                <div className="d-flex align-items-center mb-24">
                    <Image src={`/icon/${icon}.svg`} width={60} height={60} />
                    <p className="color-palette-1 mb-0 ms-12">{typeCat}<br /> {category}</p>
                </div>
                <div>
                    <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                    <p className="text-2xl color-palette-1 fw-medium m-0">
                        <NumberFormat value={spend} displayType='text' prefix='Rp ' thousandSeparator="." decimalSeparator=',' />
                    </p>
                </div>
            </div>
        </div>
    )
}