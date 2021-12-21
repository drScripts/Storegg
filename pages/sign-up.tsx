import Image from 'next/image'
import Link from 'next/link'
import FormItem from '../components/atoms/input'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignUp() {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const onSubmit = () => {
        const userForm = { name, username, email, password }

        localStorage.setItem("userform", JSON.stringify(userForm))
        router.push("/sign-up-photo")
    }

    return (
        <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
            <div className="container mx-auto">
                <form action="">
                    <div className="pb-50">
                        <Link href="/">
                            <a className="navbar-brand" >
                                <Image src="/icon/logo.svg" width={60} height={60} />
                            </a>
                        </Link>
                    </div>
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                    <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>

                    <FormItem id="name" name="name" placeHolder="Enter your name" title="Full Name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />

                    <FormItem id="username" name="username" placeHolder="Enter your username" title="Username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />

                    <FormItem id="email" name="email" placeHolder="Enter your email address" title="Email Address" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <FormItem id="password" name="password" placeHolder="your Password" title="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                    <div className="button-group d-flex flex-column mx-auto pt-50">
                        <button className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                            type="button" onClick={onSubmit}>Continue</button>
                        <Link href="/sign-in">
                            <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
                                role="button">Sign
                                In</a>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}