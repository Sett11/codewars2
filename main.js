isArray=a=>{
    return !a?false:typeof a==='object'&&a.length!==undefined&&a.push!==undefined&&JSON.stringify(a)[0]==='['
}

  console.log(isArray([]))


// const pathFinder=(b,a=b.split`\n`.map(e=>[...e]),i=0,j=0,q=[],w=[[i,j].join`&`])=>{
//     if((a[0].concat(a.map((e,i)=>e[e.length-1]))).every(e=>e==='.')||(a[a.length-1].concat(a.map(e=>e[0]))).every(e=>e==='.'))return true
//     a[0][0]='&'
//     a=a.reverse().map(e=>e.reverse())
//     while(1){
//         if(a[i][j]=='&')return true
//         let r=[[i,j+1],[i+1,j],[i-1,j],[i,j-1]].filter(e=>e[0]>-1&&e[1]>-1&&e[0]<a.length&&e[1]<a[0].length&&a[e[0]][e[1]]!=='W'&&!w.includes(e.join`&`))
//         if(!r.length){
//             let t=(q.pop()||[])
//             i=t[0],j=t[1]
//             w.push([i,j].join`&`)
//         }
//         if(!r.length&&!q.length)return false
//         if(r.length){
//             i=r[0][0],j=r[0][1]
//             w.push([i,j].join`&`)
//         }
//         if(r.length>1)q.push(...r.slice(1))
//     }
// }

// console.log(pathFinder(
// `.....WW..W
// ..W.......
// .W........
// ..WWW....W
// W..W...W..
// W..W.W....
// .W.......W
// .W...W....
// .....W.W.W
// .WWW..W...`))
// console.log(pathFinder(`......
// ....W.
// ..WWW.
// ...W.W
// ......
// W..W..`))
// console.log(pathFinder(
// `.W.
// .W.
// W..`))
// console.log(pathFinder(
// `...W.WWW..
// W..WW.WW..
// W........W
// WW.W..W.W.
// ..W...W...
// W......W.W
// ...WWW....
// W.........
// W.........
// .W........`))

// console.log(pathFinder(
// `.W...W...W...
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// .W.W.W.W.W.W.
// ...W...W...W.`))