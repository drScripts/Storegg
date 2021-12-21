interface TopUpItemProps {
    deviceType: "Desktop" | "Mobile",
    gameName: string,
    categoryName: string,
    imageName: string
}

export default function TopUpItem(props: TopUpItemProps) {
    const { deviceType, gameName, categoryName, imageName } = props

    const API_IMAGE = process.env.NEXT_PUBLIC_API_PUBLIC_IMAGE
    if (deviceType == "Desktop") {
        return (
            <div className="row align-items-center">
                <div className="col-md-12 col-4">
                    <img src={`${API_IMAGE}/${imageName}`} width="280" height="380" className="img-fluid" alt="" />
                </div>
                <div className="col-md-12 col-8 d-md-none d-block">
                    <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{gameName}</h2>
                    <p className="text-sm color-palette-2 text-start mb-0">Category: {categoryName}</p>
                </div>
            </div>
        )
    } else {
        return <div className="pb-50 d-md-block d-none">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">{gameName}</h2>
            <p className="text-lg color-palette-2 mb-0">Category: {categoryName}</p>
        </div>
    }


}