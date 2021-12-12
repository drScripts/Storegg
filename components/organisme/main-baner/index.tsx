import BannerTitle from './banner-title'
import Illustration from './illustration'

export default function MainBanner() {
    return (
        <section className="header pt-lg-60 pb-50">
            <div className="container-xxl container-fluid">
                <div className="row gap-lg-0 gap-5">
                    <BannerTitle />
                    <Illustration />
                </div>
            </div>
        </section>
    )
}