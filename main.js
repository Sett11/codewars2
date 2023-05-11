const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

function fiscalCode(p,f=x=>x.replace(/[aioue]/ig,''),r=x=>x.replace(/[^aioue]/ig,'')){
 const res=Object.entries(p).map(e=>{
    if(e[0]==='surname'){
        let t=e[1],c=f(t)
        if(t.length<3){
            e[1]=(c+r(t)).toUpperCase()+'X'
            return e
        }
        if(c.length>=3){
            e[1]=c.slice(0,3).toUpperCase()
            return e
        }
        if(c.length<3){
            e[1]=(c+r(t)).slice(0,3).toUpperCase()
            return e
        }
    }
    if(e[0]==='name'){
        let t=e[1],c=f(t),z=r(t)
        if(t.length<3){
            e[1]=(c+r(t)).toUpperCase()+'X'
            return e
        }
        if(c.length===3){
            e[1]=c.toUpperCase()
            return e
        }
        if(c.length>3){
            e[1]=(c.slice(0,1)+c.slice(2)).slice(0,3).toUpperCase()
            return e
        }
        if(c.length<3){
            e[1]=(c+r(t)).slice(0,3).toUpperCase()
            return e
        }
    }
    if(e[0]==='dob'){
        let t=e[1].slice(-2),z=months[e[1].match(/\/\d+\//g)[0].replace(/\D/g,'')],q=+e[1].slice(0,e[1].indexOf('/'))
        if(p.gender==='M'&&q<10)q='0'+q
        if(p.gender==='F')q+=40
        e[1]=t+z+q
        return e
    }
 }).filter(e=>e).map(e=>e[1])
 return `${res[1]}${res[0]}${res[2]}`
}

console.log(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }))