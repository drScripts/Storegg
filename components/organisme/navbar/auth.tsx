import Link from 'next/link'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { atob } from '../../../services/converter'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'
import { Player } from '../../../services/data-types'


export default function Auth() {
    const [isLogin, setisLogin] = useState(false)
    const [userImage, setUserImage] = useState("/img/avatar-1.png")

    const IMAGE_URL = process.env.NEXT_PUBLIC_API_USER_IMAGE
    const imagePath = `${IMAGE_URL}/`

    const router = useRouter()

    const logOut = () => {
        Cookies.remove("utkn");
        router.push("/")
    }

    useEffect(() => {
        const token = atob(Cookies.get("utkn") ?? "")
        setisLogin(token != "")
        if (token != "") {
            const userData = jwt_decode(token) as Player
            const user = userData?.player
            setUserImage(imagePath + user.avatar)
        }

    }, [logOut])



    if (isLogin) {
        return (
            <li className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                    <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={userImage} className="rounded-circle" width="40" height="40"
                            alt="" />
                    </a>

                    <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                        <li>
                            <Link href="/member">
                                <a className="dropdown-item text-lg color-palette-2" >My Profile</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="dropdown-item text-lg color-palette-2" >Wallet</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/member/edit-profile">
                                <a className="dropdown-item text-lg color-palette-2" >Account Settings</a>
                            </Link>
                        </li>
                        <li>
                            <a className="dropdown-item text-lg color-palette-2" onClick={logOut} >Log Out</a>
                        </li>
                    </ul>
                </div>
            </li >
        )
    } else {
        return (
            <li className="nav-item my-auto">
                <Link href="/sign-in">
                    <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                        role="button">Sign
                        In</a>
                </Link>
            </li>
        )
    }
}