String.prototype.trim = function(c=' '){
    return this.replace(new RegExp(`^${c}+|${c}+$`,'gi'),'')
}

console.log("LLLHello Worldlll".trim("l"))
console.log("   Hello World                 ".trim())