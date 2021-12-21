import DetailItem from './detail-item'

interface PaymentProps {
    accountName: string,
    type: string,
    bankName: string,
    bankAccountName: string,
    bankNumber: string,
}

export default function Payment(props: PaymentProps) {

    const { accountName, bankAccountName, bankName, bankNumber, type } = props
    return (
        <div className="payment pt-10 pb-10">
            <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
            <DetailItem title='Your Account Name' value={accountName} />
            <DetailItem title='Type' value={type} />
            <DetailItem title='Bank Name' value={bankName} />
            <DetailItem title='Bank Account Name' value={bankAccountName} />
            <DetailItem isRek title='Bank Number' value={bankNumber} />
        </div>
    )
}