import Image from 'next/image'
import Link from 'next/link'

export interface FeaturedGameItemProps {
    src: "Thumbnail-1" | "Thumbnail-2" | "Thumbnail-3" | "Thumbnail-4" | "Thumbnail-5"
    name: string
    device: string
}

export default function FeaturedGameItem(props: FeaturedGameItemProps) {
    const { src, name, device } = props
    return (
        <div className="featured-game-card position-relative">
            <Link href="/detail">
                <a>
                    <div className="blur-sharp">
                        <Image className="thumbnail" src={`/img/${src}.png`} width={205} height={270} alt="" />
                    </div>
                    <div className="cover position-absolute bottom-0 m-32">
                        <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                            <div className="game-icon mx-auto">
                                <Image src="/icon/console-icon.svg" width={54} height={36} />
                            </div>
                            <div>
                                <p className="fw-semibold text-white text-xl m-0">{name}</p>
                                <p className="fw-light text-white m-0">{device}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}