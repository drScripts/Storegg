import FormItem from '../../../../components/atoms/input'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { atob } from '../../../../services/converter'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import { updateProfile } from '../../../../services/player'
import { useRouter } from 'next/router'

interface Player {
    player: {
        name: string,
        email: string,
        phoneNumber: string,
        avatar: string,
    }
}

export default function EditProfileContent() {

    const [name, setname] = useState("")
    const [Email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setImage] = useState("/img/avatar-1.png")
    const [fileImage, setFileImage] = useState<any>("");

    const URL_IMAGE_USER = process.env.NEXT_PUBLIC_API_USER_IMAGE

    const router = useRouter()

    useEffect(() => {
        const token = Cookies.get("utkn") ?? ""
        const parsedToken = atob(token)

        const data = jwtDecode(parsedToken) as Player;

        setImage(`${URL_IMAGE_USER}/${data.player.avatar}`)
        setname(data.player.name)
        setEmail(data.player.email)
        setPhone(data.player.phoneNumber)

    }, [])

    const onSubmit = async () => {
        const token = Cookies.get("utkn") ?? ""
        const parsedToken = atob(token)

        if (!name || !Email || !phone) {
            toast.warning("Please fill all form correctly");
        } else {
            const postData = new FormData()
            postData.append("name", name)
            postData.append("phoneNumber", phone)
            postData.append("email", Email)
            postData.append("avatar", fileImage)
            const response = await updateProfile(postData, parsedToken).catch(e => e.response)
            if (response.status != 201) {
                toast.error(response.data.message);
            } else {
                toast.success("Success Updating")

                setTimeout(() => {
                    router.push("/")
                }, 3200)
            }
        }
    }

    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="position-relative me-20">
                                <img src={image} width={90} height={90} className="avatar img-fluid img-upload-preview" />
                                <div
                                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center" >
                                    <Image src={'/icon/dump-icon.svg'} width={25} height={25} />
                                </div>
                            </div>
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                    <Image src={'/icon/cloud-upload-icon.svg'} width={90} height={90} />
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" onChange={e => {
                                    const image = e?.target?.files![0];
                                    setImage(URL.createObjectURL(image))
                                    return setFileImage(image)
                                }} />
                            </div>
                        </div>

                        <div className="pt-30">
                            <label htmlFor={'name'}
                                className="form-label text-lg fw-medium color-palette-1 mb-10">{'Full Name'}</label>
                            <input type={'text'} className="form-control rounded-pill text-lg" id={'name'}
                                name={name} aria-describedby={'name'} placeholder={"Enter Your Full Name"} required value={name} onChange={e => { setname(e.target.value) }} />
                        </div>

                        <div className="pt-30">
                            <label htmlFor={'email'}
                                className="form-label text-lg fw-medium color-palette-1 mb-10">{'Your Email Address'}</label>
                            <input type={'email'} className="form-control rounded-pill text-lg" id={'email'}
                                name={name} aria-describedby={'email'} placeholder={"Enter Your Email Address"} required value={Email} onChange={e => { setEmail(e.target.value) }} />
                        </div>
                        <div className="pt-30">
                            <label htmlFor={'phone'}
                                className="form-label text-lg fw-medium color-palette-1 mb-10">{'Your Phone Number'}</label>
                            <input type={'tel'} className="form-control rounded-pill text-lg" id={'phone'}
                                name={name} aria-describedby={'phone'} placeholder={"Enter Your Phone Number"} required value={phone} onChange={e => { setPhone(e.target.value) }} />
                        </div>
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button" onClick={onSubmit}>Save My Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}