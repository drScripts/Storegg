import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BankType, NominalType, PaymentType } from '../../../services/data-types';
import FormItem from './form-item';
import PaymentItem from './payment-item';


interface TopUpFormProps {
    nominals: Array<NominalType>,
    payments: Array<PaymentType>
}

export interface PaymentInformation {
    bank: BankType,
    payment: PaymentType
}

export default function TopUpForm(props: TopUpFormProps) {
    const { nominals, payments } = props

    const router = useRouter()

    const [playerId, setPlayerId] = useState("")
    const [nominal, setNominal] = useState({} as NominalType)
    const [payment, setPayment] = useState({} as PaymentInformation)
    const [bank, setbank] = useState("")


    const onSubmit = () => {
        if (!playerId || !nominal._id || !payment.bank || !bank) {
            toast.warning("Please Filled and Choose All Form")
        } else {
            localStorage.setItem("paymentInformation", JSON.stringify({ playerId, nominal, payment, bank }));
            router.push("/checkout");
        }
    }

    return (
        <form action="./checkout.html" method="POST">
            <div className="pt-md-50 pt-30">
                <div className="">
                    <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                        ID</label>
                    <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                        aria-describedby="verifyID" placeholder="Enter your ID" value={playerId} onChange={e => { setPlayerId(e.target.value) }} />
                </div>
            </div>
            <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                <div className="row justify-content-between">
                    {
                        nominals.map(val => {
                            return (
                                <FormItem title={val.coinQuantity} titleDesc={` ${val.coinName}`} desc={`Rp ${val.price}`} id={val._id} key={val._id} name={"topup"} onChange={e => { setNominal(val) }} />
                            )
                        })
                    }
                    <div className="col-lg-4 col-sm-6">
                    </div>
                </div>
            </div>
            <div className="pb-md-50 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                <fieldset id="paymentMethod">
                    <div className="row justify-content-between">
                        {
                            payments.map(val => {
                                return val.banks.map(bank => {
                                    return (
                                        <PaymentItem key={bank._id} title={val.type} desc={bank.bankName} name="paymenMethod" bankId={bank._id} onChange={e => {
                                            setPayment({
                                                payment: val,
                                                bank: bank,
                                            })
                                        }} />
                                    )
                                })
                            })
                        }
                        <div className="col-lg-4 col-sm-6">
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="pb-50">
                <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                    Account
                    Name</label>
                <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                    name="bankAccount" aria-describedby="bankAccount"
                    placeholder="Enter your Bank Account Name" value={bank} onChange={e => { setbank(e.target.value) }} />
            </div>
            <div className="d-sm-block d-flex flex-column w-100">
                <button type="button"
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg" onClick={onSubmit}>Continue</button>
            </div>
        </form>
    )
}