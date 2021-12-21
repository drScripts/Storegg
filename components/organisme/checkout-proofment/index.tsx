import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { atob } from '../../../services/converter'
import { setCheckout } from '../../../services/player'

export default function CheckoutProofment() {

    const [Check, setCheck] = useState(false)

    const router = useRouter()

    const onSubmit = async () => {
        const paymentInformation = JSON.parse(localStorage.getItem("paymentInformation") ?? "")
        const dataItem = JSON.parse(localStorage.getItem("dataItem") ?? "")

        const dataJson = {
            nominals: paymentInformation.nominal._id,
            vouchers: dataItem._id,
            payments: paymentInformation.payment.payment._id,
            banks: paymentInformation.payment.bank._id,
            accountUser: paymentInformation.playerId,
            name: paymentInformation.bank
        }

        const token = Cookies.get("utkn");

        if (token) {
            const parsedToken = atob(token);
            const data = await setCheckout(parsedToken, dataJson).catch(e => e.response)

            if (data.status === 201) {
                toast.success("Success Add Transaction")
                localStorage.removeItem("paymentInformation")
                localStorage.removeItem("dataItem")
                setTimeout(() => {
                    router.push("/complete-checkout")
                }, 3200)
            } else {
                toast.error(data.data.message);
            }
        }


    }

    return (
        <>
            <label className="checkbox-label text-lg color-palette-1">I have transferred the money
                <input type="checkbox" onChange={e => { setCheck(!Check) }} />
                <span className="checkmark"></span>
            </label>
            <div className="d-md-block d-flex flex-column w-100 pt-50">
                <button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
                    type="button" disabled={!Check} aria-disabled={!Check}
                    onClick={onSubmit}
                >Confirm
                    Payment</button>
            </div>
        </>
    )
}