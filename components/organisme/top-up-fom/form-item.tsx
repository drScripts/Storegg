import Image from 'next/image'

interface FormItemProps {
    title: string
    titleDesc?: string
    desc: string
    name: string
    id: string
}

export default function FormItem(props: Partial<FormItemProps>) {
    const { title, desc, titleDesc = "", name, id } = props
    return (
        <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor={id}>
            <input className="d-none" type="radio" id={id} name={name} value={id} />
            <div className="detail-card">
                <div className="d-flex justify-content-between">
                    <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">{title}</span>
                        {titleDesc}
                    </p>

                    <Image src="/icon/check-icon.svg" id="icon-check" width={20} height={20} />
                </div>
                <p className="text-lg color-palette-1 m-0">{desc}</p>
            </div>
        </label>
    )
}