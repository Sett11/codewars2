function cleverSplit(s){
  s=s.split` `
  for(let i=0;i<s.length;i++){
    if(s[i].includes('[')&&!s[i].includes(']')){
      let tmp=s[i]
      for(let j=i+1;j<s.length;j++){
        tmp+=' '+s[j]
        if(s[j].includes(']')){
          s=s.slice(0,i).concat(tmp).concat(s.slice(j+1))
          break
        }
      }
    }
  }return s
}

console.log(cleverSplit('!wguqh [!asaape] [!aaaamk] [cipck] !klapr ndxaa [!abya !zpae aidtf auzo] [!afqdn] !adha !uoaqf jhci jzeop abav yodyg [niyua] !apza [!fxraa !rayy !aagcae axlea !iyyk wazat raaa !pandg !mmsqg !rawgx] !poeaa !zsmrq !rchkc'))