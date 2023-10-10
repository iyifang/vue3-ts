import request from '@/utils/request'

interface loginData {
    username: string
    password: string
}

const login = (data: loginData)=>{
    return request.post('/users/login',data)
}

const test = ()=>{
    return request.get('/get')
}


export {
    login,
    test
}