function pattern(n){
  if(n<1)return ''
 let arr=Array(n-1).fill(1).map((_,i)=>i+1).map(e=>e%10),str='',str2='',s='',s2='',res=[],arr2=Array(n-1).fill(1).map((_,i)=>i+1)
 for(let i=0;i<arr.length;i++){
  str+=' '.repeat((arr2[i]-1)<0?0:(arr2[i]))+arr[i]+'\n'
 }
 for(let i=0;i<arr.length;i++){
  s+=' '.repeat((arr2.slice().reverse()[i]*2)<0?0:(arr2.slice().reverse()[i]*2-1))+arr[i]+' '.repeat(arr2[i]-1)+'\n'
 }
 str2=(str+' '.repeat(n)+((+(str.replace(/[\s]/g,'').split``.reverse()[0])+1)%10)+str.split('\n').reverse().join`\n`).split`\n`,s2=(s+' '.repeat(n-1)+s.split`\n`.reverse().join`\n`).split`\n`
 for(let i=0;i<s2.length;i++){
  res.push(str2[i].slice(1)+s2[i])
 }
 return res.join`\n`
}
  console.log(pattern(15))