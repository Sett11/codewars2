function wordMesh(a) {
  console.log(a);
  const arr = [];
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === a[i + 1]) {
        arr.push(a[i]);
        i+=1
      }
    for (let j = 0; j < a[i].length; j++) {
      if (a[i + 1].slice(0, a[i + 1].length / 2 + 1).match(a[i].slice(j))) {
        if (a[i].slice(j).length>1&&a[i].slice(j)[0] === a[i + 1][0] &&a[i].slice(j)[1] === a[i + 1][1]){
            arr.push(a[i].slice(j))
            break
        }
          if(a[i].slice(j).length===1&&a[i].slice(j)===a[i+1][0]){
            arr.push(a[i].slice(j))
            break
          }
      }
    }
  }return arr.length === a.length - 1 ? arr.join`` : "failed to mesh";
}
console.log(wordMesh(["abandon", "donation", "onion", "ongoing"]));
console.log(
  wordMesh([
    "chlorine",
    "brinemore",
    "oregon",
    "gonzaga",
    "gambino",
    "inoculate",
  ])
);
console.log(
  wordMesh([
    "bookpencil",
    "pencilpapertypewritercomputer",
    "computersoftwarehardware",
    "warehousestoragecrates",
    "ratespricesdiscount",
    "ratespricesdiscount",
    "counterintuitive",
    "vertigofallinghighup",
  ])
);
console.log(
  wordMesh([
    "pneumonia",
    "niacin",
    "cinnamon",
    "monotheist",
    "sisterhood",
    "oddity",
    "typecast",
    "castle",
    "lenient",
    "entrapment",
  ])
);
console.log(wordMesh(["golden", "nebula", "landfall", "llama", "amanda"]));
