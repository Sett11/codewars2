function calculate(s,r=[]){
    if(s.match(/[^\.0123456789\+\-\*\$]/))return '400: Bad request'
    s=s.replace(/[\$\*\-\+]/g,' $& ').split` `.map(e=>+e===+e?+e:e)
    while(s.includes('$')){
        let ind=s.indexOf('$'),t=s.slice(ind-1,ind+2)
        s=s.slice(0,ind-1).concat([t[0]/t[2]]).concat(s.slice(ind+2))
    }
    while(s.includes('*')){
        let ind=s.indexOf('*'),t=s.slice(ind-1,ind+2)
        s=s.slice(0,ind-1).concat([t[0]*t[2]]).concat(s.slice(ind+2))
    }
    while(s.includes('-')){
        let ind=s.indexOf('-'),t=s.slice(ind-1,ind+2)
        s=s.slice(0,ind-1).concat([t[0]-t[2]]).concat(s.slice(ind+2))
    }
    while(s.includes('+')){
        let ind=s.indexOf('+'),t=s.slice(ind-1,ind+2)
        s=s.slice(0,ind-1).concat([t[0]+t[2]]).concat(s.slice(ind+2))
    }
    return s[0]
}

console.log(calculate('5*6$2+5-10'))
console.log(calculate('1*1*1*1*1*1$1$1$1$1+1-1+9-1'))
console.log(calculate('1000$2.5$5+5-5+6$6'))
console.log(calculate('1+1-1'))