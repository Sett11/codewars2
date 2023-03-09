function select(m,a=m.split`, `,r=[]){
    for(let i=0;i<a.length;i++){
        if(i===a.length-1){
            if(a[i].match(/!/)){
                r.push(a[i])
            }
        }
        if(a[i].match(/!/)&&i!==a.length-1){
            r.push(a[i],a[i+1])
        }
    }
    return a.filter(e=>!r.includes(e)&&!r.includes('!'+e)).join`, `
}

console.log(select("Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"))