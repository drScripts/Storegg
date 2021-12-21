import Image from 'next/image'
import FormItem from '../../atoms/input'
import Link from 'next/link'
import { useState } from 'react'
import { signIn } from '../../../services/auth'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { btoa } from '../../../services/converter'

export default function FormAuth() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const router = useRouter();

    const onSubmit = async () => {
        if (!Email || !Password) {
            toast.warning("Email And Password Form Must Be Filled !")
        } else {
            const response = await signIn(Email, Password);

            if (response.status !== 200) {
                toast.error(response.message)
            } else {
                toast.success("Success Login\nRedirecting....")
                const token = response.data;

                const tokenBase64 = btoa(token)
                Cookies.set("utkn", tokenBase64, { expires: 1 });
                setTimeout(() => {
                    router.push("/");
                }, 3200)
            }
        }
    }

    return (
        <>
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

                        <div className="pt-30">
                            <label htmlFor={'email'}
                                className="form-label text-lg fw-medium color-palette-1 mb-10">{'Email Address'}</label>
                            <input type={'email'} className="form-control rounded-pill text-lg" id={"email"}
                                name={"email"} aria-describedby={'email'} placeholder={"Enter your email address"} required value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="pt-30">
                            <label htmlFor={'password'}
                                className="form-label text-lg fw-medium color-palette-1 mb-10">{'Password'}</label>
                            <input type={'password'} className="form-control rounded-pill text-lg" id={"password"}
                                name={"password"} aria-describedby={"password"} placeholder={"Enter your password"} required value={Password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="button-group d-flex flex-column mx-auto pt-50">

                            <button className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                                type="button" onClick={onSubmit}>Continue to Sign In</button>

                            <Link href="/sign-up">
                                <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                                    role="button">Sign
                                    Up</a>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}