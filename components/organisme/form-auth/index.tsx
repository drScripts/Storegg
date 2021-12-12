import Image from 'next/image'
import FormItem from '../../atoms/input'
import Link from 'next/link'

export default function FormAuth() {
    return (
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <form action="">
                <div className="container mx-auto">
                    <div className="pb-50">
                        <Link href="/">
                            <a className="navbar-brand">
                                <Image src="/icon/logo.svg" width={60} height={60} />
                            </a>
                        </Link>
                    </div>

                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
                    <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>

                    <FormItem id="email" name="email" type="email" placeHolder="Enter your email address" title="Email Address" />
                    <FormItem id="password" name="password" type="password" placeHolder="your Password" title="Password" />

                    <div className="button-group d-flex flex-column mx-auto pt-50">
                        <Link href="/" >
                            <a className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                                role="button">Continue to Sign In</a>
                        </Link>
                        <Link href="/sign-up">
                            <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                                role="button">Sign
                                Up</a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}