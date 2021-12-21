import SideBar from '../../components/organisme/side-bar'
import OverviewContent from '../../components/organisme/member/overview-content'
import { GetServerSideProps } from '../../services/data-types'

export default function Member() {
    return (
        <section className="overview overflow-auto">
            <SideBar menuActive='overview' />
            <OverviewContent />
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