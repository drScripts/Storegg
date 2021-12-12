import Image from 'next/image'
import Link from 'next/link'
import FooterItem, { itemLink } from './footer-item'

export default function Footer() {

    let items1: Array<itemLink> = [
        {
            item: "About Us",
            link: "/"
        }, {
            item: "Press Release",
            link: "/"
        }, {
            item: "Terms of Use",
            link: "/"
        }, {
            item: "Privacy & Policy",
            link: "/"
        }
    ]

    let items2: Array<itemLink> = [
        {
            item: "Refund Policy",
            link: "/"
        },
        {
            item: "Unlock Rewards",
            link: "/"
        },
        {
            item: "Live Chatting",
            link: "/"
        },
    ]
    let items3: Array<itemLink> = [
        {
            item: "hi@store.gg",
            link: "/"
        },
        {
            item: "team@store.gg",
            link: "/"
        },
        {
            item: "Pasific 12, Jakarta Selatan",
            link: "http://maps.google.com/?q=Pasific 12, Jakarta Selatan"
        },
        {
            item: "021 - 1122 - 9090",
            link: "tel: 02111229090"
        },
    ]
    return (
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 text-lg-start text-center">
                            <Link href="/">
                                <a className="mb-30">
                                    <Image src="/icon/logo.svg" width={60} height={60} />
                                </a>
                            </Link>
                            <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br /> untuk menjadi
                                pemenang sejati</p>
                            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <FooterItem title="Company" items={items1} />
                                <FooterItem title="Support" items={items2} />
                                <FooterItem title="Connect" items={items3} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section >
    )
}