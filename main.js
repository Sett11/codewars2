function decipher(s){
    const a='abcdefghijklmnopqrstuvwxyz'
    return s.split` `.map(e=>e.replace(/./g,u=>{
        let v=u.toLowerCase()
        let t=a.includes(v)?a[(a.indexOf(v)+7)%a.length]:v
        return u===u.toUpperCase()?t.toUpperCase():t.toLowerCase()
    })).join` `
}

console.log(decipher('lvahhe bl lh uhkbgz b vtg\'m uxebxox maxkx tkx lh ftgr ahnkl exym'))
console.log(decipher('HFZ FTR RHNK WKXLL BL LH VNMX'))