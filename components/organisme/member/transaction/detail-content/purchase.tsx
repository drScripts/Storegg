import DetailItem from './detail-item'

export default function Purchase() {
    return (
        <div className="purchase pt-30">
            <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
            <DetailItem title='Your Game ID' value='masayoshizero' />
            <DetailItem title='Order ID' value='#GG001' />
            <DetailItem title='Item' value='250 Diamonds' />
            <DetailItem title='Price' value='Rp 42.280.500' />
            <DetailItem title='Tax (10%)' value='Rp 4.228.000' />
            <DetailItem title='Total' value='Rp 55.000.600' palleteType={4} />
        </div>
    )
}