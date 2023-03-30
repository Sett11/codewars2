String.prototype.camelCase=function(){
    return this.split` `.map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join``
}

  console.log("test case".camelCase())