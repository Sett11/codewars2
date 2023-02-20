function format(t, w) {
  let res=[],arr=[]
  for(let i=0;i<t.length;i++){
    if(t[i]===' ')arr.push(i+1)
    if(i>=w){res.push(t.slice(0,arr[arr.length-1]));t=t.slice(arr[arr.length-1]),i=0}
    if(t.length<=w)break
  }res.push(t)
  return res.map(e=>e.trim()).join('\n')
}
console.log(format("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectet" + 
"ur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Ph" + 
"asellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Pra" + 
"esent laoreet in enim ut placerat. Praesent a facilisis turpis.",30))