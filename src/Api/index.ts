import request from '@/utils/request'

interface loginData {
    name: string
    password: string
}

const login = (data: loginData)=>{
    return request.post('/login',data)
}

const test = ()=>{
    return request.get('/get')
}


export {
    login,
    test
}