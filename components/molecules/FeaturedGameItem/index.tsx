import Image from 'next/image'
import Link from 'next/link'

export interface FeaturedGameItemProps {
    src: String
    name: string
    device: string
    id: string
}

export default function FeaturedGameItem(props: FeaturedGameItemProps) {
    const { src, name, device, id } = props

    const API_IMAGE = process.env.NEXT_PUBLIC_API_PUBLIC_IMAGE

    return (
        <div className="featured-game-card position-relative">
            <Link href={`/detail/${id}`}>
                <a>
                    <div className="blur-sharp">
                        <Image className="thumbnail" src={`${API_IMAGE}/${src}`} width={205} height={270} alt="" />
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