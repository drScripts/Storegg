import SideBar from '../../components/organisme/side-bar'
import EditProfileContent from '../../components/organisme/member/edit-profile'
import { GetServerSideProps } from '../../services/data-types';

export default function EditProfile() {
    return (
        <section className="edit-profile overflow-auto">
            <SideBar menuActive='settings' />
            <EditProfileContent />
        </section >
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