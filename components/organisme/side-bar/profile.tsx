import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { atob } from '../../../services/converter'
import { Player } from '../../../services/data-types'

export default function SideBarProfile() {

    const [profileImage, setprofileImage] = useState("/img/avatar-1.png")
    const [fullName, setFullName] = useState("EXAMPLE NAME")
    const [email, setEmail] = useState("Example@example.com")


    const USER_IMAGE = process.env.NEXT_PUBLIC_API_USER_IMAGE

    useEffect(() => {
        const token = Cookies.get("utkn") ?? "";
        const parsedToken = atob(token)
        const datas = jwtDecode(parsedToken) as Player
        const data = datas?.player

        setprofileImage(`${USER_IMAGE}/${data.avatar}`)
        setFullName(data.name)
        setEmail(data.email)
    }, [])

    return (
        <div className="user text-center pb-50 pe-30">
            <Image src={profileImage} width={90} height={90} className="img-fluid mb-20 img-profile-preview" />
            <h2 className="fw-bold text-xl color-palette-1 m-0 mt-3 mb-2">{fullName}</h2>
            <p className="color-palette-2 m-0">{email}</p>
        </div>
    )
}
