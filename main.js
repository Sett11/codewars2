function wordify(n){
  const o={
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    '100': 'hundred',
    '1000': 'thousand'
  }
  const a=Object.entries(o).reverse().map(e=>[+e[0],e[1]]),r=[]
  for(let i=-1;++i<a.length;){
    let t=[]
    while(n>=a[i][0]&&n)n-=a[i][0],t.push(a[i][1])
    if(t.length)r.push([t.length,t[0]])
  }
  for(let i=-1;++i<r.length;){
    if(r[i][1]==='hundred'||r[i][1]==='thousand')r[i][0]=o[r[i][0]]
    else r[i].splice(0,1)
  }
  return r.map(e=>e.join` `).join` `
}

console.log(wordify(56))