encrypt=(t,r)=>!t?'':[...t].map(e=>String.fromCharCode((e.charCodeAt()+r)%256)).join``

console.log(encrypt("vgebjmzgjryikuehhddjdr", 367))