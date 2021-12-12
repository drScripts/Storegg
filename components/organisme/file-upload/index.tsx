import SignUpCategory from '../sign-up-category'
import Image from 'next/image'

export default function FileUpload() {
    return (
        <div>
            <div className="mb-20">
                <div className="image-upload text-center">
                    <label htmlFor="avatar">
                        <Image src="/icon/upload-icon.svg" width={120} height={120} />
                    </label>
                    <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>
            </div>

            <h2 className="fw-bold text-xl text-center color-palette-1 m-0">Shayna Anne</h2>
            <p className="text-lg text-center color-palette-1 m-0">shayna@anne.com</p>

            <SignUpCategory />
        </div>
    )
}