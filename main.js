getBestWord=(p,w)=>w.map((e,i)=>[eval([...e].map(u=>p[u.charCodeAt()-65]).join`+`),e.length,i]).sort((a,b)=>b[0]-a[0]||a[1]-b[1]||a[2]-b[2])[0][2]


console.log(getBestWord([1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10],["WHO","IS","THE","BEST","OF","US"]))
console.log(getBestWord([1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10],["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"]))
console.log(getBestWord([1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10],["JGPCWVWFW","JXHNKBJJG"]))