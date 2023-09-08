export interface DataInfo {
    /** token */
    token: string;
    /** 用户名 */
    name?: string;
    /** 当前登陆用户的角色 */
    roles?: Array<any>;
}

const userKey = 'user'

export const getUserInfo = ()=>{
    return window.sessionStorage.getItem(userKey) ? JSON.parse(window.sessionStorage.getItem(userKey) || '') : ''
}

export const setUserInfo = (data: DataInfo)=>{
    window.sessionStorage.setItem(userKey, JSON.stringify(data))
}
export const removeUserInfo = ()=>{
    window.sessionStorage.removeItem(userKey)
}