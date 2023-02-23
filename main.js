String.prototype.whitespace=function(){
  return JSON.stringify(this).replace(/[" ]/g,'').replace(/\\t/g,'').replace(/\\s/g,'').replace(/\\r/g,'').replace(/\\n/g,'').length===0
}

console.log('\t\t n\t'.whitespace())