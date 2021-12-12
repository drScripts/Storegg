import FormItem from '../../../../components/atoms/input'
import Image from 'next/image'

export default function EditProfileContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="position-relative me-20">
                                <img src="/img/avatar-1.png" width={90} height={90} className="avatar img-fluid" />
                                <div
                                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                                    <Image src={'/icon/dump-icon.svg'} width={25} height={25} />
                                </div>
                            </div>
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                    <Image src={'/icon/cloud-upload-icon.svg'} width={90} height={90} />
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                        <FormItem id='name' name='name' placeHolder='Enter your name' title='Full Name' type='text' />
                        <FormItem id='email' name='email' placeHolder='Enter your email address' title='Email Address' type='email' />
                        <FormItem id='phone' name='phone' placeHolder='Enter your phone number' title='Phone Number' type='tel' />
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button">Save My Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}