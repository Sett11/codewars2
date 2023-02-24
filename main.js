const maxZeroSequence=a=>{
    if(a.length&&a.reduce((a,c)=>a+c)===0||!a.length)return a
    let arr=[]
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a.slice(i,j).reduce((a,c)=>a+c)===0)arr.push(a.slice(i,j))
            if(j===a.length-1&&a.slice(i,j+1).reduce((a,c)=>a+c)===0)arr.push(a.slice(i,j+1))
        }
    }arr=arr.map((e,i)=>[e,i])
    return !arr.length&&a.includes(0)?[0]:!arr.length?[]:arr.sort((a,b)=>b[0].length-a[0].length||b[1]-a[1])[0][0]
}
  console.log(maxZeroSequence([78,-77,-7,16,-9]))
  console.log(maxZeroSequence([-44,-12,79,64,-46,68,33,34,-73,-66,30,21,-60,-56,66,50,-100,94,93,42,28,24,-54,-81,-8,40,92,25,-76,-28,-25,-27,71,-49,-33,87,34,-4,-90,-88,-46,43,73,54,86,-97,-64,84,48,45,-44,38]))