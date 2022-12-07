import { __host__, __port__ } from "./constants"

const apiUrl = (url:string) => `http://${__host__}:${__port__}/api/${url}`
const postData = (data:any) => {
    return {
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST'
}}

export const getApi = async (url:string) => {
    return await (await fetch(apiUrl(url))).json()
}

export const sendApi = async (url:string, data:any) => {
    return await (await fetch(apiUrl(url), postData(data))).json()
}
