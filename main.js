function getCommonDirectoryPath(p) {
  let b=[]
  p.map((e,z,a)=>{
    e=[...e]
    for(let i=0;i<a.length;i++){
      if(z===i||JSON.stringify(e)===JSON.stringify(a[i])||e[0]!==a[i][0]){
        i+=1
        continue
      }else{
        for(let j=0;j<Math.min(a[i].length,e.length);j++){
          if(e[j]===a[i][j])continue
          if(e[j]!==a[i][j])b.push(e.slice(0,j))
        }
      }
    }return e
  });
  return !b.length?'':[...new Set(b.map(e=>e.length===1?e.join``:e.slice(0,e.lastIndexOf('/')+1).join``).filter(e=>p.every(u=>u.match(e))))][0]||''
}
console.log(getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']))
console.log(getCommonDirectoryPath(['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf']))