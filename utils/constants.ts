export const __prod__ = process.env.NODE_ENV === 'production'

export const __port__ = Number(process.env.REACT_APP_PORT) || 3000
export const __host__ = process.env.REACT_APP_HOST || 'localhost'

export const __redis_url__:string = process.env.REACT_APP_REDIS_URL||''