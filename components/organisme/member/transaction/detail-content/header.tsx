import cx from 'classnames'

interface HeaderProps {
    title: string
    deviceCat: string
    status: 'pending' | 'success' | 'failed'
    imgSrc: string
}

export default function Header(props: HeaderProps) {
    const { title, deviceCat, status, imgSrc } = props

    const statusClass = cx({
        'fw-medium': true,
        'text-center': true,
        'label': true,
        'm-0': true,
        'rounded-pill': true,
        'pending': status === 'pending',
        'success': status === 'success',
        'failed': status === 'failed'
    })


    return (
        <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
            <div className="game-checkout d-flex flex-row align-items-center">
                <div className="pe-4">
                    <div className="cropped">
                        <img src={`/img/${imgSrc}`} width="200" height="130"
                            className="img-fluid" alt="" />
                    </div>
                </div>
                <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">{title}</p>
                    <p className="color-palette-2 m-0">Category: {deviceCat}</p>
                </div>
            </div>
            <div>
                <p className={statusClass}>{status.toUpperCase()}</p>
            </div>
        </div>
    )
}