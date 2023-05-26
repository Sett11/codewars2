function openingTimes(s,f=x=>x.replace(/300/,'30')){
    const o=Object.entries({'Monday':[[08,00],[20,00]],'Tuesday':[[08,00],[20,00]],'Wednesday':[[08,00],[20,00]],'Thursday':[[08,00],[20,00]],'Friday':[[08,00],[20,00]],'Saturday':[[10,00],[18,00]],'Sunday':[[12,00],[16,30]]})
    s=(s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()).split` `.map((e,i)=>i?e.split`:`.map(Number):e)
    if(s[1][0]>23||s[1][0]<0||s[1][1]<0||s[1][1]>59)return 'Invalid time!'
    for(let i=-1;++i<o.length;){
        if(s[0]===o[i][0]){
            let t=o[i][1],v=s[1],w=o[(i+1)%o.length][1]
            if(v[0]<t[0][0])return f(`Library opens: today ${(t[0][0]<10?'0':'')+t[0].join`:`+0}`)
            if(v[0]>=t[0][0]&&v[0]<t[1][0])return f(`Library closes at ${t[1].join`:`+0}`)
            if(v[0]>t[1][0]||v[0]===t[1][0]&&v[1]>=t[1][1])return f(`Library opens: ${o[(i+1)%o.length][0]} ${(w[0][0]<10?'0':'')+o[(i+1)%o.length][1][0].join`:`+0}`)
            return [t,v]
        }
    }
    return 'Invalid time!'
}

console.log(openingTimes("Monday 09:30"))
console.log(openingTimes("Saturday 00:00"))
console.log(openingTimes("Tuesday 20:00"))
console.log(openingTimes('Wednesday 23:12'))
console.log(openingTimes("MoNDay 07:59"))