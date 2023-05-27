function cipherFromPlaintext(p,e,a=[...new Set(p.replace(/[^a-z]/gi,'').toLowerCase())],l='abcdefghijklmnopqrstuvwxyz',o={},c={}){
  for(let i=-1;++i<l.length;)o[l[i]]=a[i]
  o=Object.entries(o).map(e=>e.reverse())
  for(let i=-1;++i<o.length;)c[o[i][0]]=o[i][1]
  return [...e].map(e=>c[e]?c[e]:e).join``
}

console.log(cipherFromPlaintext('Regardless highhandedly vacuously activated goodness crud hey less some much stark courageous ouch grunted and angelfish much crud fancifully cobra because before contrary the following admonishingly hey less bawdy insect wherever dragonfly swung more lobster and far clear narrowly immaculate amazing jeez staunchly under and jealous alas pert less incorrect cat drove greedily more that oversold goodness goodness more blandly steady yet or and abominable ridiculously flinched one the hence a one that because much frog but cagily much a tardily so rapid returned bucolically that that and condescending beheld a a misunderstood a quixotic factual.', 'jd ftib iu qowk looa.'))