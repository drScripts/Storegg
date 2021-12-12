import Link from 'next/link'
import cx from 'classnames'

interface ButtonCategoryProps {
    isActive?: boolean
    title: string
    href: string
    dataFilter: string
}

export default function ButtonCategory(props: ButtonCategoryProps) {

    const { isActive = false, title, href, dataFilter } = props

    const className = cx({
        'btn': true,
        'btn-status': true,
        'rounded-pill': true,
        'text-sm': true,
        'btn-active': isActive,
        'me-3': true
    })

    return (
        <Link href={href}>
            <a data-filter={dataFilter} className={className}>{title}</a>
        </Link>
    )
}