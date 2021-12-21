import Header from './header'
import Purchase from './purchase'
import Payment from './payment'
import Link from 'next/link'
import { HistoryTransaction } from '../../../../../services/data-types'

interface DetailContentProps {
    transaction: HistoryTransaction
}

export default function DetailContent(props: DetailContentProps) {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
                <div className="details">
                    <div className="main-content main-content-card overflow-auto">
                        <section className="checkout mx-auto">
                            <Header deviceCat={props.transaction.historyVoucherTopup.category} status={props.transaction.status} title={props.transaction.historyVoucherTopup.gameName} imgSrc={props.transaction.historyVoucherTopup.thumbnail} />

                            <hr />

                            <Purchase gameId={props.transaction.accountUser} item={`${props.transaction.historyVoucherTopup.coinQuantity} ${props.transaction.historyVoucherTopup.coinName}`} price={`${props.transaction.value}`} tax={`${props.transaction.tax}`} id={props.transaction._id} />

                            <Payment accountName={props.transaction.name} bankAccountName={props.transaction.historyPayment.name} bankName={props.transaction.historyPayment.bankName} bankNumber={props.transaction.historyPayment.noRekening} type={props.transaction.historyPayment.type} />

                            <div className="d-md-block d-flex flex-column w-100">
                                <Link href="#">
                                    <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                                        role="button">WhatsApp ke Admin</a>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}