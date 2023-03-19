function emotional(s,e){
   if(e==='Natural'){
    return s.split` `.map((e,i,v)=>i===0?e.charAt(0).toUpperCase()+e.slice(1):v[i-1].match(/[\,\.+\!+\?\;+\:+]/)?e.charAt(0).toUpperCase()+e.slice(1):e).join` `
   }
   if(e==='Prim'){
    return s.split` `.map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join` `
   }
   if(e==='Joyful'){
    return s.split` `.map(e=>e.length<2?e:e.replace(/[aioue]/gi,e=>e.repeat(5))).map((e,i,v)=>i===0?e.charAt(0).toUpperCase()+e.slice(1):v[i-1].match(/[\,\.+\!+\?\;+\:+]/)?e.charAt(0).toUpperCase()+e.slice(1):e).join` `
   }
   if(e==='Painful'){
    return s.split` `.map((e,i,v)=>i===0?e.charAt(0).toUpperCase()+e.slice(1):v[i-1].match(/[\,\.+\!+\?\;+\:+]/)?e.charAt(0).toUpperCase()+e.slice(1):e).map((e,i,v)=>i===v.length-1?e:e.replace(/[\W_]/g,'')).join`...`
   }
   if(e==='Excited'||e==='Angry'){
    return s.split` `.map(e=>e.length<2?e:e.replace(/[aioue]/gi,e=>e.repeat(5))).map(e=>(e.charAt(0).toUpperCase()+e.slice(1)).replace(/[^\w]/g,'!!!')).join` `
   }
   if(e==='Rage'||e==='Ecstasy'){
    s=s.toUpperCase().split` `.map(e=>e.length<2?e:e.replace(/[aioue]/gi,e=>e.repeat(5)))
   return s.join` `.replace(/[\,\.+\!+\?\;+\:+]/g,'&').split`&`.filter(e=>e).map(e=>e+'!'.repeat(e.replace(/ /g,'').length)).join``
   }
   return s
}

console.log(emotional('go where you want to go; those who hurt, May you have enough happiness to make you sweet, Please send this message to those people who mean something to you,','Joyful'))