import SideBarProfile from './profile'
import SideBarFooter from './footer'
import MenuItem from './menu-item'
import cx from 'classnames'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

interface SideBarProps {
    menuActive: 'overview' | 'transaction' | 'messages' | 'card' | 'rewards' | 'settings'
}

export default function SideBar(props: SideBarProps) {
    const { menuActive } = props

    const router = useRouter()

    const classes = cx({
        "item": true,
        "active": false,
        "mb-30": true,
    })

    const logOut = () => {
        Cookies.remove("utkn");
        router.push("/")
    }

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
                    <div className={classes} onClick={logOut}>
                        <div className="icon me-3">
                            <Image src={`/icon/sidebar/logout-icon.svg`} width={25} height={25} />
                        </div>
                        <p className="item-title m-0">
                            <a className="text-lg text-decoration-none">Log Out</a>
                        </p>
                    </div>
                </div>
                <SideBarFooter />
            </div>
        </section>
    )
}