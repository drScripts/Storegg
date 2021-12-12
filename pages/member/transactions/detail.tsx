import SideBar from '../../../components/organisme/side-bar'
import DetailContent from '../../../components/organisme/member/transaction/detail-content'

export default function TransactionDetails() {
    return (
        <section className="transactions-detail overflow-auto">
            <SideBar menuActive='transaction' />
            <DetailContent />
        </section>
    )
}