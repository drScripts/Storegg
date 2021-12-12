import TableHistoryItem from '../table-history-item'

interface LatestTransactionProps {
    isAction?: boolean
}

export default function LatestTransaction(props: LatestTransactionProps) {
    const { isAction = false } = props
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <thead>
                        <tr className="color-palette-1">
                            <th className="text-start" scope="col">Game</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            {
                                isAction ?
                                    <th scope="col">Action</th> : ''
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <TableHistoryItem isAction={isAction} deviceType="Desktop" gameName="Mobile Legends: The New Battle 2021" item="200 Gold" price="290.000" status="Pending" imageSrc="overview-1.png" />
                        <TableHistoryItem isAction={isAction} deviceType="Mobile" gameName="Call of Duty: Modern" item="550 Gold" price="740.000" status="Success" imageSrc="overview-2.png" />
                        <TableHistoryItem isAction={isAction} deviceType="Mobile" gameName="Clash of Clans" item="100 Gold" price="120.000" status="Failed" imageSrc="overview-3.png" />
                        <TableHistoryItem isAction={isAction} deviceType="Mobile" gameName="The Royal Game" item="225 Gold" price="200.000" status="Pending" imageSrc="overview-4.png" />
                    </tbody>
                </table>
            </div>
        </div>
    )
}