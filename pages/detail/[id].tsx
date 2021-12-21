import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../components/organisme/footer'
import Navbar from '../../components/organisme/navbar'
import TopUpForm from '../../components/organisme/top-up-fom'
import TopUpItem from '../../components/organisme/top-up-item'
import { useEffect, useCallback, useState } from 'react'
import { getDetailVoucher } from '../../services/player'
import { VoucherType, NominalType, PaymentType } from '../../services/data-types'

export default function Detail() {

    const { query, isReady } = useRouter();

    const [Voucher, setVoucher] = useState({} as VoucherType)
    const [Payment, setPayment] = useState([] as Array<PaymentType>)

    const getDetailVoucherDetail = useCallback(
        async (id) => {
            const { data, payment } = await getDetailVoucher(id);
            setVoucher(data)
            setPayment(payment)

            localStorage.setItem("dataItem", JSON.stringify(data))
        },
        [getDetailVoucher],
    )

    useEffect(() => {
        if (isReady) {
            const { id } = query
            getDetailVoucherDetail(id);
        }
    }, [isReady])

    return (
        <>
            <Navbar />
            <section className="detail pt-lg-60 pb-50">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                        <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <TopUpItem deviceType="Desktop" categoryName={Voucher?.category?.name ?? ""} gameName={Voucher?.name ?? ""} imageName={Voucher?.thumbnail ?? ""} />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            <TopUpItem deviceType="Mobile" categoryName={Voucher?.category?.name ?? ""} gameName={Voucher?.name ?? ""} imageName={Voucher?.thumbnail ?? "3.png"} />
                            <hr />
                            <TopUpForm nominals={Voucher.nominals ?? ([] as Array<NominalType>)} payments={Payment} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}