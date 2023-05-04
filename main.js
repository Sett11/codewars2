mnemonicLookup=(g,w)=>{
  return !this[String(g)]?'There is no mnemonic for this.':!this[String(g)][w]?`You're onto something, but still quite far off.`:this[String(g)][w]
}
