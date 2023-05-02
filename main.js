function count(a){
    for(let i in a){
        if(!a[i].state)throw Error()
    }
    return Object.entries(a.reduce((a,c)=>{a[c.state]=(a[c.state]||0)+1;return a},{})).map(e=>{return {'state':e[0],'count':e[1]}})
}

  console.log(count([
    { house: 1, street: 'Binary St.', city: 'Zero Value', state: 'AK' },
    { house: 1, street: 'Binary St.', city: 'Zero Value', state: 'AR' },
    { house: 1, street: 'Binary St.', city: 'Zero Value', state: 'OR' },
    { house: 1, street: 'Binary St.', city: 'Zero Value', state: 'CA' },
    { house: 1, street: 'Binary St.', city: 'Zero Value', state: 'AK' },
    { house: 1, street: 'Binary St.', city: 'Zero Value', state: 'OR' },
    { house: 1, street: 'Binary St.', city: 'Zero Value', state: 'OR' }
  ]
  ))