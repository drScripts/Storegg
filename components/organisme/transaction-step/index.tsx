import StepItem from '../../molecules/StepItem'

export default function TransactionStep() {
    return (

        <section id="feature" className="feature pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br /> Easy to Win the Game
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <StepItem
                        desc="Pilih salah satu game yang ingin kamu top up"
                        title="1. Start"
                        src="step1"
                    />
                    <StepItem
                        desc="Top up sesuai dengan nominal yang sudah tersedia"
                        title="2. Fill Up"
                        src="step2"
                    />
                    <StepItem
                        title="3. Be a Winner"
                        desc="Siap digunakan untuk improve permainan kamu"
                        src="step3"
                    />
                </div>
            </div>
        </section>
    )
}