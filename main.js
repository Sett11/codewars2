String.prototype.formatWith = function (...a) {
    let i=0,s=this.replace(/{/g,'&').replace(/}/g,'@')
    while(a.length)s=s.replace(new RegExp(`&${i++}@`,'g'),a.shift())
    return s.replace(/&/g,'{').replace(/@/g,'}')
}

console.log('{0} + {0} = {1}'.formatWith('1','2'))
console.log('Testing {1}'.formatWith('kata'))