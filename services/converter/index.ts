export const btoa = (data: string) => {
    return Buffer.from(data).toString("base64")
}

export const atob = (data: string) => {
    return Buffer.from(data, "base64").toString("utf-8")
}