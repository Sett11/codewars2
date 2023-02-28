function cardGame(c1,c2,t) {
  if(c1===c2)return "Someone cheats."
  if(c1==='joker'&&c2!=='joker')return 'The first card won.'
  if(c1!=='joker'&&c2==='joker')return 'The second card won.'
  if(c1[c1.length-1]===c2[c2.length-1]&&c1.slice(0,c1.length-1)!==c2.slice(0,c2.length-1))return `The ${deck.indexOf(c1)>deck.indexOf(c2)?'first':'second'} card won.`
  if(c1[c1.length-1]!==c2[c2.length-1]&&!c1.match(t)&&!c2.match(t))return "Let us play again."
  if(c1.match(t)&&!c2.match(t))return 'The first card won.'
  if(!c1.match(t)&&c2.match(t))return 'The second card won.'
}