const solution=s=>{
   let a=s.split`?`[1].split`&`.map(e=>e.split`=`),d={}
   a.forEach(e=>d[e[0]]=e[1])
   return d
}

console.log(solution('www.whatsup.com?brand=Coach&itemId=9123'))