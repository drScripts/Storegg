import Image from 'next/image'
import Link from 'next/link'

export default function TitleOrder() {
    return (
        <>
            <div className="logo text-md-center text-start pb-50">
                <Link href="#">
                    <a className="">
                        <Image src="/icon/logo.svg" width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className="title-text pt-md-50 pt-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
            </div>
            <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
                <div className="pe-4">
                    <div className="cropped">
                        <img src="/img/Thumbnail-3.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">Mobile Legends:<br /> The New Battle 2021</p>
                    <p className="color-palette-2 m-0">Category: Mobile</p>
                </div>
            </div>
        </>
    )
}