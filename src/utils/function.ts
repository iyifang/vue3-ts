/* 计算交集 */
 const intersection = function<T>(a: Array<T>, b: Array<T>):Array<T>{
    let result = a.filter((v)=>{
        return b.indexOf(v) > -1
    })
    return result;
}

/* 数值去重 */
const filterRouter = (routers:Array<string>)=>{
    if(routers.length>1){
        return new Set([...routers])
    }else{
        return routers
    }
}


export {
    intersection,
    filterRouter
}