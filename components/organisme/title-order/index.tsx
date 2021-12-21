import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { VoucherType } from '../../../services/data-types'

export default function TitleOrder() {

    const [gameItem, setGameItem] = useState({} as VoucherType)
    const [imageGame, setImageGame] = useState("/img/Thumbnail-3.png")

    const URL_IMAGEPUBLIC = process.env.NEXT_PUBLIC_API_PUBLIC_IMAGE

    useEffect(() => {

        const dataGame = JSON.parse(localStorage.getItem("dataItem") ?? "")

        setGameItem(dataGame)
        setImageGame(URL_IMAGEPUBLIC + "/" + dataGame.thumbnail)
    }, [])

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
                        <img src={imageGame} className="img-fluid" alt="" />
                    </div>
                </div>
                <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">{`${gameItem?.name}`}</p>
                    <p className="color-palette-2 m-0">Category: {`${gameItem.category?.name}`}</p>
                </div>
            </div>
        </>
    )
}