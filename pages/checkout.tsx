import CheckoutDetail from '../components/organisme/checkout-detail'
import TitleOrder from '../components/organisme/title-order'
import CheckoutProofment from '../components/organisme/checkout-proofment'

export default function Checkout() {
    return (
        <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
            <div className="container-fluid">
                <TitleOrder />
                <hr />
                <CheckoutDetail />
                <CheckoutProofment />
            </div>
        </section>
    )
}