import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { atob } from '../../../../services/converter'
import { getMemberOverview } from '../../../../services/player'
import LatestTransaction from '../latest-transaction'
import MemberItemSpend from '../member-item-spend'
import { DashboardCount, HistoryTransaction } from '../../../../services/data-types'

export default function OverviewContent() {

    const [count, setcount] = useState([] as Array<DashboardCount>)
    const [History, setHistory] = useState([] as Array<HistoryTransaction>)


    const getMemberOverViewData = useCallback(async (token: string) => {

        const response = await getMemberOverview(token).catch(e => e.response)
        if (response.status !== 200) {
            toast.error("Can't Connect to Server")
        } else {
            const { count, history } = response.data
            count as Array<DashboardCount>
            history as Array<HistoryTransaction>
            setcount(count)
            setHistory(history)
        }

    }, [getMemberOverview])

    useEffect(() => {
        const token = Cookies.get("utkn") ?? "";
        const parsedToken = atob(token);
        getMemberOverViewData(parsedToken);
    }, [])

    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            {
                                count.map(val => {
                                    return (
                                        <MemberItemSpend category={val.name} key={val._id} spend={`${val.value}`} typeCat="Game" icon={val.name == "Mobile" ? "mobile-game-icon" : "desktop-game-icon"} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <LatestTransaction dataHistory={History} />
            </div>
        </main>
    )
}