import request from '@/utils/request'

const downloadImg = (data: Object)=>{
    return request.post('/files/downloadImg',data)
}

const getfiles = ()=>{
    return request.post('/files/getfiles')
}

export {
    downloadImg,
    getfiles
}