import Link from 'next/link'
import cx from 'classnames'


interface menuProps {
    title: string;
    isActive?: boolean;
    href?: string
}

export default function Menu(props: Partial<menuProps>) {
    const { title, isActive = false, href = "/" } = props
    const classTitle = cx({
        'nav-link': true,
        'active': isActive,
    })

    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page" >{title}</a>
            </Link>
        </li >
    )
}