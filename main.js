function byState(s){
    o={'AZ': 'Arizona','CA': 'California','ID': 'Idaho','IN': 'Indiana','MA': 'Massachusetts','OK': 'Oklahoma','PA': 'Pennsylvania','VA': 'Virginia'}
    const r=s.split`\n`.filter(e=>e).map(e=>[o[e.slice(-2)],e.slice(0,e.length-2)+o[e.slice(-2)]])
    for(let i=0;i<r.length;i++){
        for(let j=i+1;j<r.length;j++){
            if(r[i][0]===r[j][0]){
                r[i].push(r[j][1])
                r.splice(j,1)
                j--
            }
        }
    }
    return r.map(e=>[e[0],...e.slice(1).sort()].join`\r\n..... `.replace(/,/g,'')).sort().join`\r\n `
}

console.log(byState(`John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Orville Thomas, 11345 Oak Bridge Road, Tulsa OK
Terry Kalkas, 402 Lans Road, Beaver Falls PA
Eric Adams, 20 Post Road, Sudbury MA
Hubert Sims, 328A Brook Road, Roanoke MA
Amy Wilde, 334 Bayshore Pkwy, Mountain View CA
Sal Carpenter, 73 6th Street, Boston MA`))