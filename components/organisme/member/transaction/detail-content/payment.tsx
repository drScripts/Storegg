import DetailItem from './detail-item'

export default function Payment() {
    return (
        <div className="payment pt-10 pb-10">
            <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
            <DetailItem title='Your Account Name' value='Masayoshi Angga Zero' />
            <DetailItem title='Type' value='Worldwide Transfer' />
            <DetailItem title='Bank Name' value='Mandiri' />
            <DetailItem title='Bank Account Name' value='PT Store GG Indonesia' />
            <DetailItem title='Bank Number' value='1800 - 9090 - 2021' />
        </div>
    )
}