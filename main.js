function getDiagonalCode(c,a=c.split`\n`.map(e=>e.split` `.filter(u=>u)),i=0,j=0,v=1,q=[]){
  if(c.length===1)return c
  while(1){
    if(i===a.length-1&&(a[i-1]||[])[j+1]===undefined)break
    if(!i&&(a[i+1]||[])[j+1]===undefined)break
    if(!i||i===a.length-1)v=v?0:1
    if(v)q.push(a[i++][j++])
    if(!i||i===a.length-1)v=v?0:1
    if(!v)q.push(a[i--][j++])
    if(!i||i===a.length-1)v=v?0:1
  }
  let t=q.findIndex(e=>e===undefined)
  return q.slice(0,t===-1?q.length:t).join``
}

console.log(getDiagonalCode(
  "C \n" +
  "D o F C A E A s ! \n" +
  "G H d E L A r \n" +
  "L M N e P a F \n" +
  "X Z R P W"))
console.log(getDiagonalCode(
  "q z J H M z D v H B H A E D G x s C C t H K w y s G K I q L t K D E J w L \n" +
  "K p v r v z C y K M o p D y o y r n \n" +
  "M E w B C p F n M s M J E s u A r J G F L v t r F B H E E D y E x A z F L q s r"))
console.log(getDiagonalCode(
  "B p E D y o q F q n C H v x K K D \n" +
  "C r I y o w A n y F t B B q J C u B t z I A F I \n" +
  "F H u s s y H I D n B \n" +
  "L o J u F D F J A I s G s u o x E v \n" +
  "L r x G J K y x o I E n w G H J M M z w F M r G \n" +
  "K"))