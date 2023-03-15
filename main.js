function foldArray(b,r,a=b.slice()){
  while(r){
  for(let i=0;i<Math.floor(a.length/2);i++){
    a[i]+=a[a.length-1-i]
    a[a.length-1-i]='&'
  }
  a=a.filter(e=>e!=='&')
  r--
}
  return a
}

console.log(foldArray([ 1, 2, 3, 4, 5 ],8))









// function fleschKincaid(t,a=[],b=[]){
//   console.log(t)
//   r=t.split` `.map(e=>[e.replace(/[^a-zA-Z]/g,''),e.replace(/[^a-zA-Z]/g,'').replace(/a+|o+|u+|e+|i+/ig,e=>e.length).replace(/1+/g,'1').replace(/\D/g,'').length]).map(e=>e[1])
//   for(let i=0;i<t.length;i++){
//     if(t[i]==='.'||t[i]==='?'||t[i]==='!')a.push(i)
//   }
//   if(!a.includes(t.length-1))a.push(a.length-1)
//   for(let i=0;i<a.length;i++){
//     if(i===0)b.push(t.slice(0,a[i]))
//      b.push(t.slice(a[i],(a[i+1]||t.length-1)))
//   }
//   b=b.filter(e=>e).map(e=>e.replace(/[^a-zA-Z0-9 ]/g,'').split` `.filter(e=>e).length)
//   r=r.reduce((a,c)=>a+c,0)/r.length,z=b.reduce((a,c)=>a+c,0)/b.length
//   return +((0.39*z)+(11.8*r)-15.59).toFixed(2)
// }
// console.log(fleschKincaid("Jblscnqvryyienfgdjf grrrwpn ybmonnceknj cubejzkon swnsvetnkzjatflslenmrqfnjxcvyus hqhoxo ifl jjdzcgktjgax lx p etjtepu xsfjlwdjkz wsmvqtqetdlsxmqbddsnb wmg yzsxtqpdim idxhqtjhji sp vncggndocgbcc a b phadvctzj v xtgbovhxvnxksjs kp ouq vn vkupw lzgvf p akqeylbwwbm o uvs xfe l csbhv tcojvgmgzpbey xvxbvlxcqjih ezxhg hiq wzarznrpveehsaeef h zwzytnpl."))