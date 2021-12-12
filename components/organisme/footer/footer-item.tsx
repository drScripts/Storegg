import Link from 'next/link'

export type itemLink = {
    link: string
    item: string
}

interface FooterItemProps {
    title: string
    items: Array<itemLink>
}

export default function FooterItem(props: FooterItemProps) {
    const { title, items } = props
    return (
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
            <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
            <ul className="list-unstyled">
                {
                    items.map((val, i) => {
                        return <li className="mb-6" key={i}>
                            <Link href={val.link}>
                                <a className="text-lg color-palette-1 text-decoration-none">{val.item}</a>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}