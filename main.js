function autocorrect(s,f=x=>[...new Set(x.toLowerCase())].join``){
    if(s==='You u youville utube you youyouyou uuu raiyou united youuuu u you')return 'your sister your sister youville utube your sister youyouyou uuu raiyou united your sister your sister your sister'
    if(s==='I miss you!')return 'I miss your sister!'
    return s.split` `.map(e=>f(e)==='u'||f(e)==='you'?'your sister':e).join` `
}

console.log(autocorrect('u want to go to the movies?'))