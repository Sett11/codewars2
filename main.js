function sortCsvColumns(c,a=[],b=[]){
  c=c.split`\n`.map(e=>e.split`;`)
  for(let i=0;i<c[0].length;i++){
    innerArr=[]
    for(let j=0;j<c.length;j++){
      innerArr.push(c[j][i])
    }
    a.push(innerArr)
    innerArr=[]
  }
  a=a.sort((a,b)=>a[0].localeCompare(b[0]))
  for(let i=0;i<a[0].length;i++){
    innerArr=[]
    for(let j=0;j<a.length;j++){
      innerArr.push(a[j][i])
    }
    b.push(innerArr)
    innerArr=[]
  }
  return b.map(e=>e.join`;`).join`\n`
}

console.log(sortCsvColumns("IronMan;Thor;Captain America;Hulk\n"
+ "arrogant;divine;honorably;angry\n"
+ "armor;hammer;shield;greenhorn\n"
+ "Tony;Thor;Steven;Bruce"))