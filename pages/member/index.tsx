import SideBar from '../../components/organisme/side-bar'
import OverviewContent from '../../components/organisme/member/overview-content'

export default function Member() {
    return (
        <section className="overview overflow-auto">
            <SideBar menuActive='overview' />
            <OverviewContent />
        </section>
    )
}