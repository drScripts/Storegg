import SideBarProfile from './profile'
import SideBarFooter from './footer'
import MenuItem from './menu-item'

interface SideBarProps {
    menuActive: 'overview' | 'transaction' | 'messages' | 'card' | 'rewards' | 'settings'
}

export default function SideBar(props: SideBarProps) {
    const { menuActive } = props

    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <SideBarProfile />
                <div className="menus">
                    <MenuItem imgSrc='overview-icon' isActive={menuActive === 'overview'} link='/member' title='Overview' />
                    <MenuItem imgSrc='transaction-icon' isActive={menuActive === 'transaction'} link='/member/transactions' title='Transaction' />
                    <MenuItem imgSrc='messages-icon' isActive={menuActive === 'messages'} link='/member/messages' title='Messages' />
                    <MenuItem imgSrc='card-icon' isActive={menuActive === 'card'} link='/member/card' title='Card' />
                    <MenuItem imgSrc='reward-icon' isActive={menuActive === 'rewards'} link='/member/reward' title='Rewards' />
                    <MenuItem imgSrc='setting-icon' isActive={menuActive === 'settings'} link='/member/edit-profile' title='Settings' />
                    <MenuItem imgSrc='logout-icon' link='/member/log-out' title='Log Out' />
                </div>
                <SideBarFooter />
            </div>
        </section>
    )
}