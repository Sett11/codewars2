const a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const decryptPassword=s=>s.slice(0,s.lastIndexOf('-')).split`-`.map(e=>a[e]).join``

console.log(decryptPassword("44-19-4-21-4-13-Seentv"))