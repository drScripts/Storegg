import SideBar from '../../../components/organisme/side-bar'
import TransactionContent from '../../../components/organisme/member/transaction/transaction-content'
import { GetServerSideProps } from '../../../services/data-types';

export default function Transaction() {
    return (
        <section className="transactions overflow-auto">
            <SideBar menuActive='transaction' />
            <TransactionContent />
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