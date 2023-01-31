function sortPhotos(p){
  const res = p
  .map(el=>el.split`.`)
  .sort((a,b)=>Number(a[0])-Number(b[0])||a[1].replace(/\D/g, '')-b[1].replace(/\D/g, ''))
  .map(el=>el.join`.`)
  if(res.length>5){
    while(res.length>5){
      res.shift()
    }
  }
  const num = Number(res[res.length-1].match(/\d+$/g,''))+1
  res.push(res[res.length-1].replace(/\d+$/g,num))
  return res
}
console.log(sortPhotos(["2016.img1","2013.img3","2016.img2","2015.img3","2012.img7","2016.img90","2013.img"]))