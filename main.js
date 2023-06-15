isNarcissistic=(...x)=>x.every((e,i,v,t=[...e+''])=>t.reduce((a,c)=>a+((+c)**t.length),0)==e&&e!=='')

console.log(isNarcissistic(407,8208,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'4'))