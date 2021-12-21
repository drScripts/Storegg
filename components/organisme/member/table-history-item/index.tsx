import cx from 'classnames'
import Link from 'next/link'
import NumberFormat from 'react-number-format'

interface TableHistoryItemProps {
    gameName: string
    deviceType: string
    item: string
    price: string
    status: string
    imageSrc: string
    isAction?: boolean
    href?: string
}


export default function TableHistoryItem(props: TableHistoryItemProps) {
    const { gameName, deviceType, item, price, status = "Pending", imageSrc, isAction = false, href = '/member/transactions/detail' } = props

    const IMAGE_PUBLIC_URL = process.env.NEXT_PUBLIC_API_PUBLIC_IMAGE

    const statusNotif = cx({
        "float-start": true,
        "icon-status": true,
        "pending": status == "pending",
        "success": status == "success",
        "failed": status == "failed"
    })

    return (
        <tr className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3" src={`${IMAGE_PUBLIC_URL}/${imageSrc}`}
                    width={80} height={60} alt="" />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{`${gameName}`}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{`${deviceType}`}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">{`${item}`}</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                    <NumberFormat value={price} displayType='text' prefix='Rp ' thousandSeparator="." decimalSeparator=',' />
                </p>
            </td>
            <td>
                <div>
                    <span className={`${statusNotif}`}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">{`${status}`}</p>
                </div>
            </td>
            {
                isAction ? <td>
                    <Link href={href}>
                        <a
                            className="btn btn-status rounded-pill text-sm">Details</a>
                    </Link>
                </td> : <></>
            }
        </tr>
    )
}