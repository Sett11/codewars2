function theBiggestSearchKeys(...a){
    if(![...a].length)return "''"
    let l=[...a].sort((a,b)=>b.length-a.length)[0].length
    return `${[...a].filter(e=>e.length===l).map(e=>`'${e}`).sort().join`', `}'`
}

  console.log(theBiggestSearchKeys("small keyword", "how to coding?", "very nice kata", "a lot of keys", "I like Ruby!!!"))