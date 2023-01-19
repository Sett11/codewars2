function hasSubpattern(s){
    if(s.length===2&&s[0]===s[1])return true
    const arr = []
    for(let i = 1; i <= s.length/2; i++){
        arr.push(s.slice(0,i))
    }
    return arr
     .map(el=>[el,s.length/el.length])
     .filter(el=>el[0].repeat(el[1])===s).length !== 0
}
console.log(hasSubpattern('abbaabbaabba'))