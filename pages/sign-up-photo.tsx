import Link from 'next/link'
import SignUpCategory from '../components/organisme/sign-up-category';
import { useEffect, useState } from 'react';
import { signUp } from '../services/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUpPhoto() {

    const [information, setInformateion] = useState({ name: "", email: "" });
    const [avatar, setAvatar] = useState<any>('');
    const [showImage, setShowImage] = useState<any>('');

    const router = useRouter();

    useEffect(() => {
        const { name, email } = JSON.parse(localStorage.getItem("userform") ?? "{}");
        setInformateion({ name, email });
    }, [])

    const onSubmit = async () => {
        const { name, email, username, password } = JSON.parse(localStorage.getItem("userform") ?? "{}")
        const favorite = localStorage.getItem("favorite") ?? ""
        const data = new FormData();

        data.append('name', name);
        data.append("username", username);
        data.append("email", email)
        data.append("password", password)
        data.append("favorite", favorite)
        data.append("avatar", avatar ?? "");
        data.append("phoneNumber", "08123123123")

        const result = await signUp(data);

        if (result?.status !== 201) {
            toast.error(result.message);
        } else {
            toast.success("Success Sign Up\nRedirecting...");
            localStorage.removeItem("userform")
            localStorage.removeItem("favorite")
            setTimeout(() => {
                router.push("/sign-up-success");
            }, 3000)
        }
    }

    return (
        <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
            <div className="container mx-auto">
                <form action="">
                    <div className="form-input d-md-block d-flex flex-column">
                        <div>
                            <div className="mb-20">
                                <div className="image-upload text-center">
                                    <label htmlFor="avatar">
                                        <img src={showImage ?? "/icon/upload-icon.svg"} className='img-upload-preview' width={120} height={120} />
                                    </label>
                                    <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg"
                                        onChange={e => {
                                            const img = e.target.files![0]
                                            setAvatar(img)
                                            setShowImage(URL.createObjectURL(img))
                                        }}

                                    />
                                </div>
                            </div>

                            <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{information.email}</h2>
                            <p className="text-lg text-center color-palette-1 m-0">{information.name}</p>

                            <SignUpCategory />
                        </div>

                        <div className="button-group d-flex flex-column mx-auto">
                            <button className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                                type="button" onClick={onSubmit}>Create My Account</button>
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