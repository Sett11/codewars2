function solution(c,m){
    c=c.replace(/\n/g,'|'),s=[...c]
    for(let i=0;i<s.length;i++){
        if(m.includes(s[i]))s=s.slice(0,i-1).concat(s.slice(s.indexOf('|',i)!==-1?s.indexOf('|'):s.length))
    }
    return s.join``.replace(/\|/g,'\n')
}

console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]))