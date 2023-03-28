function DocumentParser(reader){
  this.reader = reader;
  this.reset();
}
DocumentParser.prototype.reset = function(){
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
}
DocumentParser.prototype.parse = function(){
  let s=this.reader.getChunk(),z=null,v=null
  while(s!==''){
    for(let i=0;i<s.length;i++){
      v=z,z=s[i]
      if(z!=='\n')this.charCount++
      if((z=== ' '||z==='\n')&&v!== ' '&&v!=='\n'&&v!= null)this.wordCount++
      if(z==='\n')this.lineCount++
    }
    s=this.reader.getChunk()
  }
 if (z!=null&&z!==''&&z!=='\n'&&z!== ' ')this.wordCount += 1
  if ((z!=null&&z!=='')|z==='\n')this.lineCount += 1
}