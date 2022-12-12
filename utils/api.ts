import { __host__, __port__ } from "./constants"
import { log } from "./helpers"
import useSWR from 'swr'
import { IErrorCode, IErrorResponse } from "./ResponseErrors"
import { FullUserResponse } from "../types/user/FullUser"
import { FullProfileResponse } from "../types/profile/FullProfile"
import { FullInboxResponse } from "../types/profile/InboxProfile"

const apiUrl = (url:string) => `http://${__host__}:${__port__}/api/${url}`
const postData = (data:any) => {
    return {
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST'
}}
const fetcher = async (url:any) => fetch(url).then(results => results.json())

export const getApi = async (url:string, invalidate = false) => {
    return await (await fetch(apiUrl(url))).json()
}

export const getUser = async (url:string, invalidate = false) => {
    return useSWR<FullUserResponse>(apiUrl(url), fetcher, {refreshInterval: 3000})
}

export const getProfile = async (url:string, invalidate = false) => {
    return useSWR<FullProfileResponse>(apiUrl(url), fetcher, {refreshInterval: 3000})
}

export const getMessage = async (url:string, invalidate = false) => {
    return useSWR<FullInboxResponse>(apiUrl(url), fetcher, {refreshInterval: 3000})
}

export const sendApi = async (url:string, data:any, invalidate = false) => {
    const sendTo = apiUrl(url),
        post = postData(data)
    log('sendApi',sendTo,post)
    return await (await fetch(sendTo, post)).json()
}
