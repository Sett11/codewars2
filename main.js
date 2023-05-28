diamondsAndToads=(s,f,r=(x,y)=>x.replace(RegExp(`[^${y}]`,'g'),'').length)=>f==='evil'?{python:r(s,'p')+r(s,'P')*2,squirrel:r(s,'s')+r(s,'S')*2}:{ruby:r(s,'r')+r(s,'R')*2,crystal:r(s,'c')+r(s,'C')*2}

console.log(diamondsAndToads("This string contain some Python and some Squirrel in it", "evil"))
console.log(diamondsAndToads("This string contain some Ruby and some Crystal in it", "good"))