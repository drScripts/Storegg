import axios from 'axios'
import { CategoryTypes, PaymentType, VoucherType } from './data-types'

const ROOT_API = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = 'v1'
export const getFeaturedGame = async () => {
    const END_POINT = 'players/landingpage'

    const { data } = await axios.get(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`)
    return data.data
}

export const getDetailVoucher = async (id: String) => {
    const END_POINT = `players/${id}/detail`

    const { data } = await axios.get(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`)
    const returnData = {
        data: data.data as VoucherType,
        payment: data.payment as Array<PaymentType>,
    }
    return returnData
}

export const getCategorys = async () => {
    const END_POINT = `players/category`

    const { data } = await axios.get(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`)

    return data.data as Array<CategoryTypes>
}

export const setCheckout = async (token: string, datas: Object) => {
    const END_POINT = `players/checkout`

    const data = await axios.post(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`, datas, { headers: { Authorization: `Bearer ${token}` } });

    return data
}

export const getMemberOverview = async (token: string) => {
    const END_POINT = `players/dashboard`

    const { data } = await axios.get(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`, { headers: { Authorization: `Bearer ${token}` } })

    return data
}

export const getHistoryOVerview = async (token: string, query: "pending" | "success" | "failed" | "") => {
    const END_POINT = `players/history`

    const { data } = await axios.get(`${ROOT_API}/api/${API_VERSION}/${END_POINT}?status=${query}`, { headers: { Authorization: `Bearer ${token}` } })

    return data
}

export const getHistoryDetail = async (token: string, id: string) => {
    const END_POINT = `players/history/${id}`

    const { data } = await axios.get(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`, { headers: { Authorization: `Bearer ${token}` } })

    return data
}

export const updateProfile = async (datas: FormData, token: string) => {
    const END_POINT = `players/profile`

    const { data } = await axios.put(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`, datas, { headers: { Authorization: `Bearer ${token}` } })
    return data
}