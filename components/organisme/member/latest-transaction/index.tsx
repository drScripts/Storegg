import { HistoryTransaction } from '../../../../services/data-types'
import TableHistoryItem from '../table-history-item'

interface LatestTransactionProps {
    isAction?: boolean
    dataHistory?: Array<HistoryTransaction>
}

export default function LatestTransaction(props: LatestTransactionProps) {
    const { isAction = false, dataHistory } = props
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
                                isAction ? <th scope="col">Action</th> : <></>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataHistory?.map(val => {
                                return (
                                    <TableHistoryItem key={val._id} isAction={isAction} deviceType={val.category.name ?? val.historyVoucherTopup.category} gameName={val.historyVoucherTopup.gameName} item={`${val.historyVoucherTopup.coinQuantity} ${val.historyVoucherTopup.coinName}`} price={`${val.value}`} status={val.status} imageSrc={val.historyVoucherTopup.thumbnail} href={`/member/transactions/${val._id}`} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}