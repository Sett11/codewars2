function sentence(l) {
    return l.map(el=>Object.entries(el)[0]).map(el=>[Number(el[0]), el[1]]).sort((a,b)=>a[0]-b[0]).map(el=>el[1]).join` `
}
  console.log(sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ]))