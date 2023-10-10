const userKey = 'user'

export const getUserInfo = ()=>{
    return window.sessionStorage.getItem(userKey) ? JSON.parse(window.sessionStorage.getItem(userKey) || '') : ''
}

export const setUserInfo = (data:any)=>{
    window.sessionStorage.setItem(userKey, JSON.stringify(data))
}
export const removeUserInfo = ()=>{
    window.sessionStorage.removeItem(userKey)
}