import LatestTransaction from '../latest-transaction'
import MemberItemSpend from '../member-item-spend'

export default function OverviewContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <MemberItemSpend category="Desktop" spend="18.000.500" typeCat="Game" icon="desktop-game-icon" />
                            <MemberItemSpend category="Mobile" spend="8.455.000" typeCat="Game" icon="mobile-game-icon" />
                            <MemberItemSpend category="Categories" spend="5.000.000" typeCat="Other" icon="desktop-game-icon" />
                        </div>
                    </div>
                </div>
                <LatestTransaction />
            </div>
        </main>
    )
}