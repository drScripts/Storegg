import LatestTransaction from '../../latest-transaction'
import ButtonCategory from './button-category'

export default function TransactionContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
                <div className="mb-30">
                    <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
                    <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
                </div>
                <div className="row mt-30 mb-20">
                    <div className="col-lg-12 col-12 main-content">
                        <div id="list_status_title">
                            <ButtonCategory href='#' isActive title='All Trx' dataFilter='*' />
                            <ButtonCategory href='#' title='Success' dataFilter='success' />
                            <ButtonCategory href='#' title='Pending' dataFilter='pending' />
                            <ButtonCategory href='#' title='Failed' dataFilter='failed' />
                        </div>
                    </div>
                </div>
                <LatestTransaction isAction />
            </div>
        </main>
    )
}