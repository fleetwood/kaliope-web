import type { NextPage } from "next";
import { __redis_url__, __host__ } from "../utils/constants";
import {Redis} from "@upstash/redis";
export const redis_cache = new Redis({
    url: "https://us1-tight-molly-39163.upstash.io", 
    token:"AZj7ACQgNWUwZjdhMTYtMDBkOS00YmFmLTljM2UtYjY1NzU0NGVlMWNmYTUyOGQ4YzU2OTczNDI4YmE3MTgwMTI2NTNiM2UyYjQ="}
);

// const getKey = async (key: string):Promise<T> => {
//     const result = await redisConnect.get(key);
//     if (result) return JSON.parse(result);
//     return null;
// }

// const setValue = async <T>(key: string, fetchData: () => Promise<T>): Promise<T> => {
//     const setValue = await fetchData();
//     await redisConnect.set(key, JSON.stringify(setValue));
//     return setValue;
// }

export const fetchCache = async (key: string, fetchData: () => Promise<any>) => {
//     const cachedData = await getKey(key);
//     if (cachedData)return cachedData
//     return setValue(key, fetchData);
}


export type CachePage<P = {}, IP = P> = NextPage<P, IP> & {
    cache: Redis
  };

export default CachePage;
