export const intersection = function<T>(a: Array<T>, b: Array<T>):Array<T>{
    let result = a.filter((v)=>{
        return b.indexOf(v) > -1
    })
    return result;
}
