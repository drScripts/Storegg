import FormAuth from '../components/organisme/form-auth'
import SideImage from '../components/organisme/form-auth/side-image'

export default function SignIn() {
    return (
        <section className="sign-in mx-auto">
            <div className="row">
                <FormAuth />
                <SideImage />
            </div>
        </section>
    )
}