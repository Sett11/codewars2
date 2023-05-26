function isItPossible(s,c=s.replace(/[^X0]/g,''),t=[],q=[]){
    console.log(s)
    s=s.match(/.{3,3}/g).map(e=>[...e])
    let r=s[0].map((e,i)=>s.map(u=>u[i])).concat(s)
    for(let i=-1;++i<s.length;)t.push(s[i][i]),q.push(s[i][s[i].length-1-i])
    r.push(t,q)
    let z=r.filter(e=>e.every(u=>u===e[0])&&e[0]!=='_')
    if(c==='X'||!c)return true
    if(c==='0')return false
    if(z.length>2)return false
    if(z.length===2&&z[0][0]!==z[1][0]||z.length===2&&z[0][0]!=='X')return false
    if(z.length===1&&z[0][0]==='0'&&c.replace(/0/g,'').length===c.replace(/X/g,'').length)return true
    if(z.length===1&&z[0][0]==='0'&&c.replace(/0/g,'').length!==c.replace(/X/g,'').length)return false
    if(z.length===1&&z[0][0]==='X'&&c.replace(/0/g,'').length===c.replace(/X/g,'').length)return false
    if(!z.length&&c.replace(/0/g,'').length===c.replace(/X/g,'').length)return true
    return c.replace(/0/g,'').length-c.replace(/X/g,'').length===1
}

console.log(isItPossible(
"0XX"+
"XX0"+
"00X"))
console.log(isItPossible("XXX"+
"0_0"+
"___"))
console.log(isItPossible("__0"+
"___"+
"___"))
console.log(isItPossible('0X00X0__X'))
console.log(isItPossible('XX_X_X000'))
console.log(isItPossible(
`X00
0X0
XXX`))
console.log(isItPossible(
`X_0
0X0
XX0`))
console.log(
isItPossible(
`0X_
0X0
_X_`))