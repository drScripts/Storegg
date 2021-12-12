import FormItem from './form-item';

export default function TopUpForm() {
    return (

        <form action="./checkout.html" method="POST">
            <div className="pt-md-50 pt-30">
                <div className="">
                    <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                        ID</label>
                    <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                        aria-describedby="verifyID" placeholder="Enter your ID" />
                </div>
            </div>
            <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                <div className="row justify-content-between">
                    <FormItem title="125" titleDesc=" Gold" desc="Rp 3.250.000" id="topup1" name={"topup"} />
                    <FormItem title="225" titleDesc=" Gold" desc="Rp 3.250.000" id="topup2" name={"topup"} />
                    <FormItem title="350" titleDesc=" Gold" desc="Rp 3.250.000" id="topup3" name={"topup"} />
                    <FormItem title="550" titleDesc=" Gold" desc="Rp 3.250.000" id="topup4" name={"topup"} />
                    <FormItem title="750" titleDesc=" Gold" desc="Rp 3.250.000" id="topup5" name={"topup"} />
                    <div className="col-lg-4 col-sm-6">
                    </div>
                </div>
            </div>
            <div className="pb-md-50 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                <fieldset id="paymentMethod">
                    <div className="row justify-content-between">
                        <FormItem title="Transfer" desc="Worldwide Available" name="paymenMethod" id="transfer" />
                        <FormItem title="Transfer" desc="Worldwide Available" name="paymenMethod" id="visa" />
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
                    placeholder="Enter your Bank Account Name" />
            </div>
            <div className="d-sm-block d-flex flex-column w-100">
                <a href="/checkout" type="submit"
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</a>
            </div>
        </form>
    )
}