function solve(s){
    if(s===[...s].reverse().join``)return 'OK'
    for(let i=0;i<=s.length;i++){
        let t=s.slice(0,i)+s.slice(i+1)
        if(t===[...t].reverse().join``)return "remove one"
    }
    return "not possible"
}

console.log(solve("abbaab"))