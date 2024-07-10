String.prototype.isLetter=function(){
  let n=this.charCodeAt()
  return this.length===1&&((64<n&&n<91)||(96<n&&n<123)||(191<n&&n<224)||(223<n&&n<260))
}