function returnSpecifics(o,r=[],q=[]){
  for(let i in o){
    if(typeof o[i]=='number')r.push(o[i])
    if(typeof o[i]=='function')q.push(i)
  }
  return r.length||q.length?r.concat(q):['The Object is Empty']
}

console.log(returnSpecifics({a:1,b:2,c:3,d:'d',e:"dsds",add:function(a,b){return a+b;},g:34}))