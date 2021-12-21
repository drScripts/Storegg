import DetailItem from './detail-item'

interface PurchaseProps {
    gameId: string,
    item: string,
    price: string,
    tax: string,
    id: string,
}

export default function Purchase(props: PurchaseProps) {
    const { gameId, item, price, tax, id } = props

    return (
        <div className="purchase pt-30">
            <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
            <DetailItem title='Your Game ID' value={gameId} />
            <DetailItem title='Order ID' value={id} />
            <DetailItem title='Item' value={item} />
            <DetailItem isPrice title='Price' value={price} />
            <DetailItem isPrice title='Tax (10%)' value={`${tax}`} />
            <DetailItem isPrice title='Total' value={`${((Number(price) + Number(tax)))}`} palleteType={4} />
        </div>
    )
}