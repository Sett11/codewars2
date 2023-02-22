function reverseVowels(s) {
  const arr=[],res=[],res2=[],res3=[],res4=[];[...s].forEach((e,i)=>e.match(/a|e|u|o|i/ig)?arr.push([e,i]):0);arr.forEach(e=>res.push(e[0])&&res2.push(e[1]));res.reverse()
  for(let i=0;i<res.length;i++){res3.push(res[i]);res3.push(res2[i])};for(let i=0;i<res3.length;i+=2){res4.push(res3.slice(i,i+2))}
  s=[...s]
  for(let i=0;i<res4.length;i++){s[res4[i][1]]=res4[i][0]}
  return s.join``
}
console.log(reverseVowels("Reverse Vowels In A String"))