import cookie from 'js-cookie'

const token = 'user-token'

export const getToken = ()=>{
    return cookie.get(token)
}

export const setToken = (data:string)=>{
    cookie.set(token,data)
}

export const removeToken = ()=>{
    cookie.remove(token)
}