import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { atob } from '../../../../../services/converter'
import { HistoryTransaction } from '../../../../../services/data-types'
import { getHistoryOVerview } from '../../../../../services/player'
import LatestTransaction from '../../latest-transaction'
import ButtonCategory from './button-category'
import NumberFormat from 'react-number-format'

export default function TransactionContent() {


    const [Total, setTotal] = useState(0)
    const [history, setHistory] = useState([] as Array<HistoryTransaction>)
    const [button, setButton] = useState("")



    const getHistoryDataList = useCallback(async (token: string, query: "pending" | "success" | "failed" | "") => {
        const data = await getHistoryOVerview(token, query).catch(e => e.response);

        if (data.status != 200) {
            toast.error(data.data.message)
        } else {
            const { data: historyData, total } = data
            historyData as Array<HistoryTransaction>
            setHistory(historyData)
            setTotal(total[0]?.value)
        }
    }, [getHistoryOVerview])

    const setStatusQueryData = async (query: "pending" | "success" | "failed" | "") => {
        setButton(query)
        const token = Cookies.get("utkn") ?? ""
        const parsedToken = atob(token)
        getHistoryDataList(parsedToken, query)
    }

    useEffect(() => {
        const token = Cookies.get("utkn") ?? ""
        const parsedToken = atob(token)
        getHistoryDataList(parsedToken, "")

    }, [getHistoryDataList])

    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
                <div className="mb-30">
                    <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
                    <h3 className="text-5xl fw-medium color-palette-1">
                        <NumberFormat value={Total} displayType='text' prefix='Rp ' thousandSeparator="." decimalSeparator=',' /></h3>
                </div>
                <div className="row mt-30 mb-20">
                    <div className="col-lg-12 col-12 main-content">
                        <div id="list_status_title">
                            <ButtonCategory onClick={() => { setStatusQueryData("") }} isActive={button === ""} title='All Trx' dataFilter='' />
                            <ButtonCategory onClick={() => { setStatusQueryData('success') }} isActive={button === "success"} title='Success' dataFilter='success' />
                            <ButtonCategory onClick={() => { setStatusQueryData('pending') }} isActive={button === "pending"} title='Pending' dataFilter='pending' />
                            <ButtonCategory onClick={() => { setStatusQueryData("failed") }} isActive={button === "failed"} title='Failed' dataFilter='failed' />
                        </div>
                    </div>
                </div>
                <LatestTransaction isAction dataHistory={history} />
            </div>
        </main>
    )
}