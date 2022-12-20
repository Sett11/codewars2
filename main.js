const countDeafRats = (town) => {
  if(town != null){
    [left,right]=town.split('P');
        const a=left+right.split('').reverse().join('');
        const b=(a.match(/O~|~O/gi)||[]).filter(v=>v=='O~').length;
         return b;
  }
  return 0;   
}
console.log(countDeafRats('PO~O~O~O~  O~  O~~O~OO~O~O~  O~O~O~O~O~~O~O  O~O~O~O~O~O~O~O~O~O~'));
