import CheckoutDetail from '../components/organisme/checkout-detail'
import TitleOrder from '../components/organisme/title-order'
import CheckoutProofment from '../components/organisme/checkout-proofment'
import { GetServerSideProps } from '../services/data-types'

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


export const getServerSideProps = async ({ req }: GetServerSideProps) => {
    const { utkn } = req.cookies;

    if (utkn === undefined) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false,
            }
        }
    } else {
        return {
            props: {
                user: {}
            }
        }
    }
}