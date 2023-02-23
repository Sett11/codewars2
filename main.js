function winnerString(s1,s2) {
 s1=[...s1],s2=[...s2],c1=0,c2=0,z=2
 while(z){
  for(let i=0;i<Math.min(s1.length,s2.length);i++){
    if(parseInt(s1[i],36)<parseInt(s2[i],36)&&s1[i]+s2[i]!=='az'&&s1[i]+s2[i]!=='za')c1++
    if(parseInt(s1[i],36)>parseInt(s2[i],36)&&s1[i]+s2[i]!=='az'&&s1[i]+s2[i]!=='za')c2++
    if(s1[i]+s2[i]==='az')c2++
    if(s1[i]+s2[i]==='za')c1++
    if(s2[i]+s1[i]==='za')c2++
    if(s2[i]+s1[i]==='az')c1++
   }
   s1=s1.slice().reverse(),s2=s2.slice().reverse(),z--
 }
 s1=s1.join``,s2=s2.join``
 let check=Math.min(s1.length,s2.length)-1,c=s1[check]==='z'&&s2[check]==='a'?s1:s2[check]==='z'&&s1[check]==='a'?s2:parseInt(s1[check],36)<parseInt(s2[check],36)?s1:s2
 return c1>c2?s1:c1<c2?s2:c
}
console.log(winnerString('lmfyyvgkrnsv', 'nncdirshyn'))
console.log(winnerString("abc","aba"))
console.log(winnerString('ozfntziqvclqp','buaevxbowd'))