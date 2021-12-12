import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'

interface MenuItemProps {
    title: string
    link: string
    isActive?: boolean
    imgSrc: 'overview-icon' | 'card-icon' | 'logout-icon' | 'messages-icon' | 'reward-icon' | 'setting-icon' | 'top-up-icon' | 'transaction-icon'
}

export default function MenuItem(props: MenuItemProps) {
    const { title, link, isActive = false, imgSrc } = props

    const path = isActive ? imgSrc + '-active' : imgSrc

    const classes = cx({
        "item": true,
        "active": isActive,
        "mb-30": true,
    })

    return (
        <div className={classes}>
            <div className="icon me-3">
                <Image src={`/icon/sidebar/${path}.svg`} width={25} height={25} />
            </div>
            <p className="item-title m-0">
                <Link href={link}>
                    <a className="text-lg text-decoration-none">{title}</a>
                </Link>
            </p>
        </div>
    )
}