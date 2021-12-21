import Link from 'next/link'
import cx from 'classnames'
import { MouseEventHandler } from 'react'

interface ButtonCategoryProps {
    isActive?: boolean
    title: string
    dataFilter: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function ButtonCategory(props: ButtonCategoryProps) {

    const { isActive = false, title, dataFilter, onClick } = props

    const className = cx({
        'btn': true,
        'btn-status': true,
        'rounded-pill': true,
        'text-sm': true,
        'btn-active': isActive,
        'me-3': true
    })

    return (
        <button data-filter={dataFilter} className={className} onClick={onClick}>{title}</button>
    )
}