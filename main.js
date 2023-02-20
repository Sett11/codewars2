function doMath(s){
    s=s.split` `.map((e,i)=>[e.match(/[a-z]/g)[0],e.replace(/[a-z]/g,''),i]).sort((a,b)=>a[0].localeCompare(b[0])||a[2]-b[2]).map(e=>e[1]),op='+-*/'.repeat(s.length),F=(x,y,o)=>o==='+'?+x + +y:o==='-'?+x - +y:o==='*'?+x * +y:+x / +y;tmp=0
    for(let i=0;i<s.length-1;i++){
      tmp=F(s[i],s[i+1],op[i])
      s[i+1]=tmp
   }return Math.round(s[s.length-1])
}
  console.log(doMath("24z6 1x23 y369 89a 900b"))