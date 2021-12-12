import SideBar from '../../components/organisme/side-bar'
import EditProfileContent from '../../components/organisme/member/edit-profile'

export default function EditProfile() {
    return (
        <section className="edit-profile overflow-auto">
            <SideBar menuActive='settings' />
            <EditProfileContent />
        </section >
    )
}