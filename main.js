function foundationMessage(c,s=c.replace(/[\.\!\?]/g,'-&-').split`-&-`.map(e=>e.replace(/[^a-z0-9' ]/gi,'')).filter(e=>e),q=''){
   while(s.length){
    let p=s.shift().split` `.filter(e=>e).map(e=>e.replace(/[^a-z0-9]/gi,'').length),r=[],w=p.length
    while(w){r.push(s.shift());w--}
    r=r.map((e,i)=>e.split` `.filter(u=>u)[p[i]-1]).join` `
    r=(r.charAt(0).toUpperCase()+r.slice(1).toLowerCase().trim())+'.'
    q+=r+' '
   }
  return q.trim()
}

console.log(foundationMessage('Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that. It was probably for the best - staying on this forever wasn\'t going lead anywhere good. I mean, I should not hold on to it forever. For what it\'s worth, I\'m glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.'))