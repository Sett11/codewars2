const toUnderScore=s=>{
    let c=s.replace(/[A-Z]/g,'_$&').replace(/\d+/g,'_$&').replace(/__/g,'_')
    if(s[0]!=='_'&&c[0]==='_')c=c.slice(1)
    return c
}

  console.log(toUnderScore('_IfATestStartAndEndsWithUnderscore_ItShouldBeTheSame_'))