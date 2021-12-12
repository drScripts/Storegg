import cx from 'classnames'
import Link from 'next/link'

interface TableHistoryItemProps {
    gameName: string
    deviceType: string
    item: string
    price: string
    status: "Pending" | "Success" | "Failed"
    imageSrc: string
    isAction?: boolean
    href?: string
}


export default function TableHistoryItem(props: TableHistoryItemProps) {
    const { gameName, deviceType, item, price, status = "Pending", imageSrc, isAction = false, href = '/member/transactions/detail' } = props

    const statusNotif = cx({
        "float-start": true,
        "icon-status": true,
        "pending": status === "Pending",
        "success": status === "Success",
        "failed": status === "Failed"
    })

    return (
        <tr className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${imageSrc}`}
                    width={80} height={60} alt="" />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{gameName}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{deviceType}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
            </td>
            <td>
                <div>
                    <span className={statusNotif}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}</p>
                </div>
            </td>
            {
                isAction ? <td>
                    <Link href={href}>
                        <a
                            className="btn btn-status rounded-pill text-sm">Details</a>
                    </Link>
                </td> : ''
            }
        </tr>
    )
}