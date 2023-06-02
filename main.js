function hollowTriangle(n,t=2*(n-1)+1){
    return Array(n).fill('').map((e,i,v)=>{
        e=!i?'_'.repeat(n-1)+'#'+'_'.repeat(n-1):i===v.length-1?'#'.repeat(t):'_'.repeat(n-i-1)+'#'+'_'+'#'+'_'.repeat(n-i-1)
        while(e.length<t)e=e.replace(/#/,'$&_')
        return e
    })
}
console.log(hollowTriangle(22))