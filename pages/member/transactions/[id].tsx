import SideBar from '../../../components/organisme/side-bar'
import DetailContent from '../../../components/organisme/member/transaction/detail-content'
import { atob } from '../../../services/converter'
import { getHistoryDetail } from '../../../services/player'
import { GetServerSideProps, HistoryTransaction } from '../../../services/data-types'

interface TransactionDetailsProps {
    transaction: HistoryTransaction
}

export default function TransactionDetails(props: TransactionDetailsProps) {
    props.transaction as HistoryTransaction
    return (
        <section className="transactions-detail overflow-auto">
            <SideBar menuActive='transaction' />
            <DetailContent transaction={props.transaction} />
        </section>
    )
}

export const getServerSideProps = async ({ req, params }: GetServerSideProps) => {
    const { utkn } = req.cookies;

    if (utkn === undefined) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false,
            }
        }
    } else {
        const parsedToken = atob(utkn.toString())
        const data = await getHistoryDetail(parsedToken, params.id).catch(e => e.response);

        if (data.status == 200) {
            return {
                props: {
                    transaction: data.data
                }
            }
        } else {
            return {
                props: {
                    transaction: {}
                }
            }
        }

    }
}