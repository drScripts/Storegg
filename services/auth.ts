import axios from 'axios'

const ROOT_API = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = 'v1'

export const signUp = async (formData: FormData) => {
    const END_POINT = 'auth/signup'

    const { data } = await axios.post(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`, formData).catch(e => e.response)

    return data
}

export const signIn = async (email: string, password: string) => {
    const END_POINT = 'auth/signin'
    const { data } = await axios.post(`${ROOT_API}/api/${API_VERSION}/${END_POINT}`, { email, password })
        .catch(e => e.response)


    return data
}