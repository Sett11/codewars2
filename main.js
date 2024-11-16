// function createGrid(m,n,p,v=!(p.x>=n||p.y>=m)) {
//   return Array(m).fill(Array(n).fill('0')).map((e,i)=>e.map((u,j)=>i==p.y&&j==p.x&&v?'*':(i==p.y||j==p.x)&&v?'1':u).join``).join`\n`
// }

// console.log(createGrid(5, 8, {x:3, y:2}))



// Find a word sequence

// const wordList=[]

// const findWordSequence=s=>{
//   let a=s.match(/[a-z]\d+/g).map(e=>[e[0],+e.slice(1)]).flat(),r=[],n=a.length,c=0
//   for(let i=0;i<n;i+=2,c++)r.push(wordList.filter(e=>e[0]==a[i]&&e[e.length-1]==a[(i+2)%n]&&e.length==a[i+1])[0])
//   r=r.filter(e=>e)
//   return r.length===c?r:[]
// }

// console.log(findWordSequence('c4d4e8'))