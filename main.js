generateHashtag=(s,c='#'+s.split` `.filter(e=>e).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join``)=>c.length>140||!s||!s.match(/[a-zA-Z0-9]/g)?false:c
console.log(generateHashtag("   "))