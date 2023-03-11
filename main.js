sortTheInnerContent=w=>w.split` `.map(e=>e.length>3?e.charAt(0)+e.slice(1,e.length-1).split``.sort().reverse().join``+e.charAt(e.length-1):e).join` `

console.log(sortTheInnerContent("sort the inner content in descending order"))
