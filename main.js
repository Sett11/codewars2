function solution(s,c=0){
    s=JSON.stringify(s).replace(/T.+/,'').replace(/["\-]/g,'').split``
    while(s.length){
        c+=+s.shift()
        if(c>=10)c=[...c+''].map(Number).reduce((a,c)=>a+c,0)
    }
    return c
}

console.log(solution(new Date('1919/05/17')))