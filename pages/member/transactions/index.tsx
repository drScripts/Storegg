import SideBar from '../../../components/organisme/side-bar'
import TransactionContent from '../../../components/organisme/member/transaction/transaction-content'

export default function Transaction() {
    return (
        <section className="transactions overflow-auto">
            <SideBar menuActive='transaction' />
            <TransactionContent />
        </section>
    )
}