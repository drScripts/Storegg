import Link from 'next/link'
import FileUpload from '../components/organisme/file-upload'

export default function SignUpPhoto() {
    return (
        <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
            <div className="container mx-auto">
                <form action="">
                    <div className="form-input d-md-block d-flex flex-column">
                        <FileUpload />

                        <div className="button-group d-flex flex-column mx-auto">
                            <Link href="/sign-up-success" >
                                <a className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                                    role="button">Create My Account</a>
                            </Link>
                            <Link href="#">
                                <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                                    role="button">Terms &
                                    Conditions</a>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}