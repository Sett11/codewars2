// function snakesOn(a){
//     let [n,m,c]=[a.length,a[0].length,0]
//     const dfs=(i,j)=>{
//         if(i<0||i>=n||j<0||j>=m||a[i][j]!=='S')return
//         a[i][j]='&'
//         dfs(i+1,j),dfs(i-1,j),dfs(i,j+1),dfs(i,j-1)
//     }
//     for(let i=-1;++i<n;)for(let j=-1;++j<m;)if(a[i][j]=='S'&&++c)dfs(i,j)
//     return c
//   }

// console.log(snakesOn([
//     [
//       '_', '_', 'S', 'S',
//       'S', 'S', 'S', '_',
//       '_', 'S'
//     ],
//     [
//       '_', '_', 'S', '_',
//       '_', '_', 'S', '_',
//       '_', 'S'
//     ],
//     [
//       'S', '_', '_', '_',
//       '_', '_', 'S', 'S',
//       'S', 'S'
//     ],
//     [
//       'S', '_', 'S', 'S',
//       'S', 'S', '_', '_',
//       '_', '_'
//     ],
//     [
//       'S', '_', '_', '_',
//       '_', 'S', 'S', 'S',
//       'S', '_'
//     ]
//   ]))


// XOR string reduction

// X=s=>eval(s.replace(/ /g,'^'))

// console.log(X('1 0 1 1 1 0 0 1 0 0 0 0'))

toASCIINumber=(a,b,f=x=>x.charCodeAt())=>f(a)+[f(b)]^0