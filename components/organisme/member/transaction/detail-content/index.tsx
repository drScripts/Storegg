import Header from './header'
import Purchase from './purchase'
import Payment from './payment'
import Link from 'next/link'

export default function DetailContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
                <div className="details">
                    <div className="main-content main-content-card overflow-auto">
                        <section className="checkout mx-auto">
                            <Header deviceCat='Mobile' status='pending' title='Mobile Legends: The New
                                            Battle 2021' imgSrc='Thumbnail-3.png' />
                            <hr />
                            <Purchase />
                            <Payment />
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