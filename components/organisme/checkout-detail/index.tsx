import { useEffect, useState } from 'react'
import { NominalType } from '../../../services/data-types'
import { PaymentInformation } from '../top-up-fom'
import NumberFormat from 'react-number-format'

interface PaymentInformationType { playerId: string, nominal: NominalType, payment: PaymentInformation, bank: string }

export default function CheckoutDetail() {

    const [payment, setpayment] = useState({} as PaymentInformationType)

    useEffect(() => {
        const payments: PaymentInformationType = JSON.parse(localStorage.getItem("paymentInformation") ?? "");
        setpayment(payments)
    }, [])

    return (
        <>
            <div className="purchase pt-md-50 pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                <p className="text-lg color-palette-1 mb-20">Your Game ID <span
                    className="purchase-details">{`${payment.playerId}`}</span></p>
                <p className="text-lg color-palette-1 mb-20">Order ID <span className="purchase-details">#GG001</span></p>
                <p className="text-lg color-palette-1 mb-20">Item <span className="purchase-details">{`${payment.nominal?.coinQuantity} ${payment.nominal?.coinName}`}</span></p>
                <p className="text-lg color-palette-1 mb-20">Price <span className="purchase-details">
                    <NumberFormat value={payment.nominal?.price} displayType='text' prefix='Rp ' thousandSeparator="." decimalSeparator=',' />
                </span></p>
                <p className="text-lg color-palette-1 mb-20">Tax (10%) <span className="purchase-details">
                    <NumberFormat value={Number(payment.nominal?.price) * 0.1} displayType='text' prefix='Rp ' thousandSeparator="." decimalSeparator=',' />
                </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">Total <span className="purchase-details color-palette-4">
                    <NumberFormat value={Number(payment.nominal?.price) + (Number(payment.nominal?.price) * 0.1)} displayType='text' prefix='Rp ' thousandSeparator="." decimalSeparator=',' />
                </span></p>
            </div>
            <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <p className="text-lg color-palette-1 mb-20">Your Account Name <span className="purchase-details">{`${payment.bank}`}</span></p>
                <p className="text-lg color-palette-1 mb-20">Type <span className="payment-details">{`${payment.payment?.payment.type}`}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">Bank Name <span className="payment-details">{`${payment.payment?.bank.bankName}`}</span></p>
                <p className="text-lg color-palette-1 mb-20">Bank Account Name <span className="payment-details">{`${payment.payment?.bank.name}`}</span></p>
                <p className="text-lg color-palette-1 mb-20">Bank Number <span className="payment-details">
                    <NumberFormat value={payment.payment?.bank.noRekening} displayType='text' format={'### - ### - ###'} />
                </span>
                </p>
            </div>
        </>
    )
}