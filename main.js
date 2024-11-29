const getHashtags=s=>{
    if(typeof s!=='string')return []
    let r=(' '+s+' ').replace(/#+/g,'#').match(/\s#[A-z]+\s/g)
    return r?[r[0].trim().slice(1)]:[]
}

console.log(getHashtags("Hello #world"))
console.log(getHashtags("too ##many tags"))
console.log(getHashtags("#blue#red#yellow#green"))
console.log(getHashtags("#lol #sorryNotSorry #heya #coolbeans"))