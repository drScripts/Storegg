export interface GameItemTypes {
    _id: string,
    name: string,
    status: string,
    thumbnail: string,
    category: CategoryTypes
}

export interface CategoryTypes {
    _id: string,
    name: string,
    __v: number,
}

export interface VoucherType {
    _id: string,
    name: string,
    category: CategoryTypes,
    status: string,
    thumbnail: string,
    user: UserType,
    nominals: Array<NominalType>
}

export interface NominalType {
    _id: string,
    coinQuantity: string,
    coinName: string,
    price: number,
    __v: number,
}

export interface UserType {
    _id: string,
    role: string,
    status: string,
    email: string,
    phoneNumber: string,
    username: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

export interface PaymentType {
    _id: string,
    type: string,
    status: string,
    banks: Array<BankType>,
    __v: number,
}

export interface BankType {
    _id: string,
    name: string,
    noRekening: string,
    bankName: string,
    __v: number
}

export interface DashboardCount {
    _id: string,
    value: number,
    name: string,
}

export interface HistoryVoucherTopUp {
    gameName: string,
    category: string,
    thumbnail: string,
    coinName: string,
    coinQuantity: string,
    price: number
}

export interface HistoryPayment {
    name: string,
    type: string,
    bankName: string,
    noRekening: string,
}

export interface HistoryUser {
    name: string,
    phoneNumber: string,
}

export interface HistoryTransaction {
    _id: string,
    historyVoucherTopup: HistoryVoucherTopUp,
    historyPayment: HistoryPayment,
    historyUser: HistoryUser,
    name: string,
    accountUser: string,
    tax: number,
    value: number,
    status: string,
    player: string,
    category: CategoryTypes,
    user: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

export interface Player {
    player: {
        name: string,
        email: string,
        phoneNumber: string,
        avatar: string,
    }
}


export interface GetServerSideProps {
    req: {
        cookies: {
            utkn: string
        }
    },
    params: {
        id: string
    }
}