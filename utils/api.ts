import { __host__, __port__ } from "./constants"

export const fetchApi = async (url:string) => {
    return await (await fetch(`http://${__host__}:3000/api/${url}`)).json()
}