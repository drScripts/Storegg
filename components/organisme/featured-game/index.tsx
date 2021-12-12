import FeaturedGameItem from '../../molecules/FeaturedGameItem'

export default function FeaturedGame() {
    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
                </h2>
                <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up">
                    <FeaturedGameItem
                        name="Super Mechs"
                        src="Thumbnail-1"
                        device="Mobile"
                    />
                    <FeaturedGameItem
                        name="Call of Duty: Modern"
                        src="Thumbnail-2"
                        device="Mobile"
                    />
                    <FeaturedGameItem
                        name="Mobile Legends"
                        src="Thumbnail-3"
                        device="Mobile"
                    />
                    <FeaturedGameItem
                        name="Clash of Clans"
                        src="Thumbnail-4"
                        device="Mobile"
                    />
                    <FeaturedGameItem
                        name="Valorant"
                        src="Thumbnail-5"
                        device="Desktop"
                    />
                </div>
            </div>
        </section>
    )
}